function getRandomRating() {
  return Math.floor(Math.random() * 99) + 1;
}

function Sweet(name, weight) {
  this.name = name;
  this.weight = weight;
  this.rating = 0;
}

const ratingTasteOfCandies = {
  blackberry: getRandomRating(),
  strawberry: getRandomRating(),
  apple: getRandomRating(),
};

function Candy(name, weight, flavor) {
  Sweet.call(this, name, weight);
  this.flavor = flavor;
}

// eslint-disable-next-line func-names
Candy.prototype.calculate = function () {
  const rating = ratingTasteOfCandies[this.flavor];

  if (rating === undefined) throw Error('Нет информации по конфете');
  this.rating = rating;
};

const ratingTasteOfChocolate = {
  XL: getRandomRating(),
  L: getRandomRating(),
  M: getRandomRating(),
  S: getRandomRating(),
};

function Chocolate(name, weight, size) {
  Sweet.call(this, name, weight);
  this.size = size;
}

// eslint-disable-next-line func-names
Chocolate.prototype.calculate = function () {
  const rating = ratingTasteOfChocolate[this.size];

  if (rating === undefined) throw Error('Нет информации по околадке');
  this.rating = rating;
};

function Gift(sweets) {
  this.sweets = sweets;
}

// eslint-disable-next-line func-names
Gift.prototype.calculate = function () {
  let totalWeight = 0;

  for (let i = 0; i < this.sweets.length; i += 1) {
    totalWeight += this.sweets[i].weight;
  }

  return totalWeight;
};

// eslint-disable-next-line func-names
Gift.prototype.sortByRating = function () {
  return this.sweets.sort((a, b) => b.rating - a.rating);
};

// eslint-disable-next-line func-names
Gift.prototype.filterByName = function (str) {
  return this.sweets.filter((sweet) => sweet.name.includes(str));
};

const blackberry = new Candy('blackberry', 14, 'blackberry');
blackberry.calculate();
const strawberry = new Candy('strawberry', 45, 'strawberry');
strawberry.calculate();
const apple = new Candy('apple', 21, 'apple');
apple.calculate();

const milk = new Chocolate('milk', 12, 'S');
milk.calculate();
const black = new Chocolate('black', 56, 'XL');
black.calculate();

// eslint-disable-next-line no-unused-vars
const gift = new Gift([apple, strawberry, blackberry, milk, black]);
