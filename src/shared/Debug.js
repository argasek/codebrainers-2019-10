const CATEGORIES_FETCH_DELAY = 1500;
const PLANTS_FETCH_DELAY = 500;

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
  delay,
};