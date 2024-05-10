import axios from 'axios';
const queryServer = 'http://192.168.1.24:5000/';
export const queryImage = async (imageUri) => {
  const formData = new FormData();
  formData.append('file', {
    uri: imageUri,
    type: 'image/jpeg', // hoặc 'image/png'
    name: 'image.jpg', // tên tùy ý bạn muốn đặt
  });

  try {
    const response = await axios.post(queryServer + 'queryimg', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Upload success:', response.data);
    const result = response.data;
    return result;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
};
