/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Cesar Franco Chavez';
let currentYear = new Date().getFullYear();
//console.log(currentYear);
let profilePicture = 'images/fotocse121b.jpg';



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
var yearElement = document.querySelector('#year');
var imageElement = document.getElementsByTagName("img");

/* Step 4 - Adding Content */
nameElement.innerHTML =`<strong>${fullName}</strong>`;
yearElement.textContent=`${currentYear}`;
imageElement[0].setAttribute('src', profilePicture);
imageElement[0].setAttribute('alt',`Profile image of ${profilePicture}`);

/* Step 5 - Array */
var favoritesFoods = ['Asado','Milanesas','Pizza','Ice Cream'];

foodElement.innerHTML = `${favoritesFoods}`;
let singleFood = 'Lasagna';
favoritesFoods.push(singleFood);
foodElement.innerHTML += `<br>${favoritesFoods}`;
favoritesFoods.shift();
foodElement.innerHTML+=` <br> ${favoritesFoods}` ;
favoritesFoods.pop();
foodElement.innerHTML+= ` <br> ${favoritesFoods} `;


