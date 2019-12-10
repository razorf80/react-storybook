import remcalc from 'remcalc';
import Color from 'color';

const colorWhite = Color('#fff');
console.log(colorWhite);

export const theme = {
  colorWhite: colorWhite.hex(),
  colorGreyXxxLight:  colorWhite.darken(0.1).hex(),
  colorPrimary: '#FF0000',
  colorBorder: '#F39C12',
  fontSize: remcalc(16),
  fontSizeSmall: remcalc(14),
}