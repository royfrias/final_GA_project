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
  $(".no-results-content").remove();


 
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
    $("#no-results").append("<div class='no-results-content'>no results</div>").show().animate({

      // top: '1px',
      opacity: "1"}, 
      200);

      //  $(".no-results-content").

  }
  else {
    $(".book").fadeIn(2000);
  }
  
});


