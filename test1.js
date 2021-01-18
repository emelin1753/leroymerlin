serverFeedback = {
  displayedName: {
    displayedName: {
      value: ["Профиль маячковый ПВХ 10 мм L3м"],
      description: "Полное наименование товара для клиента",
    },
  },
  stock: {
    stocks: {
      34: {
        2: "35",
        3: "42",
        4: "58",
        5: "57",
        6: "112",
        20: "51",
        22: "78",
        26: "34",
        32: "22",
        35: "358",
        40: "28",
        43: "68",
        45: "58",
        49: "31",
        51: "29",
        56: "42",
        62: "26",
        64: "0",
        65: "57",
        86: "15",
        114: "41",
        117: "46",
        143: "46",
        162: "4",
        171: "0",
        176: "12",
      },
    },
  },
};

//________________________________________
// возвращаем наименование товара
function nameProduct(objectInfo = {}) {
  let result;

  if (objectInfo.hasOwnProperty("displayedName")) {
    value = objectInfo["displayedName"];
    if (value.hasOwnProperty("displayedName")) {
      result = value.displayedName["value"][0];
    }
  }

  return result;
}

//________________________________________
// возвращаем массив номеров магазина, в которых есть товар в наличие
function stocksArray(objectInfo = {}, regionNumber = "") {
  let result = [];

  if (objectInfo.hasOwnProperty("stock")) {
    value = objectInfo["stock"];
    if (value.hasOwnProperty("stocks")) {
      stocks = value.stocks;
      // в условии задачи не сказано, что ищем по номеру региона, но иначе будет не один массив магазинов
      // поэтому в фунцию передаем номер региона
      if (stocks.hasOwnProperty(regionNumber)) {
        stockObject = stocks[regionNumber];
        for (stock in stockObject) {
          if (Number(stockObject[stock]) > 0) {
            result.push(stock);
          }
        }
      }
    }
  }

  return result;
}

//________________________________________
// найти максимальное количество в регионе, вернуть количество и магазин
function stockMax(objectInfo = {}, regionNumber = "") {
  let result = {};
  let stockMaxValue = "noStock";
  let maxValue = 0;

  if (objectInfo.hasOwnProperty("stock")) {
    value = objectInfo["stock"];
    if (value.hasOwnProperty("stocks")) {
      stocks = value.stocks;
      // в условии задачи не сказано, что ищем по номеру региона, но иначе будет не один массив магазинов
      // поэтому в фунцию передаем номер региона
      if (stocks.hasOwnProperty(regionNumber)) {
        stockObject = stocks[regionNumber];
        for (stock in stockObject) {
          if (Number(stockObject[stock]) > maxValue) {
            maxValue = stockObject[stock];
            stockMaxValue = stock;
          }
        }
        result[stockMaxValue] = maxValue;
      }
    }
  }

  return result;
}
