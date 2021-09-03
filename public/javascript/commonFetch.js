/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// general fetch function
const fetchData = (endPoint, callback) => {
  fetch(endPoint)
    .then((response) => response.json())
    .then((data) => callback(data));
};

fetchData('/check-user', (name) => {
  if (name) {
    addUser(name);
  }
});
