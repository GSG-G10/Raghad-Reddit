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
    createNode('button', 'follow-btn', document.querySelector('.right-profile-section')).textContent = 'FOLLOW';
    const followBtn = document.querySelector('.follow-btn');
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
});

const username = endPoint.split('/')[2];
fetch(`/all-post/${username}`)
  .then((data) => data.json())
  .then((data) => displayPostData(data));

const commentBtn = document.querySelector('.comment-btn');
const postBtn = document.querySelector('.post-btn');
const saveBtn = document.querySelector('.saved-btn');
const followerBtn = document.querySelector('.follower-btn');
const createPostBtn = document.querySelector('.add-post-btn');
const createPostForm = document.querySelector('.add-post-form');

createPostBtn.onclick = () => {
  createPostForm.style.display = 'block';
};
createPostForm.onsubmit = () => {
  createPostForm.action = `/create-post/${username}`;
};

commentBtn.onclick = () => {
  fetch(`/all-comment/${username}`)
    .then((data) => data.json());
};

saveBtn.onclick = () => {
  fetch(`/saved/${username}`)
    .then((data) => data.json());
};

followerBtn.onclick = () => {
  fetch(`/follower/${username}`)
    .then((data) => data.json());
};
postBtn.onclick = () => {
  fetch(`/all-post/${username}`)
    .then((data) => data.json());
};
