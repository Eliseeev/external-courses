function acceptObj(obj) {
  const all = Object.entries(obj);

  all.forEach(([key, value]) => {
    console.log(`${key} ${value}`);
  });

  return undefined;
}
module.exports = acceptObj;
