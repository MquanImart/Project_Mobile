import { serverAPI } from "./loginAPI";
import { getID } from "./session";
export const getNameEmail = async () => {
    try {
        const id_user = await getID();
      const response = await fetch(
        `${serverAPI}user/getName/${id_user}`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const getInfo = async () => {
    try {
        const id_user = await getID();
      const response = await fetch(
        `${serverAPI}user/info/${id_user}`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const getUsername = async () => {
    try {
        const id_user = await getID();
      const response = await fetch(
        `${serverAPI}user/getusername/${id_user}`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const getGenreById = async () => {
    try {
        const id_user = await getID();
      const response = await fetch(
        `${serverAPI}user/getgenre/${id_user}`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const getBookLove = async () => {
    try {
        const id_user = await getID();
      const response = await fetch(
        `${serverAPI}user/booklove/${id_user}`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const updateInfo = async (name, email, sdt, dob, gender) => {
    try {
        const id_user = await getID();
        const url = serverAPI + 'user/update';
        
        const data = {
          name: name,
          email: email,
          sdt: sdt,
          dob: dob,
          gender: gender == "Nam"?1:0,
          id : id_user
        };
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
        } catch (error) {
        console.error(error);
        }
  };