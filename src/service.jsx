const react_API_KEY =process.env.react_API_KEY;

export const FetchedData = async (Symbol) => {
    console.log(react_API_KEY)
  const res = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${Symbol}&apikey=${react_API_KEY}`
  );
  const data = await res.json();
  console.log(data)
  return data;
};
