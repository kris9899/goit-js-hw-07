'use strict';
const categories = document.querySelectorAll('.item');
console.log(`Number of categories:${categories.length}`);

categories.forEach(item => {
  const categoryName = item.querySelector('h2');
  const elementsCount = item.querySelectorAll('li').length;
  console.log(`Category :${categoryName.textContent}`);
  console.log(`Elements: ${elementsCount}`);
});
