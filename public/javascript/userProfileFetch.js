const endPoint = window.location.pathname;
fetch(`${endPoint}/profile`).then((data) => data.json()).then((data) => {
  if (!data.data.rows[0]) {
    document.querySelector('.filter-user').style.display = 'none';
    document.querySelector('.profile-container').textContent = 'No Such user';
  }
  document.querySelector('.user-name').textContent = data.data.rows[0].username;
  document.querySelector('.user-date').textContent = data.data.rows[0].user_date.split('T')[0];
  if (data.data.rows[0].img) {
    document.querySelector('.user-profile-img').src = data.data.rows[0].img;
  } else {
    document.querySelector('.user-profile-img').src = '..//image//user-img.png';
  }
  if (!data.boolean) {
    document.querySelector('.add-post-btn').style.display = 'none';
    document.querySelector('.saved-btn').style.display = 'none';
    createNode('button', 'follow-btn', document.querySelector('right-profile-section')).textContent = 'FOLLOW';
  }
});
const username = endPoint.split('/')[2];
fetch(`/all-post/${username}`)
  .then((data) => data.json())
  .then((data) => displayPostData(data));
