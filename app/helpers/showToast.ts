import Toast from 'react-native-toast-message';

export const showErrorToast = ({ title = 'Error', subtitle = 'Unexpected problems...' }) =>
  Toast.show({
    type: 'error',
    text1: title,
    text2: subtitle,
  });
