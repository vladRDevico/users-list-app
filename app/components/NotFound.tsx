import { Flex } from '../ui/Flex';
import { Typography } from '../ui/Typography';
import { SearchX } from '@tamagui/lucide-icons';

export function NotFound({ text = 'Not found' }: { text?: string }) {
  return (
    <Flex centered flex={1}>
      <SearchX size={'$iconExtraLarge'} color={'$white'} />
      <Typography variant="titleMedium" color={'$white'}>
        {text}
      </Typography>
    </Flex>
  );
}
