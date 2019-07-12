// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
const topicsTabs = document.querySelector('.topics');
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(data => {
    console.log('source data:', data)
    const topics = data.data.topics;
    console.log('topics',  topics)
    topics.forEach(topicTitle =>{
        const topicTab = createTab(topicTitle);
        topicsTabs.appendChild(topicTab);

    })
      
    })
  
//   .catch(error => {
//     // Handles failure:
//     console.log('The dogs API is currently down, try again later', error)
//   })

function createTab(topicTitle){

    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topicTitle;
    
    return tab;
    }




//  The tab component should look like this:
//    <div class="tab">topic here</div>

