import { Global } from '@emotion/react';

const CosiTimesFont = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Cosi Times';
        font-style: normal;
        font-weight: normal;
        font-display: swap;

        src: url("/assets/fonts/cosi-times.woff") format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {font-family: "Cosi Times Light Condensed"; src: url("//db.onlinewebfonts.com/t/39f1392b405636e18b86258bbb58bb45.eot"); src: url("//db.onlinewebfonts.com/t/39f1392b405636e18b86258bbb58bb45.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/39f1392b405636e18b86258bbb58bb45.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/39f1392b405636e18b86258bbb58bb45.woff") format("woff"), url("//db.onlinewebfonts.com/t/39f1392b405636e18b86258bbb58bb45.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/39f1392b405636e18b86258bbb58bb45.svg#Cosi Times Light Condensed") format("svg"); }
      `}
  />
);

export default CosiTimesFont;