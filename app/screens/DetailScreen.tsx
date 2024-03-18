import { useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { getTokens } from 'tamagui';
import { Flex } from '../ui/Flex';
import { useUserDetail } from '../services/user';
import { UserDetailsSection } from '../components/UserDetailsSection/UserDetailsSection';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NotFound } from '../components/NotFound';

interface DetailsScreenProps extends NativeStackScreenProps<RootStackParamList, 'Details'> {}

function DetailsScreen({ route }: DetailsScreenProps) {
  const { id } = route.params;
  const { user, isLoading } = useUserDetail(id);

  const insets = useSafeAreaInsets();

  const content = useMemo(() => {
    if (isLoading) {
      return (
        <Flex flex={1} centered>
          <ActivityIndicator size={'large'} />
        </Flex>
      );
    }
    return user ? (
      <UserDetailsSection
        name={user.name}
        userName={user.username}
        email={user.email}
        phone={user.phone}
        company={user.company.name}
        city={user.address.city}
      />
    ) : (
      <NotFound />
    );
  }, [isLoading, user]);

  return (
    <Flex
      fill
      column
      paddingHorizontal="$spacing16"
      paddingTop="$spacing12"
      paddingBottom={getTokens().space.spacing12.val + insets.bottom}
      backgroundColor="$backgroundPrimary"
    >
      {content}
    </Flex>
  );
}

export default DetailsScreen;
