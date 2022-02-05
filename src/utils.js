/**
 * convert hash string to object of key : value
 * @param {String} hash settings
 * @returns settings object
 */
export const convertHashToObject = (hash) => {
  const params = new URLSearchParams(hash.substring(1));

  return [...params.entries()].reduce((acc, cur, i) => {
    if (
      cur[1].toLocaleLowerCase() === "false" ||
      cur[1].toLocaleLowerCase() === "true"
    ) {
      cur[1] = cur[1].toLocaleLowerCase() === "true";
    } else {
      cur[1] = cur[1].replace(/['"]+/g, "");
    }

    acc[cur[0]] = cur[1];
    return acc;
  }, {});
};

/**
 *
 * @param {String} hash1 settings of theme
 * @param {String} hash2 current settings
 * @returns combination string
 */
export const combine2Hashes = (hash1, hash2) => {
  const h1 = convertHashToObject(hash1);
  const h2 = convertHashToObject(hash2);

  const comb = { ...h2, ...h1 };

  return new URLSearchParams(comb).toString();
};
