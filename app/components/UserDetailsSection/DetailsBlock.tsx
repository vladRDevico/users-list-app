import { Separator } from 'tamagui';
import { Flex } from '../../ui/Flex';
import { Row } from '../../ui/Row';

import { Building, Mail, MapPinned, Phone } from '@tamagui/lucide-icons';

import { Typography } from '../../ui/Typography';

interface DetailsBlockProps {
  email: string;
  phone: string;
  company: string;
  city: string;
}

export function DetailsBlock({ email, phone, company, city }: DetailsBlockProps) {
  return (
    <Flex gap="$spacing16">
      <Typography variant="titleMedium" color={'$textPrimary'}>
        Details
      </Typography>
      <Separator />
      <Flex gap="$spacing16">
        <Row icon={<Mail color="$textSecondary" />} title={'Email'} subtitle={email} />
        <Row icon={<Phone color="$textSecondary" />} title={'Phone'} subtitle={phone} />
        <Row icon={<Building color="$textSecondary" />} title={'Company'} subtitle={company} />
        <Row icon={<MapPinned color="$textSecondary" />} title={'City'} subtitle={city} />
      </Flex>
    </Flex>
  );
}
