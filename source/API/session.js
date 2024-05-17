import * as Keychain from 'react-native-keychain';

// Lưu username
export const storeID = async (id) => {
  let stringvalue = String(id);
  await Keychain.setGenericPassword('id', stringvalue);
};

// Lấy username
export const getID = async () => {
  const credentials = await Keychain.getGenericPassword();
  if (credentials) {
    return credentials.password; // Trong trường hợp này, password là username
  }
};