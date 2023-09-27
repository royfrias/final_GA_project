let book = [

  {
    title: 'Space The Final Frontier',
    publisher: 'Ownage Books',
    price: '$9.97',
    image: 'images/FinalFrontier.png'
  },
  {
    title: 'Opposite Attractions',
    publisher: 'Independent House',
    price: '$15.95',
    image: 'images/Attraction.jpg'
  },
  {
    title: 'Celestine Prophecy',
    publisher: 'Warner Books, Inc.',
    price: '$20.00',
    image: 'images/Celestine.jpg'
  },

  {
    title: 'The Da Vinci Code',
    publisher: 'Anchor',
    price: '$8.99',
    image: 'images/DaVinciCode.jpg'
  },

  {
    title: 'Dragon Ball Super',
    publisher: 'VIZ Media LLC',
    price: '$8.49',
    image: 'images/DragonBallSuper.jpg'
  },

  {
    title: 'Eloquent Javascript',
    publisher: 'No Starch Press',
    price: '$27.00',
    image: 'images/Eloquent.jpeg'
  },

  {
    title: 'Emotional Intelligence',
    publisher: 'David Clark',
    price: '$14.95',
    image: 'images/EmotionalAI.jpg'
  },

  {
    title: 'Love & Lasagna',
    publisher: 'CreateSpace Independent',
    price: '$16.95',
    image: 'images/Lasagna.jpg'
  },

  {
    title: 'Behold a Pale Horse',
    publisher: 'Light Technology Publishing',
    price: '$15.99',
    image: 'images/PaleHorse.jpg'
  },

  {
    title: 'We Love Beef',
    publisher: 'Ownage Books',
    price: '$26.95',
    image: 'images/Steak.jpg'
  },

  
];

const bookList = $('input');
let bookTitleLowercase;
let inputValLowercase;

$('#search-bar').on('submit', function(event) {
  event.preventDefault();
  const inputVal = $('#search-bar input').val();
  console.log(inputVal);
  // const booksArr = book[i].title;
  // console.log(booksArr);
  $(".book").remove();

  for (let i = 0; i < book.length; i++) {
    bookTitleLowercase = book[i].title.toLowerCase();
    inputValLowercase = inputVal.toLowerCase();
    if (bookTitleLowercase.includes(inputValLowercase) === true) {
      $('#books').append(
        '<div class="book" >' +
        '<img src="' + book[i].image + '" alt="cover-page" class="image">' +
        '<div class="side-info">' +
        '<p>Title : ' + book[i].title + '</p>' +
        '<p>Publisher : ' + book[i].publisher + '</p>' +
        '<p>Price : ' + book[i].price + '</p>' +
        '</div>' +
        '</div>'
      );
    }
  }

  if ($('.book').length === 0) {
    console.log('No results');
    $("#no-results").append("<div class='no-results-content'>no results</div>");
  }
  else {
    $(".book").fadeIn(2000);
  }
  
});



/* WORKING CODE

  $("button").on("click", function () {

    // $(".book").fadeIn(2000);

    for (let i = 0; i < book.length; i++) {


      $('#books').append(
        '<div class="book" >' +
        '<img src="' + book[i].image + '" alt="cover-page" class="image">' +
        '<div class="side-info">' +
        '<p>Title : ' + book[i].title + '</p>' +
        '<p>Publisher : ' + book[i].publisher + '</p>' +
        '<p>Price : ' + book[i].price + '</p>' +
        '</div>' +
        '</div>'

      );

    }
    $(".book").fadeIn(2000);

  });

*/






// OTHER CODE

// $("button").on("click", function(){
//   $(".book1").fadeIn(2000, function(){
//     console.log("It\'s Working!!!!");
//   });
// });

// $("input").on('keypress', function (e) {
//   console.log(e.target.value);
// });

// $('input').on('keypress', function (e) {
//   const filter = book.filter(function (book) {
//     const regex = new RegExp(e.target.value, 'gi');
//     return book.title.match(regex);
//   });

//   console.log(filter);
// });

// $("input").on("keypress", function (event) {
//   const c = book.filter(function (b) {
//     return b.title.match(new RegExp(event.target.value, "gi"));
//   });
//   console.log(c);
// });

// const  bookList = $('#search');

// $('#search').on('keypress', function(){
//   const bookFilter = book.filter( function(book){
//     $('#search').val('');
//     console.log('#search');
//   });
// });


// $("#search").on('keypress', function (e) {
//   console.log(e.target.value);
// });

// $('input').on('keypress', function (e) {
//   const filter = books.filter(function (book) {
//     const regex = new RegExp(e.target.value, 'gi');
//     return book.title.match(regex);
//   });

//   console.log(filter);
// });





// for (let i = 0; i < book.length; i++) {
  
//   $('#books').append(
//     '<div class="book" >'+
//       '<img src="images/DragonBallSuper.jpg" alt="cover-page" class="image">'+
//         '<div class="side-info">'+
//           '<p>Title : ' + book[i].title + '</p>'+
//           '<p>Publisher : ' + book[i].publisher + '</p>'+
//           '<p>Price : ' + book[i].price + '</p>'+
//         '</div>'+
//       '</div>'
//   );
//   console.log(book[i]);
  
// }


  // for(let i = 0; i < book.length; i++) {
  //     book[i].title;
  //     book[i].publisher;
  //     book[i].price;
  //     book[i].image;
  //   console.log(
  //   book[i].title,
  //   book[i].publisher,
  //   book[i].price,
  //   book[i].image);
  // }

// $('.book').html(book);
//   alert('hello');
// $();

// $("button").on("click", function() {
//   $(".book1").animate({ "left": "+=50%" }, 5000);
//   $(".book2").animate({ "right": "+=50%" }, 5000);
// });