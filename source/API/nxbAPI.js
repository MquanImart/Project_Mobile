import { serverAPI } from "./loginAPI";
import { getID } from "./session";
export const getData = async () => {
    try {
        const id_user = await getID();
      const response = await fetch(
        `${serverAPI}nxb/${id_user}`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const postAddBook = async (title, genre, author, describes, img_link) => {
    try {
        const id_user = await getID();
        const url = `${serverAPI}nxb/add/${id_user}`;
        const data = {
            title: title,
            genre: genre,
            author: author,
            describes: describes,
            img_link: img_link  
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
                return json;
            } catch (error) {
              console.error(error);
            }
        } catch (error) {
        console.error(error);
        }
  };
  export const postUpdateBook = async (idbook, title, genre, author, describes, img_link) => {
    try {
        const url = `${serverAPI}nxb/update/`;
        const data = {
            id: idbook,
            title: title,
            genre: genre,
            author: author,
            describes: describes,
            img_link: img_link  
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
                return json;
            } catch (error) {
              console.error(error);
            }
        } catch (error) {
        console.error(error);
        }
  };
  export const postHideBook = async (idbook) => {
    try {
        const url = `${serverAPI}book/deletebook/`;
        const data = {
            id: idbook,
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
                return json;
            } catch (error) {
              console.error(error);
            }
        } catch (error) {
        console.error(error);
        }
  };