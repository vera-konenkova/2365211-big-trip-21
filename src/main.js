import './views/brief-view.js';
import './views/filter-view.js';
import './views/add-button-view.js';

 /**
  * @type {import('./views/brief-view').default}
  */

 const briefView = document.querySelector('brief-view');

 /**
  * @type {import('./views/brief-view').default}
  */

 const filterView = document.querySelector('filter-view');

 /**
  * @type {import('./views/add-button-view').default}
  */
 const addButtonView = document.querySelector('add-button-view');


 briefView.render();
 filterView.render();
 addButtonView.render();
