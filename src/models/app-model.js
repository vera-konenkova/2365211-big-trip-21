import Model from './model.js';
import PointModel from './point-model.js';
import points from '../data/points.json';
import destinations from '../data/destinations.json';
import offerGroups from '../data/offers.json';

class AppModel extends Model {
  constructor() {
    super();

    /**
     * @type {Array<Point>}
     */
    this.points = [];

    /**
     * @type {Array<Destination>}
     */
    this.destinations = [];

    /**
     * @type {Array<OfferGroup>}
     */
    this.offerGroups = [];

     /**
     * @type {Record<SortType, (pointA: PointModel, pointB: PointModel) => number>}
     */
    this.sortCallBacks = {
      day: () => 0,
      event: () => 0,
      time: () => 0,
      price: () => 0,
      offers: () => 0
    };
  }

  /**
   * @returns {Promise<void>}
   */
  async ready() {
    // TODO: Получение данных с сервера
    // @ts-ignore
    this.points = points;
    // @ts-ignore
    this.destinations = destinations;
    // @ts-ignore
    this.offerGroups = offerGroups;
  }

  /**
   * @param {{sort?: SortType}} options
   * @returns {Array<PointModel>}
   */
  getPoints(options = {}) {
    const defaultSort = this.sortCallBacks.day;
    const sort = this.sortCallBacks[options.sort] ?? defaultSort;

    return this.points.map(this.createPoint).sort(sort);
  }

  /**
   * @param {Point} data
   * @returns {PointModel}
   */
  createPoint(data = Object.create(null)) {
    return new PointModel(data);
  }

  /**
   * @param {PointModel} model
   * @returns {Promise<void>}
   */
  async updatePoint(model) {
  //TODO Обновить данные на сервере
    const data = model.toJSON();
    //console.log(model, data);
    const index = this.points.findIndex((point) => point.id === data.id);
    //console.log(this.points.at(index));
    this.points.splice(index, 1, data);
  }

  /**
   * @returns {Array<Destination>}
   */
  getDestinations() {
    return structuredClone(this.destinations);
  }

  /**
   * @returns {Array<OfferGroup>}
   */
  getOfferGroups() {
    return structuredClone(this.offerGroups);
  }
}

export default AppModel;
