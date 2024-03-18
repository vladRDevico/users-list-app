import { Flex } from '../ui/Flex';
import { Typography } from '../ui/Typography';
import { ListX } from '@tamagui/lucide-icons';

export function EmptyList({ text = 'Empty List' }: { text: string }) {
  return (
    <Flex centered>
      <ListX size={'$iconExtraLarge'} color={'$white'} />
      <Typography variant="titleMedium" color={'$white'}>
        {text}
      </Typography>
    </Flex>
  );
}
