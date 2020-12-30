import { map } from 'jquery'
import bookmark from "./bookmark"




const bookmarks = []
let expanding = false
let filtered = []
let adding = false
let error = null
let filter = 0

const addBookmark = function(bookmark) {
    let updatedBookmark = bookmark
    updatedBookmark['expanded'] = false
    this.bookmarks.push(updatedBookmark)
    if (this.filter >= 1) {
        this.filtered.push(updatedBookmark)
    }
}

const findAndDelete = function(id) {
    this.bookmarks = this.bookmarks.filter(currentItem => currentItem.id !== id)
    if (this.filter >=1) {
        this.filtered = this.filtered.filter(currentItem => currentItem.id !== id)
    }
}

const filterList = function() {
        this.filtered = this.bookmarks.filter(currentItem => currentItem.rating >= this.filter)

}

const updateError = function(error) {
    this.error = error
}

const toggleExpand = function(id) {
    for (let i=0; i<this.bookmarks.length; i++) {
        if (id === this.bookmarks[i].id) {
            this.bookmarks[i].expanded = !this.bookmarks[i].expanded
        }
    }
}

export default {
    addBookmark,
    bookmarks,
    findAndDelete,
    filter,
    filterList,
    filtered,
    updateError,
    toggleExpand
}
