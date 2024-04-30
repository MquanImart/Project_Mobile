import { serverAPI } from "./loginAPI";
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
  