import { NativeModules } from 'react-native';

const { mylibrary } = NativeModules;

/**
 * Get dummy text from the native module.
 * @returns {Promise<string>} A promise that resolves to the dummy text.
 */
const getDummyText = () => {
  return mylibrary.getDummyText();
};

export default {
  getDummyText,
};
