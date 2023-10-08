/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : 'Cesar Franco Chavez',
    photo : 'images/fotocse121b.jpg',
    favoriteFoods :  ['Asado','Milanesas','Pizza','Ice Cream'],
    hobbies : ['Listen to music', 'Travel', 'Watch Movies with my family','Cook'],
    placesLived : [],
     
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place : 'San Vicente, CBA',
        length : '1 year'
    },

    {
        place : 'Mafekin, CBA',
        length : '10 years'
    },

    {
        place : 'La Calera, CBA',
        length : '13 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').setAttribute('src',myProfile.photo);
document.getElementById('photo').setAttribute('alt','Profile picture');
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food=>{
    let li = document.createElement('li');
    li.textContent = food;
    document.getElementById('favorite-foods').appendChild(li) ;
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby=>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li) ;
})

/* Places Lived DataList */

const placesLived = document.getElementById("places-lived");

myProfile.placesLived.forEach((place) => {
  const dt = document.createElement("dt");
  dt.innerHTML = place.place;

  const dd = document.createElement("dd");
  dd.innerHTML = place.length;

  placesLived.appendChild(dt);
  placesLived.appendChild(dd);
});

