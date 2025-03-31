/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const keys = path.split('.');
  return (obj) => {
    let current = obj;
    for (const key of keys) {
      if (
        current === null ||
        current === undefined ||
        !Object.prototype.hasOwnProperty.call(current, key)
      ) {
        return undefined;
      }
      current = current[key];
    }
    return current;
  };
}
