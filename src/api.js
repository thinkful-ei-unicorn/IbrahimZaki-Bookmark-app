
const BASE_URL = "https://thinkful-list-api.herokuapp.com/ibrahim"

const listApiFetch = function (...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = { code: res.status };
          if (!res.headers.get('content-type').includes('json')) {
            error.message = res.statusText;
            return Promise.reject(error);
          }
        }
        return res.json();
      })
      .then(data => {
         if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data;
      });
  };

const getItems = function () {
    return fetch(`${BASE_URL}/bookmarks`);
  }

const formatFormData = function(data) {
    if(typeof data[0].value === 'undefined' || data[0].value === ''){
      data[0].value = data[1].value
    }
    let bookmark = {
      id: ``,
      title: `${data[0].value}`,
      rating: `${data[2].value}`,
      url:`${data[1].value}`,
      desc:`${data[3].value}`
    }
    return bookmark;
  }

const createItem = function(newItem) {
    let bookmark = formatFormData(newItem)
    let string = JSON.stringify(bookmark)
    return fetch(`${BASE_URL}/bookmarks`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: string
    })
}

const deleteItem = function(id) {
    return fetch(`${BASE_URL}/bookmarks/${id}`, {
        method: 'DELETE'
    })
}

const updateItem = function(id) {

}



export default {
    createItem,
    getItems,
    deleteItem,
    updateItem
}
