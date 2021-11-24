
// const fetchFact = function () {
// 	console.log('Function running');
//   const xhr = new XMLHttpRequest(); // ready state 0
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState !== 4) {
//       return; // Nothing to do yet so exit the function.
//     }
//     const data = JSON.parse( xhr.responseText );
//     const img = document.createElement('img');
//     img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
//     document.getElementById('picture').appendChild(img);
//   };
//   let book = document.getElementById('name').value
//   xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${book}`);
//   xhr.send(); 
// };

const fetchFact = function () {

  $.ajax(`https://www.googleapis.com/books/v1/volumes?q=title:${book}`).done(function (data) {
    // $(`<p>${ info.text }</p>`).appendTo('body');
    $('#fetch').after(`<p>${ info.text }</p>`);
  });
};

document.getElementById('fetch').addEventListener('click', fetchFact);



$('#fetch').on('click', fetchFact);
fetchFact(); // First fact is free