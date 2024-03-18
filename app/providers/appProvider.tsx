import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TamaguiProvider } from 'tamagui';
import appConfig from '../../tamagui.config';
import { queryClient } from '../services/client';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../configs/toast.config';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <TamaguiProvider config={appConfig} defaultTheme={isDarkMode ? 'dark' : 'light'}>
          {children}
          <Toast config={toastConfig} />
        </TamaguiProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};
