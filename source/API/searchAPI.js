import { serverAPI } from "./loginAPI";
import { getID, storeID } from "./session";
export const getDataSearch = async () => {
    try {
      const response = await fetch(
        `${serverAPI}search/`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
export const postSearchAdvanced = async (genre_name, author, sort) => {
    try {
        const url = serverAPI + 'search';
        let sort_vname = null;
        let sort_dir = null;
        
        if (sort == 1 || sort == 2){
            sort_vname = 'title';
            if (sort == 1) {sort_dir = 'DESC'}
            else {sort_dir = 'ASC'}
        }
        else {
            sort_vname = 'post_date';
            if (sort == 3) {sort_dir = 'DESC'}
            else {sort_dir = 'ASC'}
        }
        const data = {
            genre_name: genre_name,
            author: author,
            sort_name: sort_vname,
            direction: sort_dir,
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
  export const getDataGenre = async () => {
    try {
      const response = await fetch(
        `${serverAPI}search/genre`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
export const postSearchGenre = async (genre_name) => {
    try {
        const url = serverAPI + 'search/genre';
        
        const data = {
            genre_name: genre_name
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