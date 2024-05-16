import { serverAPI } from "./loginAPI";
import { getID } from "./session";
export const getDataBook = async (idbook) => {
  try {
    const user_id = await getID();
    const data = {
      user_id: user_id,
      book_id: idbook
    };

    const response = await fetch(
      `${serverAPI}detail/`,
      {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data), 
      }
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
  export const postComment = async (book_id, content, star) => {
    try {
      const user_id = await getID();
        const url = `${serverAPI}feedback/add/`;
        const data = {
          user_id: user_id,
          book_id: book_id,
          content: content,
          star: star
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