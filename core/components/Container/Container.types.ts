import type { RecipeVariant, SystemStyleObject } from '~/styled-system/types';
import type { containerRecipe } from './Container.styles';
import type { HTMLAttributes } from 'vue';

type ContainerVariants = RecipeVariant<typeof containerRecipe>;
export type ContainerAttrs = HTMLAttributes & Partial<ContainerVariants>;

export interface ContainerProps /* @vue-ignore */ {
  as?: 'div' | 'section' | 'article' | 'main' | 'aside' | 'header' | 'footer';
  css?: SystemStyleObject;
}
