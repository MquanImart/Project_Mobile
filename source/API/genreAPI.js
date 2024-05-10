import { serverAPI } from "./loginAPI";
import { getID } from "./session";
export const getAllGenre = async () => {
    try {
      const response = await fetch(
        `${serverAPI}genre/getgenre`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
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
export const postGenre = async (listgenre) => {
    try {
      let id = await getID();
        const url = serverAPI + 'genre/add/' + id;
        const data = {
            listgenre: listgenre
        };
            return postAPI(url, data);       
        } catch (error) {
        console.error(error);
        }
  };