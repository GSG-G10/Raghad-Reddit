/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const searchBtn = document.querySelector('.search-icon');
const searchInput = document.querySelector('#search-input');
const navBar = document.querySelector('.home-nav');
const communitySection = document.querySelector('.communities-section');
const postsSection = document.querySelector('.posts-section');
const topBtn = document.querySelector('#top-btn');
const newBtn = document.querySelectorAll('.filter-btn')[0];
const timeFilterLabel = document.querySelector('.time-filter-label');
const timeFilterSelect = document.querySelector('#time-filter');

// function to create a new tag, give it a class and append it to a parent.
const createNode = (tag, className, parentNode) => {
  const tagName = document.createElement(tag);
  tagName.classList.add(className);
  parentNode.appendChild(tagName);
  return tagName;
};

// function to change sign up and sign in to username and its options
const addUser = (username) => {
  navBar.textContent = '';
  const userNameBtn = createNode('button', 'username-btn', navBar);
  userNameBtn.textContent = username;
  const dropList = createNode('div', 'drop-list', navBar);
  const profile = createNode('a', 'profile', dropList);
  profile.textContent = 'Profile';
  profile.href = `/user/${username}`;
  const signOut = createNode('a', 'sign-out', dropList);
  signOut.textContent = 'Sign out';
  signOut.href = '/sign-out';
};

// function to get input value and run fetch function
const getUserProfile = () => {
  const inputValue = searchInput.value.trim();
  fetchUserProfile(inputValue);
};

// function to display some changes in other users profiles
const updateProfilePage = (username, date) => {
  document.querySelector('.user-name').textContent = username;
  document.querySelector('.user-date').textContent = date;
  document.querySelector('.add-post-btn').style.display = 'none';
  document.querySelector('.saved-btn').style.display = 'none';
  createNode('button', 'follow-btn', document.querySelector('right-profile-section')).textContent = 'FOLLOW';
};

// function to create containers for each community and add their name
const displayCommunityName = (names) => {
  names.forEach((elem) => {
    const communityNameBtn = createNode('a', 'community-name-btn', communitySection);
    communityNameBtn.textContent = elem.community_name;
    communityNameBtn.href = `/community/${elem.community_name}`;
  });
};

// function to create a container for a post
const createPostContainer = (index, postId,
  communityName,
  userName,
  userImg,
  time, title,
  postString,
  voteNum) => {
  const postContainer = createNode('section', 'post-container', postsSection);
  const postVote = createNode('section', 'post-vote-container', postContainer);
  const upVote = createNode('img', 'up-vote', postVote);
  const totalVotes = createNode('span', 'post-vote', postVote);
  totalVotes.textContent = voteNum;
  const downVote = createNode('img', 'down-vote', postVote);
  upVote.src = '..//image//arrow.png';
  downVote.src = '..//image//arrow.png';
  const post = createNode('section', 'post', postContainer);
  const userInfo = createNode('section', 'user-info', post);
  const userImage = createNode('img', 'user-info-img', userInfo);
  if (userImg) {
    userImage.src = userImg;
  } else {
    userImage.src = '..//image//user-img.png';
  }
  const userInfoText = createNode('p', 'user-info-text', userInfo);
  userInfoText.textContent = `${communityName} community`;
  createNode('span', 'user-info-text', userInfoText).textContent = `Posted by ${userName} ${time}`;
  const postText = createNode('section', 'post-text', post);
  const postTitle = createNode('h3', 'post-title', postText);
  postTitle.textContent = title;
  const postDescription = createNode('p', 'post-description', postText);
  postDescription.textContent = postString;
  const postOptions = createNode('section', 'post-options', post);
  const postComments = createNode('button', 'post-option', postOptions);
  postComments.textContent = 'Comments';
  postComments.addEventListener('click', () => { fetchComments(postId, index); });
  const postSave = createNode('button', 'post-option', postOptions);
  postSave.textContent = 'Save';
  postSave.href = '/save';
  const commentsSection = createNode('section', 'comments-section', postContainer);
  commentsSection.style.display = 'none';
};

// function to display the post data
const displayPostData = (data) => {
  postsSection.textContent = '';
  data.forEach((element, index) => {
    createPostContainer(
      index,
      element.id,
      element.community_name,
      element.username,
      element.img,
      element.post_date,
      element.title,
      element.post_text,
      element.vote,
    );
  });
};

// function to create a contauner for comments
const CreateCommentContainer = (index, userName, time, userImg, text, voteNum) => {
  const commentContainer = createNode('section', 'comment-container', document.querySelectorAll('.comments-section')[index]);
  const userSection = createNode('section', 'comment-user-section', commentContainer);
  const userImage = createNode('img', 'cpmment-user-img', userSection);
  if (userImg) {
    userImage.src = userImg;
  } else {
    userImage.src = '..//image//user-img.png';
  }
  const commentUserName = createNode('p', 'comment-user-name', userSection);
  commentUserName.textContent = userName;
  const commentTime = createNode('p', 'comment-time', userSection);
  commentTime.textContent = time;
  const commentSection = createNode('section', 'comment-text-section', commentContainer);
  const commentText = createNode('p', 'comment-text', commentSection);
  commentText.textContent = text;
  const commentOpt = createNode('section', 'comment-options', commentContainer);
  const upVote = createNode('img', 'up-vote', commentOpt);
  const totalVotes = createNode('span', 'comment-vote', commentOpt);
  totalVotes.textContent = voteNum;
  const downVote = createNode('img', 'down-vote', commentOpt);
  upVote.src = './/image//arrow.png';
  downVote.src = '..//image//arrow.png';
  const commentSave = createNode('button', 'comment-save', commentOpt);
  commentSave.textContent = 'Save';
};

// function to display the comment data
const displayCommentData = (data) => {
  data.forEach((element, index) => {
    CreateCommentContainer(
      index,
      element.username,
      element.comment_date,
      element.img,
      element.comment_text,
      element.vote,
    );
  });
};

// function to show comment section and fetch the comments
const fetchComments = (postId, index) => {
  document.querySelectorAll('.comments-section')[index].style.display = 'block';
  fetchData(`/comments/${postId}`, displayCommentData);
};

// function to show date filter label and fetch now posts
const displayFilterLabel = () => {
  timeFilterLabel.style.display = 'block';
  fetchData('/top-now-posts', displayPostData);
};

searchBtn.addEventListener('click', getUserProfile);
newBtn.addEventListener('click', () => { fetchData('/new-posts', displayPostData); });
topBtn.addEventListener('click', displayFilterLabel);
timeFilterSelect.addEventListener('change', () => {
  const { value } = timeFilterSelect;
  fetchData(`/top-${value}-posts`, displayPostData);
});


const signUpBtn = document.querySelector('#sign-up-btn');
const signInBtn = document.querySelector('#sign-in-btn');
const signPopUp = document.querySelectorAll('.sign-popup');
const closeIcon = document.querySelectorAll('.close-icon');
const openForm = (i) => {
  signPopUp[i].style.display = 'block';
};
const closeForm = (i) => {
  signPopUp[i].style.display = 'none';
};
signUpBtn.addEventListener('click', () => {
  openForm(0);
});
signInBtn.addEventListener('click', () => {
  openForm(1);
});
closeIcon.forEach((elem, index) => {
  elem.addEventListener('click', () => {
    closeForm(index);
  });
});
