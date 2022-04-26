const confirmWindow = document.querySelector('.confirm-window');
const successWindow = document.querySelector('.success');

const confirmBtn = document.querySelector('.comfirm');
const changeBtn = document.querySelector('.change');

const userData = {
  fname: document.querySelector('.fname'),
  lname: document.querySelector('.lname'),
  age: document.querySelector('.age'),
  email: document.querySelector('.email'),
  submit: document.querySelector('.submit'),
};

userData.submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (confirmWindow.open !== true) {
    confirmWindow.open = true;
    const dataToConfirm = document.createElement('h4');
    dataToConfirm.innerHTML = `First Name: ${userData.fname.value}<br>Last Name: ${userData.lname.value}<br>Age: ${userData.age.value}<br>Email: ${userData.email.value}`;

    confirmWindow.prepend(dataToConfirm);
  }
});

confirmBtn.addEventListener('click', (e) => {
  void e;
  successWindow.open = true;
});

changeBtn.addEventListener('click', (e) => {
  void e;
  if (successWindow.open === false) {
    confirmWindow.querySelector('h4').remove();
    confirmWindow.open = false;
  }
});
