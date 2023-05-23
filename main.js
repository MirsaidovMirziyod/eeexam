let form = document.querySelector(".form");
let input = document.querySelector(".form__input");
let formLogo = document.querySelector(".form__logo");
let img = document.querySelector("img");
let arr = [];
form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputVal = input.value;

  arr.push(inputVal);
  for (let i = 0; i < inputVal.length; i++) {
    if ((arr[(0, 1, 2, 3)] === "9", "8", "6", "0")) {
      formLogo.img = document.createElement("img");
      formLogo.img.src = "./exam/humo.png";
      src = formLogo;
      src.appendChild(formLogo.img);
    } else if ((arr[(0, 1, 2, 3)] == "8", "6", "0", "0")) {
      formLogo.img = document.createElement("img");
      formLogo.img.src = "./exam/Uzcard_Logo_.png";
      src = formLogo;
      src.appendChild(formLogo.img);
    } else if ((arr[(0, 1, 2, 3)] == "5", "3", "0", "0")) {
      formLogo.img = document.createElement("img");
      formLogo.img.src = "./exam/humo.png";
      src = formLogo;
      src.appendChild(formLogo.img);
    } else if ((arr[(0, 1, 2, 3)] == "4", "2", "7", "8")) {
      formLogo.img = document.createElement("img");
      formLogo.img.src = "./exam/humo.png";
      src = formLogo;
      src.appendChild(formLogo.img);
    } else {
      console.log(false);
    }
  }

  console.log(inputVal, arr);
});
