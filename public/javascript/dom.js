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
const searchForrm = document.querySelector('.search-form');
const signUpBtn = document.querySelector('#sign-up-btn');
const signInBtn = document.querySelector('#sign-in-btn');
const dropList = document.querySelector('.drop-list');
const droplistBtn = document.querySelector('.drop-btn');
const profileBtn = document.querySelector('.profile');
const signOutBtn = document.querySelector('.sign-out');
const homeBtn = document.querySelector('.home');
const changeBtn = document.querySelector('#file');
const userProfilePic = document.querySelector('.user-profile-img');
const changePicForm = document.querySelector('.change-pic-form');

// function to create a new tag, give it a class and append it to a parent.
const createNode = (tag, className, parentNode) => {
  const tagName = document.createElement(tag);
  tagName.classList.add(className);
  parentNode.appendChild(tagName);
  return tagName;
};

// function to change sign up and sign in to username and its options
const addUser = (username) => {
  signInBtn.style.display = 'none';
  signUpBtn.style.display = 'none';
  droplistBtn.style.visibility = 'visible';
  createNode('i', 'far', droplistBtn).classList.add('fa-user');
  createNode('span', 'nav-user-name', droplistBtn).textContent = username;
  createNode('i', 'fas', droplistBtn).classList.add('fa-sort-down');
  droplistBtn.onclick = () => {
    droplistBtn.classList.toggle('dropped');
    dropList.classList.toggle('show');
  };
  profileBtn.href = `/user/${username}`;
  signOutBtn.href = '/sign-out';
  homeBtn.href = '/';
  navBar.style.flexDirection = 'column';
};

// function to display some changes in other users profiles
// const updateProfilePage = (username, date) => {
//   document.querySelector('.user-name').textContent = username;
//   document.querySelector('.user-date').textContent = date;
//   document.querySelector('.add-post-btn').style.display = 'none';
//   document.querySelector('.saved-btn').style.display = 'none';
//   createNode('button', 'follow-btn', document.querySelector('right-profile-section')).textContent = 'FOLLOW';
// };

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
  const postCommentContainer = createNode('section', 'post-comment-container', postsSection);
  const postContainer = createNode('section', 'post-container', postCommentContainer);
  const commentsSection = createNode('section', 'comments-section', postCommentContainer);
  commentsSection.style.display = 'none';
  const postVote = createNode('section', 'post-vote-container', postContainer);
  const upVote = createNode('img', 'up-vote', postVote);
  upVote.onclick = () => {
    fetch(`/up-vote/${postId}`).then(() => {
      window.location.reload();
    });
  };
  const totalVotes = createNode('span', 'post-vote', postVote);
  totalVotes.textContent = voteNum;
  const downVote = createNode('img', 'down-vote', postVote);
  downVote.onclick = () => {
    fetch(`/down-vote/${postId}`).then(() => {
      window.location.reload();
    });
  };
  upVote.src = '..//image//upvote.png';
  downVote.src = '..//image//downvote.png';
  const post = createNode('section', 'post', postContainer);
  const userInfo = createNode('section', 'user-info', post);
  const userImage = createNode('img', 'user-info-img', userInfo);
  if (userImg) {
    userImage.src = userImg;
  } else {
    userImage.src = '..//image//user-img.png';
  }
  const userInfoText = createNode('a', 'post-community-name', userInfo);
  userInfoText.textContent = `${communityName} community`;
  userInfoText.href = `/community/${communityName}`;
  createNode('span', 'user-info-text', userInfo).textContent = ' Posted by ';
  const userNameA = createNode('a', 'post-user-name', userInfo);
  userNameA.textContent = userName;
  userNameA.href = `/users/${userName}`;
  createNode('span', 'post-time', userInfo).textContent = time;
  const postText = createNode('section', 'post-text', post);
  const postTitle = createNode('h3', 'post-title', postText);
  postTitle.textContent = title;
  const postDescription = createNode('p', 'post-description', postText);
  postDescription.textContent = postString;
  const postOptions = createNode('section', 'post-options', post);
  const postComments = createNode('button', 'post-option', postOptions);
  postComments.textContent = 'comments';
  const commentIcon = createNode('i', 'far', postComments);
  commentIcon.classList.add('fa-comment-alt');
  postComments.addEventListener('click', () => { fetchComments(postId, index); });
  const saveForm = createNode('form', 'save-form', postOptions);
  saveForm.action = `/save-post/${postId}`;
  const postSave = createNode('button', 'post-option', saveForm);
  postSave.textContent = 'Save';
  const saveIcon = createNode('i', 'far', postSave);
  saveIcon.classList.add('fa-bookmark');
  const postReply = createNode('button', 'post-option', postOptions);
  postReply.textContent = 'Reply';
  const replyIcon = createNode('i', 'far', postReply);
  replyIcon.classList.add('fa-comment-dots');
  postReply.onclick = () => {
    const replyForm = createNode('form', 'reply-form', postCommentContainer);
    const close = createNode('img', 'close', replyForm);
    close.src = './/image//close.svg';
    close.alt = 'close icon';
    const label = createNode('label', 'reply-label', replyForm);
    label.for = 'reply';
    const input = createNode('input', 'reply-input', label);
    input.type = 'text';
    input.id = 'reply';
    input.name = 'reply';
    input.required = 'required';
    input.placeholder = 'Add your comment';
    const button = createNode('button', 'reply-button', replyForm);
    button.type = 'submit';
    button.textContent = 'Reply';
    replyForm.method = 'POST';
    replyForm.action = `/add-comment/${postId}`;
    close.onclick = () => { replyForm.style.display = 'none'; };
  };
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
  if (document.querySelector('.reply-form')) {
    document.querySelector('.reply-form').style.display = 'none';
  }
  const commentContainer = createNode('section', 'comment-container', document.querySelectorAll('.comments-section')[index]);
  const userSection = createNode('section', 'comment-user-section', commentContainer);
  const userImage = createNode('img', 'comment-user-img', userSection);
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
  upVote.src = './/image//upvote.png';
  downVote.src = '..//image//downvote.png';
};

// function to display the comment data
const displayCommentData = (data) => {
  document.querySelector('.comments-section').textContent = '';
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

changeBtn.onchange = (event) => {
  userProfilePic.src = URL.createObjectURL(event.target.files[0]);
  const urlInput = document.querySelector('.url-input')
  urlInput.value = URL.createObjectURL(event.target.files[0]) + '.' + event.target.files[0].type.split('/')[1]
  changePicForm.submit();
};

// searchBtn.addEventListener('click', getUserProfile);
searchForrm.onsubmit = () => {
  const searchedValue = searchInput.value.trim();
  searchForrm.action = `/user/${searchedValue}`;
};

newBtn.addEventListener('click', () => { fetchData('/new-posts', displayPostData); });
topBtn.addEventListener('click', displayFilterLabel);
timeFilterSelect.addEventListener('change', () => {
  const { value } = timeFilterSelect;
  fetchData(`/top-${value}-posts`, displayPostData);
});
