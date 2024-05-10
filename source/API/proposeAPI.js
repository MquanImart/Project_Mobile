import { serverAPI } from "./loginAPI";
import { getID } from "./session";
export const getPropose = async () => {
    try {
        const id_user = await getID();
      const response = await fetch(
        `${serverAPI}propose/propose/${id_user}`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const getHot = async () => {
    try {
      const response = await fetch(
        `${serverAPI}propose/hot`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const getHistory = async () => {
    try {
        const id_user = await getID();
      const response = await fetch(
        `${serverAPI}propose/history/${id_user}`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const getLoveBook = async () => {
    try {
        const id_user = await getID();
      const response = await fetch(
        `${serverAPI}propose/love/${id_user}`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const deleteBookLove = async (id_book) => {
    try {
        console.log(id_book);
        const id_user = await getID();
        console.log(id_user);
        const url = serverAPI + 'propose/deletelovebook';
        
        const data = {
          id_user: id_user,
          id_book: id_book
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