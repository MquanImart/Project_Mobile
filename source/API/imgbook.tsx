import { launchCamera, launchImageLibrary, ImagePickerOptions } from 'react-native-image-picker';
import { queryImage } from './query';

export const selectImage = () => {
  let result = null;
    const options: ImagePickerOptions = {
        title: 'Select Image',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      
      launchImageLibrary(options, async (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
          return null;
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
          return null;
        } else {
          return await queryImage(response.uri);
        }
    });
    return null;
};