import { Flex } from '../../ui/Flex';

import { HeaderBlock } from './HeaderBlock';
import { DetailsBlock } from './DetailsBlock';
import { NameBlock } from './NameBlock';

interface DetailsSectionProps {
  name: string;
  userName: string;
  email: string;
  phone: string;
  company: string;
  city: string;
}

export function UserDetailsSection({
  name,
  userName,
  email,
  phone,
  city,
  company,
}: DetailsSectionProps) {
  return (
    <Flex
      borderWidth={1}
      flex={1}
      padding="$spacing12"
      borderRadius={'$rounded8'}
      borderColor={'$borderPrimary'}
      gap="$spacing8"
      backgroundColor={'$backgroundSecondary'}
    >
      <HeaderBlock />
      <Flex paddingHorizontal="$spacing16" gap="$spacing16">
        <NameBlock name={name} username={userName} />
        <DetailsBlock email={email} phone={phone} company={company} city={city} />
      </Flex>
    </Flex>
  );
}
