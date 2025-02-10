// login.ejs

document.querySelector("#formEmail").addEventListener("input", (e) => {
  const email = e.target.value;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (pattern.test(email)) {
    document.querySelector("#formEmail").style.border = "2px solid orange";
  } else {
    document.querySelector("#formEmail").style.border = "2px solid red";
  }
});
