const videoDiv = document.getElementById('video');
const videoId = 'tJlzIJaokVY';
const autoplayUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

videoDiv.innerHTML = `<iframe width="1280" height="500" src="${autoplayUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;