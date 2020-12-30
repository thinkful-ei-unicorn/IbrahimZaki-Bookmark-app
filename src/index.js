import $ from 'jquery';

import 'normalize.css';
import './index.css';

import bookmark from './bookmark';
import api from './api'
import store from './store'


const main = function () {
  api.getItems().then(res => res.json()).then((items) => {
    items.forEach((item) => store.addBookmark(item));
    bookmark.render()
  });
  bookmark.bindEventListeners()
};

$(main);
