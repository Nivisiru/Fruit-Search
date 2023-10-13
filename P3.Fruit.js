const fruit = [
  "Apple 🍎",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  str = str.toLowerCase();
  return fruit.filter((f) => f.toLowerCase().includes(str));
}

// function search(str) {
//     let results = [];
//     fruit.forEach((f) => {
//       if (f.toLowerCase().includes(str.toLowerCase())) {
//         results.push(f);
//       }
//     });
//     return results;
//   }

const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

input.addEventListener("input", searchHandler);
suggestions.addEventListener("click", useSuggestion);

function searchHandler() {
  const inputVal = input.value.trim();
  const results = search(inputVal);
  showSuggestions(results);
}

function showSuggestions(results) {
  const fruitList = results.map((item) => `<li>${item}</li>`).join("");
  suggestions.innerHTML = `<ul>${fruitList}</ul>`;
  suggestions.style.display = results.length ? "block" : "none";
}

function useSuggestion(e) {
  input.value = e.target.textContent;
  suggestions.style.display = "none";
}
