/**
 * App Theme - Colors
 */

const app = {
  background: '#0A0333',
  cardBackground: '#FFFFFF',
  listItemBackground: '#FFFFFF',
};

const brand = {
  brand: {
    primary: '#3D30E3',
    secondary: '#17233D',
    accent: '#41ff89',
    light: '#A3A3A3',
  },
};

const text = {
  textPrimary: '#000',
  textSecondary: '#777777',
  headingPrimary: brand.brand.primary,
  headingSecondary: brand.brand.primary,
};

const borders = {
  border: '#171717',
};

const tabbar = {
  tabbar: {
    background: '#000',
    iconDefault: '#BABDC2',
    iconSelected: brand.brand.accent,
  },
};

export default {
  ...app,
  ...brand,
  ...text,
  ...borders,
  ...tabbar,
};
