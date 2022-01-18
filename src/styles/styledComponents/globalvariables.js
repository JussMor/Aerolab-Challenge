import { createGlobalStyle,css } from 'styled-components'

const theme = css`
  :root, .light-theme {
    --neutral-color-900: #252f3d;
    --neutral-color-600: #7c899c;
    --neutral-color-500: #8fa3bf;
    --neutral-color-300: #252f3d;
    --neutral-color-200: #e6edf7;
    --neutral-color-100: #f5f9ff;
    --neutral-color-0:   #ffffff;

    --default-brand-color: linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);
    --hover-brand-color:   linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%);
    --light-brand-color:   #E5F0FF;
    --light2-brand-color:  #CCE1FF ;

    --default-green-color: #29cc74;
    --light-green-color:   #ccffe3;

    --default-red-color: #e07f4f;
    --light-red-color:   #ffdfd9;

    --specials-bg-color:     linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%);
    --specials-bg-color-50:  linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%);
    --specials-aerolab:      linear-gradient(180deg, #FF8800 0%, #FF6600 100%);
  }

  .dark-theme {
    --primary-color: #ff0000;
    --primary-bg: #212121;
  }
`

export const GlobalStyles = createGlobalStyle(theme)
