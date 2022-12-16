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
  