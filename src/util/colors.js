const colors = {
  red: { gradientColorOne: '#C21010', gradientColorTwo: '#EB4747', color: 'white' },
  black: { gradientColorOne: '#000000', gradientColorTwo: '#191A19', color: 'white' },
  blue: { gradientColorOne: '#1363DF', gradientColorTwo: '#47B5FF', color: 'white' },
  brown: { gradientColorOne: '#472D2D', gradientColorTwo: '#704F4F', color: 'white' },
  gray: { gradientColorOne: '#748DA6', gradientColorTwo: '#9CB4CC', color: 'white' },
  green: { gradientColorOne: '#1C6758', gradientColorTwo: '#3D8361', color: 'white' },
  pink: { gradientColorOne: '#F65A83', gradientColorTwo: '#FF87B2', color: 'white' },
  purple: { gradientColorOne: '#645CAA', gradientColorTwo: '#A084CA', color: 'white' },
  white: { gradientColorOne: '#FFFFFF', gradientColorTwo: '#F9F9F9', color: 'black' },
  yellow: { gradientColorOne: '#FFCB42', gradientColorTwo: '#FFF38C', color: 'white' },
}

export const getColorByName = (colorName) => {
  return colors[colorName]?.color || colors.red.color;
}

export const getGradientColorOneByName = (colorName) => {
  return colors[colorName]?.gradientColorOne || colors.red.gradientColorOne;
}

export const getGradientColorTwoByName = (colorName) => {
  return colors[colorName]?.gradientColorTwo || colors.red.gradientColorTwo;
}