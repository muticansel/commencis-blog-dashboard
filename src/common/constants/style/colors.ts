import colors from 'windicss/colors'

export const customColors = {
  blue: {
    50: '#E0ECFF',
    100: '#BDD6FF',
    200: '#80B0FF',
    300: '#3D87FF',
    400: '#0060FA',
    500: '#0047BB',
    600: '#003996',
    700: '#001C4B',
  },
  gray: {
    50: '#F7F8F9',
    100: '#EEF0F3',
    200: '#D5DAE1',
    300: '#BBC3CF',
    400: '#8896AB',
    500: '#556987',
    600: '#4D5F7A',
    700: '#404F65',
    800: '#333F51',
    900: '#2A3342',
  },
  purple: {
    50: '#E3DFF7',
    100: '#C8BEEE',
    200: '#917DDD',
    300: '#593DCD',
    400: '#3B2692',
    500: '#211551',
  },
  gradients: {
    darkDream: 'linear-gradient(90deg, #211551 0%, #2F7BF5 100%)',
  },
}

export const allColors = { ...colors, ...customColors }
