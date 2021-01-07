
const BASE_URL = "https://thinkful-list-api.herokuapp.com/ibrahim"


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




export default {
    createItem,
    getItems,
    deleteItem
}
