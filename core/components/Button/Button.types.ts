import type { RecipeVariant } from 'styled-system/css';
import type { buttonRecipe } from './Button.styles';
import type { ButtonHTMLAttributes } from 'vue';

type _ButtonVariants = RecipeVariant<typeof buttonRecipe>;
type _ButtonHTMLAttrs = ButtonHTMLAttributes;

export type ButtonAttrs = _ButtonHTMLAttrs & _ButtonVariants;

export interface ButtonProps
  extends /* @vue-ignore */ _ButtonHTMLAttrs,
    /* @vue-ignore */ _ButtonVariants {
  loading?: boolean;
}
