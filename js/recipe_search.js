// assign button and input elements
var searchInput = document.getElementById("recipeSearchInput");
var searchButton = document.getElementById("recipeSearchSubmit");

// add an event listener to the search button
searchButton.addEventListener("click", function() {
  // get the search query
  var query = searchInput.value.toLowerCase();
  
  // get all recipe elements on page
  var recipes = document.querySelectorAll("#recipes-container .recipe");
  
  // loop through all the recipes and check if they contain the search query
  for (var i = 0; i < recipes.length; i++) {
    var recipe = recipes[i];
    var recipeName = recipe.querySelector(".meal-name").textContent.toLowerCase();
    
    if (recipeName.includes(query)) {
      // show recipe in grid style if found
      recipe.style.display = "grid";
    } else {
      // hide recipe if not found
      recipe.style.display = "none";
    }
  }
});