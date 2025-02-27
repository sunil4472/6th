// Elements
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Event Listeners for toggling forms
loginBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
  loginBtn.classList.add('active');
  signupBtn.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
  signupBtn.classList.add('active');
  loginBtn.classList.remove('active');
});
