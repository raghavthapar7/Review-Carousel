"use strict";

// Local data that we will present as the reviews in the app
const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    image:
      "https://images.pexels.com/photos/3328072/pexels-photo-3328072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quo doloremque doloribus debitis. Eius iusto labore at amet doloribus laboriosam. Nisi inventore a minus magni nihil aut id unde eum.",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "Intern",
    image:
      "https://images.pexels.com/photos/13104099/pexels-photo-13104099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo quas magni accusantium cum tempore quidem! Saepe laborum expedita molestiae doloribus. Assumenda repellendus voluptas laborum",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "UI/UX Designer",
    image:
      "https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit expedita numquam, autem quis placeat ea. Minima ipsum aperiam rerum repudiandae expedita commodi odit magnam sapiente itaque.",
  },
  {
    id: 4,
    name: "Corey Anderson",
    job: "Senior Developer",
    image:
      "https://images.pexels.com/photos/3394657/pexels-photo-3394657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, at nulla? Dolorem tempora, atque veniam, beatae modi deleniti optio ipsum consectetur ut totam ex quis, cum assumenda eveniet iusto itaque.",
  },
];

// let changeButtons = document.querySelectorAll(".btn");

// changeButtons.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     if (btn.classList.contains("btn-next")) {
//       console.log("btn-next");
//     } else if (btn.classList.contains("btn-prev")) {
//       console.log("btn-prev");
//     }
//   });
// });

// Counter for iterating through the Data array
let currentItem = 0;

// Buttons for event listeners
let btnNext = document.querySelector(".btn-next");
let btnPrev = document.querySelector(".btn-prev");
let btnRandom = document.querySelector(".btn-random");

// Data points to show
let name = document.getElementById("author-name");
let job = document.getElementById("author-job");
let review = document.getElementById("author-review");
let image = document.getElementById("author-img");

// Making a function to avoid redundant code
let showData = function (currentItem) {
  let person = reviews[currentItem];
  name.textContent = person.name;
  job.textContent = person.job;
  review.textContent = person.review;
  image.src = person.image;
};

// Function to validate the currentItem so that the data does not
// go out of range
let validateCurrentItem = function () {
  if (currentItem > 3) {
    currentItem = 0;
  } else if (currentItem < 0) {
    currentItem = 3;
  }
};

// Loading the data when the page loads
// This event is triggered when the page is all loaded up
window.addEventListener("DOMContentLoaded", function () {
  showData(currentItem);
});

// Changes the review to the next person
btnNext.addEventListener("click", function () {
  currentItem++;
  validateCurrentItem();
  showData(currentItem);
});

// Changes the review to the previous person
btnPrev.addEventListener("click", function () {
  currentItem--;
  validateCurrentItem();
  showData(currentItem);
});

// Getting a random person to show the review of
btnRandom.addEventListener("click", function () {
  let randomNumber = Math.round(Math.random() * 3);
  currentItem = randomNumber;
  showData(currentItem);
});
