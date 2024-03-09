// Récupérer l'élément du slider et l'élément où afficher la valeur
const result = document.querySelector(".result");
const genButton = document.querySelector(".generate-button");
const slider = document.getElementById("myRange");
const sliderValue = document.getElementById("slider-value");
const nbrCheckbox = document.querySelector("#nbr-checkbox");
const spCharCheckbox = document.querySelector("#sp-char-chackbox");
const uprcCheckbox = document.querySelector("#uprc-checkbox");
const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChar = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const number = "0123456789";
const symbols = "@#&'§!%-_*$€£`=+:/;.,?<>{}";
let password = "";
let passwordLength = 0;

// Mettre à jour la valeur affichée lorsque le slider est modifié
slider.addEventListener("input", function () {
  passwordLength = this.value;
  sliderValue.textContent = this.value;
});

genButton.addEventListener("click", () => {
  PasswordGenerator(passwordLength);
  result.value = password;
});

function PasswordGenerator(pL) {
  const includeNumbers = nbrCheckbox.checked;
  const includeUppercase = uprcCheckbox.checked;
  const includeSpecialChars = spCharCheckbox.checked;
  let charset = lowercaseChar;
  if (includeNumbers) charset += number;
  if (includeUppercase) charset += uppercaseChar;
  if (includeSpecialChars) charset += symbols;

  password = "";
  const charsetLength = charset.length;
  for (let i = 0; i < pL; i++) {
    const randomIndex = Math.floor(Math.random() * charsetLength);
    password += charset[randomIndex];
  }
}
