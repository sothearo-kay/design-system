import type { AsyncDataOptions } from '#app';

interface CachedData<T> {
  data: T;
  _timestamp: number;
}

interface CachedAsyncDataOptions<T> extends Omit<AsyncDataOptions<CachedData<T>>, 'getCachedData'> {
  expiry?: number;
  skipCache?: boolean;
}

export const useCachedAsyncData = <T>(
  key: string,
  handler: () => Promise<T>,
  options: CachedAsyncDataOptions<T> = {}
) => {
  const { expiry = 5 * 60 * 1000, skipCache = false, ...asyncDataOptions } = options;

  return useAsyncData<CachedData<T>>(
    key,
    async () => {
      const data = await handler();
      return {
        data,
        _timestamp: Date.now()
      };
    },
    {
      ...asyncDataOptions,
      getCachedData(key, nuxtApp) {
        if (skipCache) return undefined;

        const cached = nuxtApp.payload.data[key] as CachedData<T> | undefined;
        if (!cached || !cached._timestamp) return undefined;

        const age = Date.now() - cached._timestamp;
        return age > expiry ? undefined : cached;
      }
    }
  );
};
