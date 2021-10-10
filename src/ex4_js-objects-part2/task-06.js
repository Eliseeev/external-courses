function cap(string) {
  let capElement = '';
  const caplLizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const array = string.split(' ');
  for (let i = 0; i < array.length; i += 1) {
    const elem = array[i];
    capElement += `${caplLizeFirstLetter(elem)} `;
  }
  return capElement.trim();
}
module.exports = cap;
