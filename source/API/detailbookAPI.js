import { serverAPI } from "./loginAPI";
export const getDataBook = async (idbook) => {
    try {
      const response = await fetch(
        `${serverAPI}detail/${idbook}`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const getComment = async (idbook) => {
    try {
      const response = await fetch(
        `${serverAPI}detail/comment/${idbook}`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };