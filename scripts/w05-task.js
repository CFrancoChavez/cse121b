// /* W05: Programming Tasks */

// /* Declare and initialize global variables */
const templesElement = document.getElementById('temples'); // Corrected to use getElementById

var templeList = [];
// /* async displayTemples Function */
const displayTemples = (templeList) => {
  
    templeList.forEach((temple) => {
      const article = document.createElement('article');
  
      const h3 = document.createElement('h3');
      h3.textContent = temple.templeName;
  
      const img = document.createElement('img');
      img.src = temple.imageUrl;
      img.alt = temple.location;
  
      article.appendChild(h3);
      article.appendChild(img);
  
      templesElement.appendChild(article);
    });
  };
// /* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    if (response.ok) {
      templeList = await response.json(); // Store the data in the global templeList variable
      displayTemples(templeList);
    }
  };

   
// /* reset Function */
const reset = () => {
    while (templesElement.firstChild) {
      templesElement.removeChild(templesElement.firstChild);
    }
  };
// /* sortBy Function */
const sortBy = (temples) => {
    reset();
    var filter = document.getElementById('sortBy').value;
  
    switch (filter) {
      case 'utah':
        displayTemples(templeList.filter((temple) => temple.location.includes('Utah')));
        break;
      case 'nonutah':
        displayTemples(templeList.filter((temple) => !temple.location.includes('Utah')));
        break;
      case 'older':
        displayTemples(templeList.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case 'all':
      default:
        displayTemples(templeList);
        break;
    }
  };

// /* Event Listener */
document.getElementById('sortBy').addEventListener('change', () => {
    sortBy(templeList);
  });

getTemples();
