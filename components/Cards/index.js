// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
const articleCards = document.querySelector('.cards-container')
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(data => {
      console.log(data)
    const articlesArray = data.data.articles;
    articlesArray.forEach(articleObj => {
        const articleCard = 
    })
      
    })
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//

function cardComponent(cardObj){
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    

}

// Create a card for each of the articles and add the card to the DOM.
