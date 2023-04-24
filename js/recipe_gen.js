// Based on the Recipe Generator API from RapidAPI
// Ran out of API calls - key removed
// Unused 

const recipeForm = document.getElementById('recipe-form');
const recipeContainer = document.getElementById('recipe-container');

recipeForm.addEventListener('submit', event => {
  event.preventDefault();

  const ingredientsInput = document.getElementById('ingredients');
  const ingredients = ingredientsInput.value.trim().split(',');

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'recipe-generator.p.rapidapi.com'
    }
  };

  fetch(`https://recipe-generator.p.rapidapi.com/recipe-generator?ingredients=${encodeURIComponent(ingredients.join(','))}`, options)
    .then(response => response.json())
    .then(data => {
      recipeContainer.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.error(error);
      recipeContainer.innerHTML = 'An error occurred while generating the recipe.';
    });
});