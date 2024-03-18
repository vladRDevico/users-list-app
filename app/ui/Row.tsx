import { Typography } from './Typography';
import { Flex } from './Flex';

interface RowProps {
  title: string;
  subtitle: string;
  icon?: JSX.Element;
}

export const Row = ({ title, subtitle, icon }: RowProps) => {
  return (
    <Flex row alignItems="center" justifyContent="space-between">
      <Flex row gap="$spacing8" fill alignItems="center">
        {icon ? icon : null}
        <Typography variant="bodyMedium" color={'$textSecondary'} fontWeight={'$10'}>
          {title}
        </Typography>
      </Flex>
      <Flex>
        <Typography variant="bodyMedium" color={'$textPrimary'}>
          {subtitle}
        </Typography>
      </Flex>
    </Flex>
  );
};
