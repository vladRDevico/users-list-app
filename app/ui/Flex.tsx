import { Stack, styled } from 'tamagui';

export const Flex = styled(Stack, {
  variants: {
    fill: {
      true: {
        flex: 1,
      },
    },
    centered: {
      true: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    row: {
      true: {
        flexDirection: 'row',
      },
    },
    column: {
      true: {
        flexDirection: 'column',
      },
    },
    fitContent: {
      true: { alignSelf: 'flex-start' },
    },
  } as const,
});
