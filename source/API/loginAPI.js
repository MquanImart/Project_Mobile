export const serverAPI = 'http://192.168.1.9:3000/';
export const postLogin = async (username, password) => {
    try {
        const url = serverAPI + 'login';
        const data = {
            username: username,
            password: password
        };

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
  export const postSendEmail = async (username) => {
    try {
        const url = serverAPI + 'login/sendcode';
        const data = {
            username: username
        };

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
  export const postChangePass = async (username, userotp) => {
    try {
        const url = serverAPI + 'login/changepass';
        const data = {
            username: username,
            userotp: userotp
        };

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
  export const postSubmitChangePass = async (password, enterpass) => {
    try {
        const url = serverAPI + 'login/submitchangepass';
        const data = {
            password: password,
            enterpass: enterpass
        };

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