import { cva } from 'styled-system/css';

export const cardRecipe = cva({
  base: {
    backgroundColor: 'white',
    borderRadius: 'md',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    _dark: {
      backgroundColor: 'gray.800'
    }
  },
  variants: {
    variant: {
      elevated: {
        boxShadow: 'md',
        _hover: {
          boxShadow: 'lg'
        }
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'gray.200',
        _dark: {
          borderColor: 'gray.700'
        }
      },
      ghost: {
        backgroundColor: 'transparent',
        _dark: {
          backgroundColor: 'transparent'
        }
      },
      solid: {
        backgroundColor: 'gray.50',
        _dark: {
          backgroundColor: 'gray.900'
        }
      }
    },
    size: {
      sm: { padding: '3' },
      md: { padding: '4' },
      lg: { padding: '6' },
      xl: { padding: '8' }
    },
    interactive: {
      true: {
        cursor: 'pointer',
        transition: 'all 0.2s',
        _hover: {
          transform: 'translateY(-2px)'
        },
        _active: {
          transform: 'translateY(0)'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md'
  }
});
