import { Flex } from '../../ui/Flex';

import { AtSign } from '@tamagui/lucide-icons';
import { Typography } from '../../ui/Typography';

interface NameBlockProps {
  name: string;
  username: string;
}

export function NameBlock({ name, username }: NameBlockProps) {
  return (
    <Flex gap="$spacing8">
      <Typography variant="titleLarge" color="$textPrimary">
        {name}
      </Typography>
      <Flex
        row
        gap="$spacing4"
        alignItems="center"
        fitContent
        padding="$spacing8"
        backgroundColor={'$backgroundSaturated'}
        borderRadius={'$rounded8'}
      >
        <AtSign color={'$textSecondary'} size={'$iconSmall'} />
        <Typography variant="bodyLarge" color={'$textSecondary'}>
          {username}
        </Typography>
      </Flex>
    </Flex>
  );
}
