import View from './view.js';
import {html} from '../utilities.js';

class BriefView extends View {
  constructor() {
    super();

    this.classList.add('trip-info');
  }

  /**
    * @override
    */
  createHtml() {
    return html`
     <div class="trip-info__main">
       <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

       <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
     </div>

     <p class="trip-info__cost">
       Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
     </p>

     `;
  }
}

customElements.define('brief-view', BriefView);

export default BriefView;
