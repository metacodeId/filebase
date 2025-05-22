const scriptURL = 'https://script.google.com/macros/s/AKfycbyNog-SWNyzcojNluiwpd5jMg5nN2gX-peQdW0eUjr270VepBt9drQ81kw1c-NfV50O9g/exec';
const form = document.forms['register-form']
const invalidForm = document.getElementById("invalidForm")

let nama = document.getElementById("nama")
let nomor = document.getElementById("nomor")
 nama.addEventListener("invalid", function() {
 nama.setCustomValidity("Masukan nama anda");});
 nomor.addEventListener("invalid", function() {
 nomor.setCustomValidity("Masukan nomor WhatsApp");});
 nama.addEventListener("input", function() {
 nama.setCustomValidity("");});
 nomor.addEventListener("input", function() {
 nomor.setCustomValidity("");});

form.addEventListener('submit', e => {
e.preventDefault()
 let idUser = document.getElementById("id").value;
 let user = usersMeta.find((user) => user.id === idUser);
  if (user) {
   localStorage.setItem("namaRegis", nama.value)
   invalidForm.style.display = "none";
   fetch(scriptURL, {
   method: 'POST',
   body: new FormData(form)})
   location.reload()
  } else {
     invalidForm.style.display = "block";
   }
})
