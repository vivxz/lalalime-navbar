const Clothing = require('./index.js');

const name = ['Speed Up', 'All The Right Places', 'Fast and Free', 'Align', 'Train Times', 'Wunder Under', 'Mist Over', 'Swiftly', 'Love', 'Define', 'Cool'];
const color = ['True Navy', 'Black', 'Rustic Coral', 'Chambray', 'White', 'Dark Olive', 'Yellow'];

const pantsImages = ['https://fec-nav.s3-us-west-1.amazonaws.com/pan1.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/pan2.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/pan3.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/pan4.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/pan5.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/pan6.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/pan7.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/pan8.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/pan9.png'];
const shirtsImages = ['https://fec-nav.s3-us-west-1.amazonaws.com/shi1.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/shi2.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/shi3.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/shi4.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/shi5.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/shi6.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/shi7.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/shi8.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/shi9.png'];
const yellowImages = ['https://fec-nav.s3-us-west-1.amazonaws.com/yel1.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/yel2.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/yel3.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/yel4.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/yel5.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/yel6.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/yel7.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/yel8.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/yel9.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/yel10.png', 'https://fec-nav.s3-us-west-1.amazonaws.com/yel11.png'];

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