// login.ejs

document.querySelector('#formPassVerify').addEventListener('input', e => {
  let passwordVerifyValue = e.target.value;
  let password = document.querySelector('#formPass').value;
  if (passwordVerifyValue === password) {
    document.querySelector('#formPassVerify').style.border = '2px solid orange';
  } else {
    document.querySelector('#formPassVerify').style.border = '2px solid red';
  }
});
