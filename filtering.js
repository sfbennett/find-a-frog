// Details about all the frogs:

var frogs = [
  {
    name: "American Toad",
    class: "toads",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Bufo_americanus_PJC1.jpg",
  },
  {
    name: "Strawberry Poison Frog",
    class: "frogs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Oophaga_pumilio_%28Strawberry_poision_frog%29_%282532163201%29.jpg",
  },
  {
    name: "Common Frog",
    class: "frogs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/European_Common_Frog_Rana_temporaria.jpg",
  },
  {
    name: "Blue Poison Dart Frog",
    class: "frogs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Dendrobates_azureus_qtl1.jpg",
  },
  {
    name: "Red-Eyed Tree Frog",
    class: "frogs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Red-eyed_Tree_Frog_%28Agalychnis_callidryas%29_1.png",
  },
  {
    name: "Pool Frog",
    class: "frogs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Rana_lessonae.jpg",
  },
  {
    name: "Common Toad",
    class: "toads",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Bufo_bufo_sitting-Iric2006.jpg",
  },
  {
    name: "Natterjack Toad",
    class: "toads",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/Bufo_calamita_%28Marek_Szczepanek%29.jpg",
  },
  {
    name: "Golden Poison Frog",
    class: "frogs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Schrecklicherpfeilgiftfrosch-01.jpg",
  },
  {
    name: "Lehmann's Poison Frog",
    class: "frogs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Oophaga_lehmanni_27154022_%28cropped%29.jpg",
  },
  {
    name: "Kermit the Frog",
    class: "fictional",
    image: "https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg",
  },
  {
    name: "Flying Frog",
    class: "frogs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Rhacophorus_nigropalmatus.jpg",
  },
];

function addFrogToPage(frog) {
  var frogElement = document.createElement("div");
  frogElement.classList.add("frog");
  frogElement.classList.add("frog-" + frog.class);

  var frogName = document.createElement("p");
  frogName.classList.add("frog-name");
  frogName.textContent = frog.name;
  frogElement.appendChild(frogName);

  var frogImage = document.createElement("img");
  frogImage.src = frog.image;
  frogImage.alt = frog.name;
  frogElement.appendChild(frogImage);

  var frogListElement = document.querySelector(".frogs");
  frogListElement.appendChild(frogElement);
}

frogs.forEach(addFrogToPage);

var searchInput = document.querySelector(".search");
searchInput.addEventListener("input", updateSearchValue);

var searchValue = "";
var filterButtonValue = "";

function updateSearchValue() {
  searchValue = searchInput.value.trim().toLowerCase();
  var frogElements = document.querySelectorAll(".frog");
  frogElements.forEach(showHideFrog);

  console.log("You searched for: " + searchValue);
}

// Buttons section //

var frogButtonElements = document.querySelectorAll(".frog-button");
frogButtonElements.forEach(addFrogButtonListener);

function addFrogButtonListener(frogButtonElement) {
  frogButtonElement.addEventListener("click", frogButtonClick);
}

function frogButtonClick(event) {
  var clickedButton = event.currentTarget;

  // Remove selected state from all buttons
  frogButtonElements.forEach(updateClickedButtonState);

  // Set selected state for clicked button
  clickedButton.classList.add("currently-selected-button");

  // If we have clicked the 'All' button, all filters are removed
  // trim() will remove all the "white space" before and after the text
  if (clickedButton.textContent.trim() === "All") {
    filterButtonValue = "";
  } else {
    // Set filterButtonValue to the ID of the clicked button
    filterButtonValue = clickedButton.id.toLowerCase();
  }

  // Once the filter value is updated, filter the content
  showHideFrogs();
}

function updateClickedButtonState(frogButtonElement) {
  frogButtonElement.classList.remove("currently-selected-button");
}

function showHideFrogs() {
  var frogElements = document.querySelectorAll(".frog");
  frogElements.forEach(showHideFrog);
}

function showHideFrog(frogElement) {
  var frogName = frogElement
    .querySelector(".frog-name")
    .textContent.toLowerCase();
  if (
    frogName.includes(searchValue) &&
    (filterButtonValue === "" ||
      frogElement.classList.contains(`frog-${filterButtonValue}`))
  ) {
    frogElement.classList.remove("hide");
  } else {
    frogElement.classList.add("hide");
  }
}
