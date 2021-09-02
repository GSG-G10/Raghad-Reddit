/* eslint-disable no-undef */
fetchData('/community', displayCommunityName);
fetchData('/new-posts', (data) => {
  newBtn.style.color = '#0079d3';
  displayPostData(data);
});
