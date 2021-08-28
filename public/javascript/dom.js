const signUpBtn = document.querySelector('#sign-up-btn');
const signPopUp = document.querySelector('.sign-popup');
const closeIcon = document.querySelector('.close-icon');

const openForm = () => {
  signPopUp.style.display = 'block';
};

const closeForm = () => {
  signPopUp.style.display = 'none';
};

signUpBtn.addEventListener('click', openForm);
closeIcon.addEventListener('click', closeForm);
