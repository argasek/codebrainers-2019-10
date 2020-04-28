class PlantHumidity {
  /**
   * @constructor
   * @param {string} id
   * @param {string} name
   * @param {number} value
   */
  constructor(id = '', name = '', value = 0) {
    this.id = id;
    this.name = name;
    this.value = value;
  }
}

export default PlantHumidity;