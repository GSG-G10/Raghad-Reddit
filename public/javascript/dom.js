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

signUpBtn.addEventListener('click', () => { openForm(0); });
signInBtn.addEventListener('click', () => { openForm(1); });
closeIcon.forEach((elem, index) => {
  elem.addEventListener('click', () => { closeForm(index); });
});
