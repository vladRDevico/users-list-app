import { styled, Text, GetProps } from 'tamagui';

export const Typography = styled(Text, {
  variants: {
    variant: {
      titleMedium: {
        fontSize: '$6',
        fontWeight: 'bold',
        letterSpacing: 1.5,
      },
      titleLarge: {
        fontSize: '$9',
        fontWeight: 'bold',
        letterSpacing: 1.5,
      },
      bodyMedium: {
        fontSize: '$4',
        letterSpacing: 0.5,
      },
      bodyLarge: {
        fontSize: '$5',
        letterSpacing: 1,
      },
    },
  } as const,
});

export type TypographyProps = GetProps<typeof Typography>;
