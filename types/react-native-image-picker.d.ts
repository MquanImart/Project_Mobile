declare module 'react-native-image-picker' {
    import { ImagePickerResponse } from 'react-native-image-picker/src/types';
  
    export interface ImagePickerOptions {
      title?: string;
      cancelButtonTitle?: string;
      takePhotoButtonTitle?: string;
      chooseFromLibraryButtonTitle?: string;
      customButtons?: { name: string, title: string, }[];
      cameraType?: 'front' | 'back';
      mediaType?: 'photo' | 'video' | 'mixed';
      maxWidth?: number;
      maxHeight?: number;
      quality?: number;
      videoQuality?: 'low' | 'medium' | 'high';
      durationLimit?: number;
      rotation?: number;
      allowsEditing?: boolean;
      noData?: boolean;
      storageOptions?: {
        skipBackup?: boolean;
        path?: string;
        cameraRoll?: boolean;
        waitUntilSaved?: boolean;
      };
    }
  
    export function launchCamera(options: ImagePickerOptions, callback: (response: ImagePickerResponse) => void): void;
    export function launchImageLibrary(options: ImagePickerOptions, callback: (response: ImagePickerResponse) => void): void;
  }
  