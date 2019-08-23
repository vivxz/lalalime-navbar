const Clothing = require('./index.js');

const name = ['Speed Up', 'All The Right Places', 'Fast and Free', 'Align', 'Train Times', 'Wunder Under', 'Mist Over', 'Swiftly', 'Love', 'Define', 'Cool']
const color = ['True Navy', 'Black', 'Rustic Coral', 'Chambray', 'White', 'Dark Olive']

const bottoms = {
  types: ['Pant', 'Crop', 'Jogger', 'Tight', 'Bootcut'],
  len: ['21"', '22"', '23"', '24"', '25"', '26"', '27"', '28"', '29"', '30"', '31"'],
  images: []
}

const tops = {
  types: ['Racerback', 'Tank'],
  len: ['', 'II'],
  images: []
}

const createProductPants = () => {
  let product = {};
  var type = `${bottoms.types[Math.floor(Math.random() * Math.floor(bottoms.types.length))]}`;
  product.name = `${name[Math.floor(Math.random() * Math.floor(name.length))]} ${type} ${bottoms.len[Math.floor(Math.random() * Math.floor(bottoms.len.length))]}`;
  product.color = `${color[Math.floor(Math.random() * Math.floor(color.length))]}`
  product.type = type;
  return product;
}

const createProductTops = () => {
  let product = {};
  var type = `${tops.types[Math.floor(Math.random() * Math.floor(tops.types.length))]}`;
  product.name = `${name[Math.floor(Math.random() * Math.floor(name.length))]} ${type} ${tops.len[Math.floor(Math.random() * Math.floor(tops.len.length))]}`;
  product.color = `${color[Math.floor(Math.random() * Math.floor(color.length))]}`
  product.type = type;
  return product;
}

const createProducts = () => {
  let productsArr = [];
  for (let i = 0; i < 100; i++) {
    productsArr.push(createProductPants());
    productsArr.push(createProductTops());
  }
  return productsArr
}

const insertMockData = function () {
  var results = createProducts();
  for (var i = 0; i < results.length; i++) {
    let { name, color, type } = results[i];
    Clothing.insertMany({ name, color, type });
  }
};

insertMockData();