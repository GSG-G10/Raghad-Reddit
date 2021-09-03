/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// function to create containers for each community and add their name
const displayCommunityName = (names) => {
  names.forEach((elem) => {
    const communityNameBtn = createNode('a', 'community-name-btn', communitySection);
    communityNameBtn.textContent = elem.community_name;
    communityNameBtn.href = `/community/${elem.community_name}`;
  });
};

// function to show date filter label and fetch now posts
const displayFilterLabel = () => {
  timeFilterLabel.style.display = 'block';
  topBtn.style.color = '#0079d3';
  newBtn.style.color = '#878a8c';
  timeFilterSelect.style.color = '#0079d3';
  fetchData('/top-now-posts', displayPostData, changeSaveForm);
};

// add events on filtering buttons to fetch posts data
newBtn.addEventListener('click', () => {
  timeFilterSelect.style.color = '#878a8c';
  topBtn.style.color = '#878a8c';
  newBtn.style.color = '#0079d3';
  fetchData('/new-posts', displayPostData, changeSaveForm);
});

topBtn.addEventListener('click', displayFilterLabel);

timeFilterSelect.addEventListener('change', () => {
  const { value } = timeFilterSelect;
  fetchData(`/top-${value}-posts`, displayPostData, changeSaveForm);
});
