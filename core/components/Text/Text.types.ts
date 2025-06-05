import type { RecipeVariant, SystemStyleObject } from '~/styled-system/types';
import type { textRecipe } from './Text.styles';
import type { HTMLAttributes } from 'vue';

type TextVariants = RecipeVariant<typeof textRecipe>;
export type TextAttrs = HTMLAttributes & Partial<TextVariants>;

export interface TextProps /* @vue-ignore */ {
  as?:
    | 'p'
    | 'span'
    | 'div'
    | 'label'
    | 'small'
    | 'strong'
    | 'em'
    | 'mark'
    | 'del'
    | 'ins'
    | 'sub'
    | 'sup';
  color?: string;
  css?: SystemStyleObject;
}
