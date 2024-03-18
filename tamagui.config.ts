import { fonts } from '@tamagui/config/v3';

import { createTamagui, createTokens } from 'tamagui';
import { darkColors, lightColors } from './app/themes/colors';
import { borderRadius } from './app/themes/radiuses';
import { spacing } from './app/themes/spacing';
import { zIndexes } from './app/themes/zIndexes';
import { sizes } from './app/themes/sizes';

export type AppConfig = typeof appConfig;

const space = { ...spacing, true: spacing.spacing16 };
const tokens = createTokens({
  space,
  size: { ...sizes, ...spacing, true: sizes.iconMedium },
  color: lightColors,
  radius: { ...borderRadius, true: borderRadius.none },
  zIndex: { ...zIndexes, true: zIndexes.default },
});

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
const appConfig = createTamagui({
  tokens,
  fonts,
  themes: {
    dark: darkColors,
    light: lightColors,
  },
});
export default appConfig;
