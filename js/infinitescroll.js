
//set recipesCont to html recipes-container
// set scroll tracker to false
var recipesCont = document.getElementById("recipes-container");
var scrollTracker = false;



//this code is based off this API, https://codepen.io/medda/pen/ZEEzXKj

function displayRandomMeal() {
    var url = "https://www.themealdb.com/api/json/v1/1/random.php";
    var recipesCont = document.getElementById("recipes-container");
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        var output = data.meals;
        

        // create recipe div from API call 
        for (var i = 0; i < output.length; i++) {
          recipesCont.innerHTML +=
            `<div class="recipe">
              <a href="${output[i].strSource}" target="_blank">
                <img src="${output[i].strMealThumb}" alt="${output[i].strMeal}">
              </a>
              <div class="recipe-details">
                <div class="meal-name">${output[i].strMeal}</div>
                <div class="meal-category">Category: ${output[i].strCategory}</div>
                <button class="btn btn-yellow favourites" data-recipe-id="${output[i].idMeal}">Favourite</button>
              </div>
            </div>`;
            
        }
        
        // s et the number of columns based on the width of the container
        var containerWidth = recipesCont.offsetWidth;
        var numColumns = Math.floor(containerWidth / 300);
        recipesCont.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
        scrollTracker = false;
      })
      .catch(function(error){
        console.log(error);
        scrollTracker = false;
      });
  }
  
  // call the function 12 times to populate the page
  // 12 seems to be a good number to make this work for some reason
  for (var i = 0; i < 12; i++) {
    displayRandomMeal();
  }

  // detect when user has scrolled to bottom of pafge
window.addEventListener("scroll", function() {
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.offsetHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollBottom = scrollTop + windowHeight;
  
    // check if user has scrolled to the bottom of the page
    if (scrollBottom >= documentHeight && !scrollTracker) {
      scrollTracker = true;
      setTimeout(function() {
        displayRandomMeal();
      }, 0);
    }
  });
  
