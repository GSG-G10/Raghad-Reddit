/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

fetchData(`${endPoint}/profile`, (data) => {
  if (!data.data.rows[0]) {
    filterUser.style.display = 'none';
    profileContainer.textContent = 'Nobody goes by that name.';
    profileContainer.style.fontWeight = 'bold';
  }
  const date = data.data.rows[0].user_date.split('T')[0];
  userNameContainer.textContent = data.data.rows[0].username;
  UserDate.textContent = date;
  if (data.data.rows[0].img) {
    document.querySelector('.user-profile-img').src = data.data.rows[0].img;
  } else {
    document.querySelector('.user-profile-img').src = '..//image//user-img.png';
  }
  if (!data.boolean) {
    addPostBtn.style.display = 'none';
    savedBtn.style.display = 'none';
    const followBtn = createNode('button', 'follow-btn', profileSection);
    followBtn.textContent = 'FOLLOW';
    followBtn.onclick = () => {
      if (followBtn.textContent === 'FOLLOW') {
        followBtn.textContent = 'UNFOLLOW';
        followBtn.style.color = '#ccc9c9';
        followBtn.style.fontWeight = 'bolde';
      } else {
        followBtn.textContent = 'FOLLOW';
        followBtn.style.color = 'white';
        followBtn.style.fontWeight = 'bolde';
      }
    };
  }
}, () => {});

fetchData(`/all-post/${searchedUsername}`, displayPostData, () => {
  changeSaveForm();
  deletePost();
});
