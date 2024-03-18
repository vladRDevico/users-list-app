import { BaseToastProps, ErrorToast } from 'react-native-toast-message';

export const toastConfig = {
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      text1Style={{ fontSize: 14 }}
      text2Style={{ color: '#fff', fontSize: 12 }}
      style={{
        top: 25,
      }}
      contentContainerStyle={{
        backgroundColor: '#FF7F7F',
      }}
    />
  ),
};
