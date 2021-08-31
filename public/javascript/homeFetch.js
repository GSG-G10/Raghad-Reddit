/* eslint-disable no-undef */

// general fetch function
const fetchData = (endPoint, callback) => {
  fetch(endPoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      callback(data);
    });
};

fetchData('/community', displayCommunityName);
fetchData('/new-posts', displayPostData);
