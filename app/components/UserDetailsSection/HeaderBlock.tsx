import { styled, useTheme } from 'tamagui';
import { Flex } from '../../ui/Flex';

import { CircleUserRound } from '@tamagui/lucide-icons';
import LinearGradient from 'react-native-linear-gradient';

export function HeaderBlock() {
  const theme = useTheme();
  return (
    <Flex height={140}>
      <Flex height={100}>
        <HeaderGradient colors={[theme.gradientColor1.val, theme.gradientColor2.val]} />
      </Flex>

      <Flex
        height={100}
        width={100}
        centered
        backgroundColor={'$backgroundSecondary'}
        position="absolute"
        top={40}
        borderRadius={50}
        left={10}
      >
        <CircleUserRound size={100} color={'$white'} />
      </Flex>
    </Flex>
  );
}

const HeaderGradient = styled(LinearGradient, {
  flex: 1,

  borderRadius: '$rounded4',
});
