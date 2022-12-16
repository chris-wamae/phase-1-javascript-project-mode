function fetchData(callBack) {
    fetch("https://valorant-api.com/v1/playercards")
      .then((response) => response.json())
      .then((cardsData) => callBack(cardsData["data"]));
  }

  function formDisplay() {
    document.querySelector("section#sign-up").style.display = "none";
    let signUp = document.querySelector("p#sign-up-nav");
    signUp.addEventListener("click", function () {
      document.querySelector("section#sign-up").setAttribute("style", "");
      let signUpSubmit = document.querySelector("button#sign-up-button");
      signUpSubmit.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector("section#sign-up").style.display = "none";
      });
    });
  }
  formDisplay();

  function submitAlert() {
    function alertTimeout() {
      alert("Sign up successful");
    }
    setTimeout(alertTimeout, 10);
  }
  
  //selects the next Image when choosing an avatar

function imageSelection(apiArray) {
    let firstImage = 0;
    let currentImage = document.querySelector("img#player-avatar");
    currentImage.setAttribute("src", apiArray[firstImage]["displayIcon"]);
    console.log(apiArray);
  
    let nextImage = document.querySelector("button#next-image");
    nextImage.addEventListener("click", function () {
      firstImage = firstImage + 1;
      currentImage.setAttribute("src", apiArray[firstImage]["displayIcon"]);
    });
  
    let previousImage = document.querySelector("button#previous-image");
    previousImage.addEventListener("click", function () {
      if (firstImage > 0) {
        firstImage = firstImage - 1;
      } else {
        firstImage = 0;
      }
      currentImage.setAttribute("src", apiArray[firstImage]["displayIcon"]);
    });
  
    let selectImage = document.querySelector("button#select-image");
    let divNumber = 0;
    selectImage.addEventListener("click", function () {
      let selectedImage = document.createElement("img");
      let playerDiv = document.createElement("div");
      playerDiv.setAttribute("id", `playerDiv${divNumber}`);
      divNumber = divNumber + 1;
      console.log(`Image selection Div number:${divNumber}`);
      document.querySelector("p#join-hall-of-fame").style.display = "none";
  
      selectedImage.setAttribute("src", apiArray[firstImage]["displayIcon"]);
      let imageSection = document.querySelector("section#hall-of-fame");
      playerDiv.append(selectedImage);
      imageSection.append(playerDiv);
      selectImage.style.display = "none";
    });
  }
  
  fetchData(imageSelection);
  