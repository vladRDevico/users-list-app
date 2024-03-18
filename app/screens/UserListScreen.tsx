import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getTokens } from 'tamagui';
import { UserItem } from '../components/UserItem';
import { ROUTES } from '../constants/routes';
import { useUsers } from '../services/users';
import { Flex } from '../ui/Flex';
import { User } from '../types/user';
import { RootStackParamList } from '../types/navigation';
import { EmptyList } from '../components/EmptyList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface UserListScreenProps extends NativeStackScreenProps<RootStackParamList, 'UserList'> {}

function UserListScreen({ navigation }: UserListScreenProps) {
  const { users, isLoading, refetch, isRefetching } = useUsers();

  const insets = useSafeAreaInsets();

  const renderItem: ListRenderItem<User> = ({ item }) => {
    const { id, name, email } = item;
    return (
      <UserItem
        title={name}
        subtitle={email}
        onPress={() =>
          navigation.navigate(ROUTES.DETAILS, {
            id,
          })
        }
      />
    );
  };

  return (
    <Flex
      fill
      column
      paddingHorizontal="$spacing16"
      paddingTop="$spacing16"
      paddingBottom={getTokens().space.spacing16.val + insets.bottom}
      backgroundColor={'$backgroundPrimary'}
    >
      {isLoading ? (
        <Flex flex={1} centered>
          <ActivityIndicator size={'large'} />
        </Flex>
      ) : (
        <FlashList
          showsVerticalScrollIndicator={false}
          onRefresh={refetch}
          refreshing={isRefetching}
          data={users}
          renderItem={renderItem}
          estimatedItemSize={150}
          ItemSeparatorComponent={() => <Flex height={10} />}
          ListEmptyComponent={<EmptyList text="No users found." />}
        />
      )}
    </Flex>
  );
}

export default UserListScreen;
