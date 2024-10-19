const numbers = [2, 6, 434, 342, 79];
let sum = 0;
for (const num of numbers) {
  sum += num;
}

console.log(sum);

const sum1 = numbers.reduce((fast, last) => fast + last, 0);

console.log(sum1);

function num(a, b) {
  console.log(a * b);
}

const result = num(4, 3);
console.log(result);

const parson = {
  name: 'ibrahim',
  age: 24,
  profason: 'Web devloper',
  from: 'Bangladesh',
};

const about = `My name is a ${parson.name} age of ${parson.age}`;

console.log(about);

//arroy funaction

const arrFunction = () => {};

const producats = [
  { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
  { name: 'phone', price: 32200, brand: 'iphone', color: 'black' },
  { name: 'watch', price: 300, brand: 'casic', color: 'silver' },
  { name: 'camera', price: 9000, brand: 'lenovo', color: 'silver' },
];

const brands = producats.map(brandItem => brandItem.brand);
console.log(brands);


