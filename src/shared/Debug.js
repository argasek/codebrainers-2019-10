const CATEGORIES_FETCH_DELAY = 250;
const PLANTS_FETCH_DELAY = 100;
const ROOMS_FETCH_DELAY = 150;

/**
 *
 * @param {number} delay Time in ms to delay the call
 * @param {function} f Function to execute
 * @returns {Promise<TimerHandler>}
 */
const delay = (delay, f) => new Promise((resolve, reject) => setTimeout(f, delay, resolve, reject));

export {
  CATEGORIES_FETCH_DELAY,
  PLANTS_FETCH_DELAY,
  ROOMS_FETCH_DELAY,
  delay,
};