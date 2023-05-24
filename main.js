let form = document.querySelector(".form");
let input = document.querySelector(".cardType");
let formLogo = document.querySelector(".form__logo");
let img = document.querySelector(".loogo");
let bankType = document.querySelector(".bankType");
let bankTypeTitle = document.querySelector(".card__title");

input.addEventListener("keyup", function (evt) {
  let inputVal = input.value;

  if (inputVal === "9860") {
    img.setAttribute("src", "./exam/humo.png");
  } else if (inputVal == "8600") {
    img.setAttribute("src", "./exam/Uzcard_Logo_.png");
  } else if (inputVal == "5300") {
    img.setAttribute("src", "./exam/MasterCard_early_1990s_logo.png");
  } else if (inputVal == "4278") {
    img.setAttribute("src", "./exam/58482363cef1014c0b5e49c1.png");
  } else {
    img.setAttribute("src", "");
  }

  console.log(inputVal, arr);
});

bankType.addEventListener("keyup", function (evt) {
  let bankTypeVal = bankType.value;

  switch (bankTypeVal) {
    case "1650":
      bankTypeTitle.textContent = "Kapital Bank";
      break;
    case "2742":
      bankTypeTitle.textContent = "NBU";
      break;
    case "3572":
      bankTypeTitle.textContent = "TBC";
      break;
    case "1660":
      bankTypeTitle.textContent = "OFB";
      break;
    case "7532":
      bankTypeTitle.textContent = "SQB";
      break;
    case "1135":
      bankTypeTitle.textContent = "Xalq banki";
      break;
    default:
      bankType.textContent = "Your Bank";
  }
});
