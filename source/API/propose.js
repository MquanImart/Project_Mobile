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