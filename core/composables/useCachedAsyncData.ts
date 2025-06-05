import type { AsyncDataOptions } from '#app';

interface CachedAsyncDataOptions<T> extends AsyncDataOptions<T> {
  expiry?: number;
  skipCache?: boolean;
}

export const useCachedAsyncData = <T>(
  key: string,
  handler: () => Promise<T>,
  options: CachedAsyncDataOptions<T> = {}
) => {
  const {
    expiry = 5 * 60 * 1000,
    skipCache = false,
    transform: userTransform,
    ...asyncDataOptions
  } = options;

  return useAsyncData(key, handler, {
    ...asyncDataOptions,
    getCachedData(key, nuxtApp) {
      if (skipCache) return null;

      const cached = nuxtApp.payload.data[key];
      if (!cached) return null;

      const age = Date.now() - cached._timestamp;
      return age > expiry ? null : cached.data;
    },
    transform(data: T) {
      const transformedData = userTransform ? userTransform(data) : data;
      return {
        ...transformedData,
        _timestamp: Date.now()
      };
    }
  });
};
