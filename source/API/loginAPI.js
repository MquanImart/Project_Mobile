export const serverAPI = 'http://192.168.1.4:3000/';
import { getID, storeID } from "./session";
const postAPI = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const json = await response.json();
            return json === true;
        } catch (error) {
          console.error(error);
        }
  };
export const postLogin = async (username, password) => {
    try {
        const url = serverAPI + 'login';
        const data = {
            username: username,
            password: password
        };
        let result = await postAPI(url, data);   
        
        if (result == true){
          let result = null;
          try {
            const response = await fetch(
              `${serverAPI}login/getID/${username}`,  
            );
            result_id = await response.json();
          } catch (error) {
            console.error(error);
          }
          if (result_id != null) {
            await storeID(result_id[0].id);
          }
        }
            return result    
        } catch (error) {
        console.error(error);
        }
  };
  export const postSendEmail = async (username) => {
    try {
        const url = serverAPI + 'login/sendcode';
        const data = {
            username: username
        };
        return postAPI(url, data);
        } catch (error) {
          console.error(error);
        }
  };
  export const postChangePass = async (username, userotp) => {
    try {
        const url = serverAPI + 'login/changepass';
        const data = {
            username: username,
            userotp: userotp
        };
        return postAPI(url, data);
        } catch (error) {
          console.error(error);
        }
  };
  export const postSubmitChangePass = async (password, enterpass) => {
    try {
        const url = serverAPI + 'login/submitchangepass';
        const data = {
            password: password,
            enterpass: enterpass
        };
        return postAPI(url, data);
        } catch (error) {
          console.error(error);
        }
  };
  export const postResgister = async (name, email, phone, dob, gender, username, password, enterpass, role_id) => {
    try {
        const url = serverAPI + 'login/resgister';
        const data = {
            name: name,
            email: email,
            phone: phone,
            dob: dob,
            gender: gender !== null ? parseInt(gender, 10) : null,
            username: username,
            password: password,
            enterpass: enterpass,
            role_id: role_id !== null ? parseInt(role_id, 10) : null
        };
        if(await postAPI(url, data)){
          let result = null;
          try {
            const response = await fetch(
              `${serverAPI}login/getID/${username}`,  
            );
            result = await response.json();
          } catch (error) {
            console.error(error);
          }
          if (result != null){
            await storeID(result[0].id);
          }
          return true;
          };
        } catch (error) {
          console.error(error);
        }
        return false;
  };