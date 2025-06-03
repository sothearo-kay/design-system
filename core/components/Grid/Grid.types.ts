import type { RecipeVariant } from '~/styled-system/types';
import type { gridRecipe, gridItemRecipe } from './Grid.styles';
import type { HTMLAttributes } from 'vue';

type _GridVariants = RecipeVariant<typeof gridRecipe>;
type _PartialGridVariants = Partial<_GridVariants>;
export type GridAttrs = HTMLAttributes & _PartialGridVariants;

export interface GridProps /* @vue-ignore */ {
  as?: 'div' | 'section' | 'article' | 'main' | 'aside' | 'nav';
}

type _GridItemVariants = RecipeVariant<typeof gridItemRecipe>;
type _PartialGridItemVariants = Partial<_GridItemVariants>;
export type GridItemAttrs = HTMLAttributes & _PartialGridItemVariants;

export interface GridItemProps extends /* @vue-ignore */ GridItemAttrs {
  as?: 'div' | 'section' | 'article' | 'aside' | 'span';
}
