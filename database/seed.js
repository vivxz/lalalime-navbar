const Clothing = require('./index.js');

const name = ['Speed Up', 'All The Right Places', 'Fast and Free', 'Align', 'Train Times', 'Wunder Under', 'Mist Over', 'Swiftly', 'Love', 'Define', 'Cool'];
const color = ['True Navy', 'Black', 'Rustic Coral', 'Chambray', 'White', 'Dark Olive', 'Yellow'];

const pantsImages = ['./images/pan1.png', './images/pan2.png', './images/pan3.png', './images/pan4.png', './images/pan5.png', './images/pan6.png'];
const shirtsImages = ['./images/shi1.png', './images/shi2.png', './images/shi3.png', './images/shi4.png', './images/shi5.png', './images/shi6.png'];
const yellowImages = ['./images/yel1.png', './images/yel2.png', './images/yel3.png', './images/yel4.png', './images/yel5.png', './images/yel6.png'];

const bottoms = {
  types: ['Pant', 'Crop', 'Jogger', 'Tight', 'Bootcut'],
  len: ['21"', '22"', '23"', '24"', '25"', '26"', '27"', '28"', '29"', '30"', '31"']
}

const tops = {
  types: ['Racerback', 'Tank', 'Shirt'],
  len: ['', 'II']
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
  for (let i = 0; i < 50; i++) {
    productsArr.push(createProductPants());
    productsArr.push(createProductTops());
  }
  for (var i = 0; i < productsArr.length; i++) {
    if (productsArr[i].color === 'Yellow') {
      let index = Math.floor(Math.random() * Math.floor(yellowImages.length));
      productsArr[i].images = yellowImages[index];
    } else if (productsArr[i].name.includes('Pant')) {
      let index = Math.floor(Math.random() * Math.floor(pantsImages.length));
      productsArr[i].images = pantsImages[index];
    } else if (productsArr[i].name.includes('Shirt')) {
      let index = Math.floor(Math.random() * Math.floor(shirtsImages.length));
      productsArr[i].images = shirtsImages[index];
    } else if (productsArr[i].name.includes('Racerback')) {
      let index = Math.floor(Math.random() * Math.floor(shirtsImages.length));
      productsArr[i].images = shirtsImages[index];
    }
  }
  console.log(productsArr);
  return productsArr;
};

const insertMockData = function () {
  var results = createProducts();
  for (var i = 0; i < results.length; i++) {
    let { name, color, type, images } = results[i];
    Clothing.insertMany({ name, color, type, images });
  }
};

insertMockData();