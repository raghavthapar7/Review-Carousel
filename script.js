"use strict";

// Local data that we will present as the reviews in the app
const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    image: "https://xsgames.co/randomusers/avatar.php?g=female",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quo doloremque doloribus debitis. Eius iusto labore at amet doloribus laboriosam. Nisi inventore a minus magni nihil aut id unde eum.",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "Intern",
    image: "https://xsgames.co/randomusers/avatar.php?g=female",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo quas magni accusantium cum tempore quidem! Saepe laborum expedita molestiae doloribus. Assumenda repellendus voluptas laborum blanditiis nihil qui expedita molestiae nemo!",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "UI/UX Designer",
    image: "https://xsgames.co/randomusers/avatar.php?g=male",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit expedita numquam, autem quis placeat ea. Minima ipsum aperiam rerum repudiandae expedita commodi odit magnam sapiente itaque adipisci, maiores ad.",
  },
  {
    id: 4,
    name: "Corey Anderson",
    job: "Senior Developer",
    image: "https://xsgames.co/randomusers/avatar.php?g=male",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, at nulla? Dolorem tempora, atque veniam, beatae modi deleniti optio ipsum consectetur ut totam ex quis, cum assumenda eveniet iusto itaque.",
  },
];

let changeButtons = document.querySelectorAll(".btn");

changeButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("btn-next")) {
      console.log("btn-next");
    } else if (btn.classList.contains("btn-prev")) {
      console.log("btn-prev");
    }
  });
});
