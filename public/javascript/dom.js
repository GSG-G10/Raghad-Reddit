const searchBtn = document.querySelector('.search-icon');
const searchInput = document.querySelector('#search-input');
const navBar = document.querySelector('.home-nav');
const communitySection = document.querySelector('.communities-section');

// function to create a new tag, give it a class and append it to a parent.
const createNode = (tag, className, parentNode) => {
  const tagName = document.createElement(tag);
  tagName.classList.add(className);
  parentNode.appendChild(tagName);
  return tagName;
};

// function to change sign up and sign in to username and its options
// eslint-disable-next-line no-unused-vars
const addUser = (username) => {
  navBar.textContent = '';
  const userNameBtn = createNode('button', 'username-btn', navBar);
  userNameBtn.textContent = username
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
  // eslint-disable-next-line no-undef
  fetchUserProfile(inputValue);
};

// function to display some changes in other users profiles
// eslint-disable-next-line no-unused-vars
const updateProfilePage = (username, date) => {
  document.querySelector('.user-name').textContent = username;
  document.querySelector('.user-date').textContent = date;
  document.querySelector('.add-post-btn').style.display = 'none';
  document.querySelector('.saved-btn').style.display = 'none';
  createNode('button', 'follow-btn', document.querySelector('right-profile-section')).textContent = 'FOLLOW';
};

// function to create containers for each community and add their name
// eslint-disable-next-line no-unused-vars
const displayCommunityName = (names) => {
  names.forEach((elem) => {
    createNode('a', 'community-name-btn', communitySection).textContent = elem.community_name;
  });
};

searchBtn.addEventListener('click', getUserProfile);

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

const postsSection = document.querySelector('.posts-section');
const createPostContainer = (
  communityName,
  userName,
  userImg,
  time,
  title,
  postString,
  voteNum,
) => {
  const postContainer = createNode('section', 'post-container', postsSection);
  const postVote = createNode('section', 'post-vote', postContainer);
  const upVote = createNode('img', 'up-vote', postVote);
  const totalVotes = createNode('span', 'total-vote', postVote);
  totalVotes.textContent = voteNum;
  const downVote = createNode('img', 'down-vote', postVote);
  upVote.src = 'public/image/arrow.png';
  downVote.src = 'public/image/arrow.png';
  const post = createNode('section', 'post', postsSection);
  const userInfo = createNode('section', 'user-info', post);
  const userImage = createNode('img', 'user-info-img', userInfo);
  userImage.src = userImg;
  const userInfoText = createNode('p', 'user-info-text', userInfo);
  userInfoText.textContent = `${communityName}`;
  createNode(
    'span',
    'user-info-text',
    userInfoText,
  ).textContent = `Posted by ${userName} ${time}`;
  const postText = createNode('section', 'post-text', post);
  const postTitle = createNode('h3', 'post-title', postText);
  postTitle.textContent = title;
  const postDescription = createNode('h3', 'post-description', postText);
  postDescription.textContent = postString;
  const postOptions = createNode('section', 'post-options', post);
  const postComments = createNode('button', 'post-options', postOptions);
  postComments.textContent = 'Comments';
  const postSave = createNode('button', 'post-options', postOptions);
  postSave.textContent = 'Save';
};
const CreateCommentContainer = (userName, userImg, text, voteNum) => {
  const commentsContainer = createNode(
    'section',
    'comments-container',
    postsSection,
  );
  const commentContainer = createNode(
    'section',
    'comment-container',
    commentsContainer,
  );
  const userImage = createNode('img', 'user-img', commentContainer);
  userImage.src = userImg;
  const commentUser = createNode('p', 'comment-user', commentContainer);
  commentUser.textContent = userName;
  const commentText = createNode('p', 'comment-text', commentContainer);
  commentText.textContent = text;
  const commentOpt = createNode('section', 'comment-vote', commentContainer);
  const upVote = createNode('img', 'up-vote', commentOpt);
  const totalVotes = createNode('span', 'total-vote', commentOpt);
  totalVotes.textContent = voteNum;
  const downVote = createNode('img', 'down-vote', commentOpt);
  upVote.src = 'public/image/arrow.png';
  downVote.src = 'public/image/arrow.png';
  const replyComments = createNode('button', 'reply-comment', commentOpt);
  replyComments.textContent = 'Reply';
  const commentSave = createNode('button', 'comment-save', commentOpt);
  commentSave.textContent = 'Save';
};
