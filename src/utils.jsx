export const formatStockdata = (stockdata) => {
  const formattedData = [];
  if (stockdata["Weekly Adjusted Time Series"]) {
    Object.entries(stockdata["Weekly Adjusted Time Series"]).map(
      ([key, value]) => {
        formattedData.push({
          x: key,
          y: [
            value["1. open"],
            value["2. high"],
            value["3. low"],
            value["3. close"],
          ],
        });
      }
    );
  }
  return formattedData;
};
