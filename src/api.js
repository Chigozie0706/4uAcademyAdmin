export const apiURL = 'https://fouruacademy-backend.onrender.com/api'
//'http://localhost:34567/api';
// 'https://laloona-api.herokuapp.com/api'
export const uploadAPIURL = 'https://api.cloudinary.com/v1_1/emaitee/upload';

export const fetchApi = async (url) => {
  try {
    const request = await fetch(`${apiURL}/${url}`);
    return request.json();
  } catch (error) {
    return error;
  }
};

export const postApi = async (url, data = {}) => {
  try {
    const request = await fetch(`${apiURL}/${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return request.json();
  } catch (error) {
    return error;
  }
};

export const deleteApi = async (url, data = {}) => {
  try {
    const request = await fetch(`${apiURL}/${url}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: data ? JSON.stringify(data) : null,
    });
    return request.json();
  } catch (error) {
    return error;
  }
};

export const updateApi = async (url = '', data = []) => {
  try {
    const request = await fetch(`${apiURL}/${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return request.json();
  } catch (error) {
    return error;
  }
};
