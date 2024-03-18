import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailScreen';
import UserListScreen from '../screens/UserListScreen';
import { ROUTES } from '../constants/routes';
import { useTheme } from 'tamagui';
import { RootStackParamList } from '../types/navigation';

const AppStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName={ROUTES.USER_LIST}>
        <AppStack.Screen
          name={ROUTES.USER_LIST}
          component={UserListScreen}
          options={{
            headerTitle: 'Users',
            headerStyle: {
              backgroundColor: theme.backgroundSaturated.val,
            },
            headerTitleStyle: {
              color: theme.white.val,
            },
          }}
        />
        <AppStack.Screen
          name={ROUTES.DETAILS}
          component={DetailsScreen}
          options={{
            headerTitle: 'User Details',
            headerStyle: {
              backgroundColor: theme.backgroundSaturated.val,
            },
            headerTitleStyle: {
              color: theme.white.val,
            },
            headerTintColor: theme.white.val,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
