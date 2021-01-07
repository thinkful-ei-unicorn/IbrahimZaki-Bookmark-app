import $ from 'jquery';
import api from './api'
import store from './store';

//import store from './store';

const generateStartPageTemplate = function() {
  return `<h2>My Bookmarks</h2>
            <div class="container1">
                <span>
                    <button id="add">New</button>
                </span>
                <span>
                    <form>
                        <fieldset>
                            <legend>Filter</legend>
                            <select id="filter">
                                <option value="0">Filter</option>
                                <option value="0">None</option>
                                <option value="1">1 Star and above</option>
                                <option value="2">2 Stars and above</option>
                                <option value="3">3 Stars and above</option>
                                <option value="4">4 Stars and above</option>
                                <option value="5">5 Stars and above</option>
                            </select>
                        </fieldset>
                    </form>
                </span>
            </div>
  `
}

const generateAddPageTemplate = function() {
    return `
    <section class="add-page">
            <h3>Add New Bookmark</h3>
            <form class="add-form">
                <div class="container5">
                    <label for="title">Title</label>
                    <input id="title" type="text" aria-label="title" name="name" placeholder="Name" required>
                    <label for="url">URL</label>
                    <input id="url" type="url" aria-label="url" name="url" placeholder="URL" required>
                </div>
                <div class="container6">
                    <input type="radio" name="rating" aria-label="1 star" value="1" required>
                    <label for="one"> <img src="https://img.icons8.com/carbon-copy/35/000000/filled-star.png" /></label>
                    <input type="radio" name="rating" aria-label="2 stars" value="2">
                    <label for="one"> <img src="https://img.icons8.com/carbon-copy/35/000000/filled-star.png" /> <img
                            src="https://img.icons8.com/carbon-copy/35/000000/filled-star.png" /></label>
                    <input type="radio" name="rating" aria-label="3 stars" value="3">
                    <label for="three">
                        <img src="https://img.icons8.com/carbon-copy/35/000000/filled-star.png" />
                        <img src="https://img.icons8.com/carbon-copy/35/000000/filled-star.png" />
                        <img src="https://img.icons8.com/carbon-copy/35/000000/filled-star.png" />
                    </label>
                    <input type="radio" name="rating" aria-label="4 stars" value="4">
                    <label for="four">
                        <img src="https://img.icons8.com/carbon-copy/35/000000/filled-star.png" /> <img
                            src="https://img.icons8.com/carbon-copy/35/000000/filled-star.png" />
                        <img src="https://img.icons8.com/carbon-copy/35/000000/filled-star.png" /> <img
                            src="https://img.icons8.com/carbon-copy/35/000000/filled-star.png" />
                    </label>
                    <input type="radio" name="rating" aria-label="5 stars" value="5">
                    <label for="five">
                        <img src="https://img.icons8.com/carbon-copy/35/000000/filled-star.png" />
                        <img src="https://img.icons8.com/carbon-copy/35/000000/filled-star.png" />
                        <img src="https://img.icons8.com/carbon-copy/35/000000/filled-star.png" />
                        <img src="https://img.icons8.com/carbon-copy/35/000000/filled-star.png" />
                        <img src="https://img.icons8.com/carbon-copy/35/000000/filled-star.png" />
                    </label>
                </div>
                <label for="desc">Description</label>
                <textarea id="desc" name="description" aria-label="description" required placeholder="Add a description (optional)" rows="4" cols="100"></textarea>
                <div class="container7">
                    <button id="cancel" aria-label="Cancel add bookmark">Cancel</button>
                    <button id="create" aria-label="create bookmark">Create</button>
                </div>
            </form>
        </section>
    `
}

const generateBookmarks = function(element) {
    let stars
    if (element.rating == 1) {
        stars = `<img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" />`
    }
    if (element.rating == 2) {
        stars = `<img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" />
        <img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" />`
    }
    if (element.rating == 3) {
        stars = `<img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" />
        <img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" />
        <img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" />`
    }
    if (element.rating == 4) {
        stars = `<img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" />
        <img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" />
        <img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" />
        <img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" />`

    }
    if (element.rating == 5) {
        stars = `<img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" />
        <img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" />
        <img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" />
        <img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" />
        <img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" />`
    }

    let unexpanded = `
    <li class="item">
                    <button class='list-item' data-item-id="${element.id}">
                        <span class="titles">${element.title}</span>
                        <span>${stars}</span>

                    </button>
    </li>`

    let expanded = `
    <li class="item">
                    <div class="details">
                    <div class="container">
                        <a href="${element.url}"><button class='visit'>Visit Site</button></a>
                        <span>${element.rating} <img src="https://img.icons8.com/carbon-copy/50/000000/filled-star.png" /></span>
                        <button class='delete' data-item-id="${element.id}">Delete</button>
                    </div>
                    <div class="container4">
                        <p>${element.desc}</p>
                    </div>
                    </div>
                </li>
    `
    if(element.expanded === false) {
    return unexpanded
    }
    else {
        return unexpanded + expanded
    }
}

const generateError = function(message) {
    return `
    <div class="error>
        <p>${message}</p>
        <button>close</button>
        </div>
    `
}

const initialTemplate = `
<div class="transparent-box">
<section class="toolbar"></section>
<section class="error-pop-up"></section>
<ul class="bookmarks"></ul>
</div>`

const render = function(filtered) {
    $('.app').html(initialTemplate)
    let error
    if (store.error) {
        error = generateError(store.error)
        $('.error-pop-up').html(error)
    }
    let bookmarks = store.bookmarks
    if(store.filter >= 1) {
        bookmarks = filtered
    }
    console.log(bookmarks)
  let html = generateStartPageTemplate()
  let marks = ''
  bookmarks.forEach(element => {
     marks += generateBookmarks(element)
  })
  $(".toolbar").html(html)
  $(".bookmarks").html(marks)
}




const handleNewItemClick = function() {
    console.log('clicked')
    let html = generateAddPageTemplate()
    $(".app").on("click", "#add", event => {
        store.filter = 0
        $(".toolbar").html(html)

    })
}

const handleCreateItemClick = function() {
    $('.app').on("submit", ".add-form", e => {
        e.preventDefault()
        const newItem = $(e.currentTarget).serializeArray()
        api.createItem(newItem)
        .then(res => res.json())
        .then((item) => {
            console.log(item)
            store.addBookmark(item)
            render()
        })
        .catch((error) => {
            store.updateError(error)
            render()
        })

    })
}

const handleCancelAddClick = function() {
    $(".app").on("click", "#cancel", e => {
        console.log('clicked')
        render()
    })
}


const handleBookmarkClick = function() {
    $(".app").on("click", ".list-item", e => {
      let id = $(e.currentTarget).data('item-id')
      store.toggleExpand(id)
      render()
    })
}

const handleDeleteClick = function() {
    $(".app").on("click", ".delete", e => {
        let id = $(e.currentTarget).data('item-id')
        api.deleteItem(id)
        .then(() => {
            store.findAndDelete(id)
            render()
        })
        .catch((error) => {
            store.updateError(error)
            render()
        })

    })
}

const handleFilter = function() {
    $(".app").on("change", "#filter", e => {
        store.filter = $("#filter option:selected").val()
        let filter = store.filterList()
        render(filter)
    })
}



const bindEventListeners = function() {
    handleNewItemClick()
    handleCreateItemClick()
    handleCancelAddClick()
    handleBookmarkClick()
    handleDeleteClick()
    handleFilter()
}

export default {
    render,
    bindEventListeners
}
