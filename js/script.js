/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const showPage = (list, page) => {

   //create two variables which will representt the index for the first and last student on the page
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;

   // select the element with a class of `student-list ` and assign it to a variable
   const studentList = document.querySelector('.student-list');

   //set the innerHTML property of the studentList variable to an empty string
   studentList.innerHTML = '';

   //loop over the length of the `list` parameter
   for (let i = 0; i < list.length; i++){
     
      // create a conditional to display the proper students
      if(i >= startIndex && i < endIndex){

         // elements needed to display the student information
         
         const listItems = `
         <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
         </div>
       </li>
         `
         // Adding the created structure into the DOM
         studentList.insertAdjacentHTML("beforeend", listItems)
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination= (list) => {

   // create a variable to calculate the number of pages needed
   let pageNumber = Math.round(list.length/9);

   //select the element with a class of `link-list` and assign it to a variable
   const linkList = document.querySelector('.link-list');

   //set the innerHTML property to the linkList variable to an empty string
   linkList.innerHTML = '';

   //loop over the number of pages needed
   for(let i = 1; i <= pageNumber; i++){

      //create the elements to display the pagination button
         const button = `
         <li>
         <button type="button">${i}</button>
         </li>
         `
      //insert the above elements
      linkList.insertAdjacentHTML("beforeend", button)
   }

   //give the first paignation button a class of 'active'
   const button1 = linkList.querySelector('button');
   button1.classList.add('active')
   
   //create an event listener on the 'link-list' element
   linkList.addEventListener('click', e => {

      //if the click target is a button
      const buttons = linkList.querySelectorAll('button');
      buttons.forEach(button => {
         if(e.target === button){

            //remove the 'active' class from the previous button
            button1.classList.remove('active');
            //add the active class to the clicked button
            button.classList.add('active');

            //call the showPage function passing 'list' parameter and page to display as arguments
            showPage(list, button.textContent)
         }else{
            button.classList.remove('active')
         }
         
      })
   })

}

/*
Create the `searchAndTitle` function
This function will create the html elements for the title and the search fields
*/

const searchAndTitile = () => {
   //select the header DOM element and assign it to a variable
   const header = document.querySelector('.header');

   //structure the DOM elements for the title and the input field
   const input = `
   <h2>Students</h2>

   <label for="search" class="student-search">
   <span>Search by name</span>
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
   `
   //emepty the header so we can mount the structured elements above
   header.innerHTML = ''
   header.insertAdjacentHTML("beforeend", input);

}

/*
Create the `searchFilter` function
This function will filter through the students by name displaying the cards with the name in the search term
*/

// const search = document.querySelector('#search');
// const photoTexts = document.querySelectorAll('[data-caption]');

// const searchBar = event => {
//     const searchTerm = event.target.value.toLowerCase();
//     photoTexts.forEach(photoTexts => {
//         const text = photoTexts.getAttribute('data-caption').toLowerCase();
//         if(text.includes(searchTerm)) {
//             photoTexts.style.display = "block";
//         } else {
//             photoTexts.style.display = "none";
//         }
//     });
// }

// search.addEventListener('keyup', searchBar);

// Call functions
showPage(data,1);
addPagination(data);
searchAndTitile()



