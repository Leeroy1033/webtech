//This code is based of this API, https://codepen.io/medda/pen/ZEEzXKj

function displayRandomMeal() {
  var url = "https://www.themealdb.com/api/json/v1/1/random.php";

  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    var output = data.meals;

    for (var i = 0; i < output.length; i++) {
      display.innerHTML +=
        `<a href="${output[i].strSource}" target="_blank">
          <img src="${output[i].strMealThumb}" alt="${output[i].strMeal}">
        </a><br>
        ${output[i].strMeal}<br>
        Category: ${output[i].strCategory}<br>`;
    }
  })
  .catch(function(error){
    console.log(error);
  });
}

//function calls to populate index
displayRandomMeal();
displayRandomMeal();
displayRandomMeal();
