let idUser = localStorage.getItem("metacode");
const scriptURL = 'https://script.google.com/macros/s/AKfycbxTklhZidZf9FDVCi-3CF5Sdqx_OhaHxLV9xlxegVwH1j-NQVSAUZLsKoDklmB4FgCIhw/exec'
const form = document.forms['withdraw-form']
let user = usersMeta.find(user => user.id === idUser);

if (user) {
 myId = user.id;
 mySaldo = user.saldo;
 
document.getElementById("id").value = myId;
let akun = document.getElementById("akun")
let metode = document.getElementById("metode")
let jumlah = document.getElementById("jumlah")
let saldo = document.getElementById("saldo")
let btnWd = document.getElementById("btnWd")

if(mySaldo >= 1){
 saldo.innerHTML = "Saldo tersedia: Rp" + mySaldo + ".000";
}if(mySaldo <=50){
 btnWd.innerHTML = "Tarik Uang (terkunci)";
 btnWd.type = button;
}if(mySaldo >= 50){
 btnWd.innerHTML = "Tarik Uang";
 btnWd.type = "submit";
}if(mySaldo >= 75){
 jumlah.innerHTML += "<option value='Rp75.000'>Rp75.000</option>"
}if (mySaldo >= 100) {
 jumlah.innerHTML += "<option value='Rp100.000'>Rp100.000</option>"
}if (mySaldo >= 150) {
 jumlah.innerHTML += "<option value='Rp150.000'>Rp150.000</option>"
}if (mySaldo >= 200) {
 jumlah.innerHTML += "<option value='Rp200.000'>Rp200.000</option>"
}
}


akun.addEventListener("invalid", function() {
akun.setCustomValidity("Masukan nomor e-wallet");});
metode.addEventListener("invalid", function() {
metode.setCustomValidity("Pilih metode penarikan");});
jumlah.addEventListener("invalid", function() {
jumlah.setCustomValidity("Pilih jumlah penarikan");});
 
akun.addEventListener("input", function() {
akun.setCustomValidity("");});
metode.addEventListener("input", function() {
metode.setCustomValidity("");
});
jumlah.addEventListener("input", function() {
jumlah.setCustomValidity("");});



form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form) })
  .then(response => console.log("berhasil"))
  .catch(error => console.error('Error!', error.message))
})
