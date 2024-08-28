export const buttonStyles = {
    base: {
      borderRadius: '4px',
      fontWeight: '400',
    },
    sizes: {
      small: {
        padding: '9px 16px',
        fontSize: '14px',
      },
      medium: {
        padding: '10px 16px',
        fontSize: '16px',
      },
      large: {
        padding: '12px 16px',
        fontSize: '16px',
      },
    },
    variants: {
      primary: {
        default: {
          backgroundColor: '#3B5AA6',
          color: '#FFFFFF',
        },
        hover: {
          backgroundColor: '#293F74',
          color: '#FFFFFF',
        },
        pressed: {
          backgroundColor: '#182442',
          color: '#FFFFFF',
        },
        disabled: {
          backgroundColor: '#E3E6E9',
          color: '#A8AEB5',
        },
      },
      secondary: {
        default: {
          backgroundColor: 'transparent',
          color: '#3B5AA6',
          border: '1px solid #3B5AA6',
        },
        hover: {
          backgroundColor: '#EBEFF6',
          color: '#3B5AA6',
          border: '1px solid #3B5AA6',
        },
        pressed: {
          backgroundColor: '#B1BDDB',
          color: '#3B5AA6',
          border: '1px solid #3B5AA6',
        },
        disabled: {
          backgroundColor: 'transparent',
          color: '#C7CDD3',
          border: '1px solid #C7CDD3',
        },
      },
      'secondary-grey': {
        default: {
          backgroundColor: 'transparent',
          color: '#44484C',
          border: '1px solid #44484C',
        },
        hover: {
          backgroundColor: '#F2F5F7',
          color: '#5A6066',
          border: '1px solid #44484C',
        },
        pressed: {
          backgroundColor: '#F2F5F7',
          color: '#44484C',
          border: '1px solid #44484C',
        },
        disabled: {
          backgroundColor: '#transparent',
          color: '#C7CDD3',
          border: '1px solid #C7CDD3',
        },
      },
      tertiary: {
        default: {
          backgroundColor: 'transparent',
          color: '#3B5AA6',
        },
        hover: {
          backgroundColor: '#EBEFF6',
          color: '#3B5AA6',
        },
        pressed: {
          backgroundColor: '#B1BDDB',
          color: '#3B5AA6',
        },
        disabled: {
          backgroundColor: 'transparent',
          color: '#C7CDD3',
        },
      },
      'tertiary-grey': {
        default: {
          backgroundColor: 'transparent',
          color: '#44484C',
        },
        hover: {
          backgroundColor: '#F2F5F7',
          color: '#5A6066',
        },
        pressed: {
          backgroundColor: '#F2F5F7',
          color: '#44484C',
        },
        disabled: {
          backgroundColor: 'transparent',
          color: '#C7CDD3',
        },
      },
    },
  };
  