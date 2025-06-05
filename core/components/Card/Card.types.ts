import type { RecipeVariant, SystemStyleObject } from '~/styled-system/types';
import type { cardRecipe } from './Card.styles';
import type { HTMLAttributes } from 'vue';

type CardVariants = RecipeVariant<typeof cardRecipe>;
export type CardAttrs = HTMLAttributes & Partial<CardVariants>;

export interface CardProps /* @vue-ignore */ {
  as?: 'div' | 'article' | 'section' | 'aside';
  css?: SystemStyleObject;
}
