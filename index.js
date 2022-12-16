function fetchData(callBack) {
    fetch("https://valorant-api.com/v1/playercards")
      .then((response) => response.json())
      .then((cardsData) => callBack(cardsData["data"]));
  }