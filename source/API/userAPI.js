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