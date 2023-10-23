const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.getElementById("ingredients");
const ingredientsArray = []
ingredients.forEach((ingredient) => { 
  const li = document.createElement("li"); 
  li.textContent = ingredient;
  li.classList.add("item"); 
  ingredientsArray.push(li)
});
ul.append(...ingredientsArray);