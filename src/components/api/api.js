const fetchImg = ({ query, page }) => {
  //console.log("fetchImg ==>>", query);
  const apiKey = "19534909-4566fefb162e8faacd9cf503d";
  const baseURL = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&page=${page}&per_page=12`;
  //https://pixabay.com/api/?key=19534909-4566fefb162e8faacd9cf503d&q=car&image_type=photo&page=1&per_page=12
  //console.log("baseURL ==>>", baseURL);
  return fetch(baseURL)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      return data.hits;
    });
};

export default fetchImg;
