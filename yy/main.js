let loginForm = document.forms['loginForm'];
let invalidLogin = document.getElementById("invalidLogin")

loginForm.addEventListener('submit', e => {
 e.preventDefault();
 let idLogin = document.getElementById("idLogin").value;
 let pwLogin = document.getElementById("pwLogin").value;
 let user = usersMeta.find(user => user.id === idLogin && user.token === pwLogin);
 
 if (user) {
  invalidLogin.style.display = "none";
  localStorage.setItem("metacode", idLogin);
  localStorage.removeItem("nameRegis");
  location.reload();
 } else {
  invalidLogin.style.display = "block"
 }
});





const scriptURL = 'https://script.google.com/macros/s/AKfycbyNog-SWNyzcojNluiwpd5jMg5nN2gX-peQdW0eUjr270VepBt9drQ81kw1c-NfV50O9g/exec';
const form = document.forms['regisForm']
const invalidRegis = document.getElementById("invalidRegis")

let namaRegis = document.getElementById("namaRegis")
let nomorRegis = document.getElementById("nomorRegis")

form.addEventListener('submit', e => {
e.preventDefault()
 let idUser = document.getElementById("idRegis").value;
 let user = usersMeta.find((user) => user.id === idUser);
  if (user) {
   localStorage.setItem("namaRegis", namaRegis.value)
   invalidRegis.style.display = "none";
   fetch(scriptURL, {
   method: 'POST',
   body: new FormData(form)})
   location.reload()
  } else {
     invalidRegis.style.display = "block";
   }
})
