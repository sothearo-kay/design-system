import type { RecipeVariant, SystemStyleObject } from '~/styled-system/types';
import type { headingRecipe } from './Heading.styles';

type _HeadingVariant = RecipeVariant<typeof headingRecipe>;
type _PartialHeadingVaraint = Partial<_HeadingVariant>;

export type HeadingAttrs = _PartialHeadingVaraint;
export interface HeadingProps extends /* @vue-ignore */ _PartialHeadingVaraint {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  css?: SystemStyleObject;
  color?: string;
}
