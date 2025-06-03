import type { RecipeVariant } from '~/styled-system/types';
import type { flexRecipe } from './Flex.styles';
import type { HTMLAttributes } from 'vue';

type _FlexVariants = RecipeVariant<typeof flexRecipe>;
type _PartialFlexVariants = Partial<_FlexVariants>;

export type FlexAttrs = HTMLAttributes & _PartialFlexVariants;
export interface FlexProps extends /* @vue-ignore */ FlexAttrs {
  as?: 'div' | 'section' | 'article' | 'main' | 'aside' | 'nav';
}
