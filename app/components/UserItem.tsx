import { Separator } from 'tamagui';
import { Flex } from '../ui/Flex';
import { CircleUserRound, Mail } from '@tamagui/lucide-icons';
import { Typography } from '../ui/Typography';

interface UserItemProps {
  title: string;
  subtitle: string;
  onPress: () => void;
}

export function UserItem({ title, subtitle, onPress }: UserItemProps) {
  return (
    <Flex
      row
      fill
      justifyContent="flex-start"
      paddingHorizontal="$spacing16"
      height={90}
      borderWidth={1}
      borderColor={'$borderPrimary'}
      backgroundColor={'$backgroundSecondary'}
      borderRadius={'$rounded8'}
      gap="$spacing16"
      onPress={onPress}
      alignItems="center"
    >
      <CircleUserRound color={'$white'} size={'$iconLarge'} />
      <Flex gap="$spacing8" justifyContent="center" flex={1}>
        <Typography variant="titleMedium" color={'$textPrimary'}>
          {title}
        </Typography>
        <Separator alignSelf="stretch" borderColor={'$borderPrimary'} />
        <Flex row gap="$spacing4" alignItems="center">
          <Mail color={'$textSecondary'} size={'$iconSmall'} />
          <Typography variant="bodyMedium" color={'$textSecondary'}>
            {subtitle}
          </Typography>
        </Flex>
      </Flex>
    </Flex>
  );
}
