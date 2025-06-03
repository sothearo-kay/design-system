import type { RecipeVariant } from 'styled-system/css';
import type { buttonRecipe } from './Button.styles';
import type { ButtonHTMLAttributes } from 'vue';

type _ButtonVariants = RecipeVariant<typeof buttonRecipe>;
type _PartialButtonVariants = Partial<_ButtonVariants>;
type _ButtonHTMLAttrs = ButtonHTMLAttributes;

export type ButtonAttrs = _ButtonHTMLAttrs & _PartialButtonVariants;

export interface ButtonProps
  extends /* @vue-ignore */ _ButtonHTMLAttrs,
    /* @vue-ignore */ _PartialButtonVariants {
  loading?: boolean;
}
