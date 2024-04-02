"use strict";

// Bài 1
const sum = function (...args) {
  const result = args.reduce((initialValue, num) => {
    if (isNaN(num)) return;
    return +initialValue + +num;
  });

  return isNaN(result) ? `Vui lòng nhập đúng giá trị là số` : result;
};

console.log(sum("1", "2", 3, 4, 5));

// Bài 2

Object.prototype.getCurrency = function (unit) {
  const type = +this;
  return isNaN(type)
    ? `Dữ liệu không phải là số`
    : `${type.toLocaleString()} ${unit}`;
};

//Case 1
var price = 12000;
console.log(price.getCurrency("đ"));

//Case 2
var price = "12000000";
console.log(price.getCurrency("đ"));

// Bài 3
const data = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

var categories = [];

var map = {};

data.forEach((dataCategory) => {
  var category = {
    id: dataCategory.id,
    name: dataCategory.name,
  };

  map[dataCategory.id] = category;

  if (dataCategory.parent === 0) {
    categories.push(category);
  } else {
    var parentCategory = map[dataCategory.parent];

    if (!parentCategory.child) {
      parentCategory.child = [];
    }
    parentCategory.child.push(category);
  }
});

console.log(categories);

// Bài 4

Array.prototype.reduce2 = function (callback, initialValue) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    initialValue = this[0];
  }

  for (; i < this.length; i++) {
    initialValue = callback(initialValue, this[i], i, this);
  }
  return initialValue;
};
