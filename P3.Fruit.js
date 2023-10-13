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

// Search for matching fruits
function search(str) {
  // Convert input and fruits to lowercase for case-insensitive matching
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

// References to the input and suggestions elements
const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

// Add event listeners
input.addEventListener("input", searchHandler);
suggestions.addEventListener("click", useSuggestion);

// Event handler for input changes
function searchHandler() {
  // Get the trimmed input value
  const inputVal = input.value.trim();
  // Search for matching fruits and show suggestions
  const results = search(inputVal);
  showSuggestions(results);
}

// Display suggestions
function showSuggestions(results) {
  const fruitList = results.map((item) => `<li>${item}</li>`).join("");
  suggestions.innerHTML = `<ul>${fruitList}</ul>`;
  // Show or hide suggestions based on results
  suggestions.style.display = results.length ? "block" : "none";
}

// Event handler for selecting a suggestion
function useSuggestion(e) {
  input.value = e.target.textContent;
  // Hide suggestions after selecting one
  suggestions.style.display = "none";
}
