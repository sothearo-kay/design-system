import { cva } from 'styled-system/css';

export const buttonRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'md',
    fontWeight: 'medium',
    transition: 'all 0.2s',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  },
  variants: {
    variant: {
      primary: {
        bg: 'blue.500',
        color: 'white',
        _hover: {
          bg: 'blue.600'
        }
      },
      secondary: {
        bg: 'gray.200',
        color: 'gray.800',
        _hover: {
          bg: 'gray.300'
        }
      },
      outline: {
        bg: 'transparent',
        color: 'blue.500',
        border: '1px solid',
        borderColor: 'blue.500',
        _hover: {
          bg: 'blue.50'
        }
      }
    },
    size: {
      sm: {
        px: 3,
        py: 1.5,
        fontSize: 'sm'
      },
      md: {
        px: 4,
        py: 2,
        fontSize: 'md'
      },
      lg: {
        px: 6,
        py: 3,
        fontSize: 'lg'
      }
    }
  }
});
