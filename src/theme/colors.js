const app = {
  background: '#E9EBEE',
  backgroundDark: '#0A0333',
  backgroundLight: '#FFF',
  cardBackground: '#FFFFFF',
  listItemBackground: '#FFFFFF',
};

const cashfly = {

};

const brand = {
  brand: {
    primary: '#3D30E3',
    secondary: '#9ED131',
    accent: '#9ED131',
    light: '#A3A3A3',
  },
};

const text = {
  textPrimary: '#222222',
  textSecondary: '#777777',
  headingPrimary: brand.brand.primary,
  headingSecondary: brand.brand.primary,
};

const borders = {
  border: '#D0D1D5',
};

const tabbar = {
  tabbar: {
    background: '#ffffff',
    iconDefault: '#BABDC2',
    iconSelected: brand.brand.primary,
  },
};

export default {
  ...app,
  ...brand,
  ...cashfly,
  ...text,
  ...borders,
  ...tabbar,
};
