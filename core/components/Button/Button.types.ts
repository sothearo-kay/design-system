import type { RecipeVariant } from 'styled-system/css';
import type { buttonRecipe } from './Button.styles';
import type { ButtonHTMLAttributes } from 'vue';

type _ButtonVariants = RecipeVariant<typeof buttonRecipe>;
type _PartialButtonVariants = Partial<_ButtonVariants>;

export type ButtonAttrs = ButtonHTMLAttributes & _PartialButtonVariants;
export interface ButtonProps extends /* @vue-ignore */ ButtonAttrs {
  loading?: boolean;
}
