export function keyValue(obj) {
  if(obj && Object.keys(obj).length > 0) {
    var keys = [];
    for (let key in obj) {
      keys.push({
        key: key,
        value: obj[key].toString()
      });
    }
    return keys;
  } else {
    return [];
  }
}