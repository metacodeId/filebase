let saldoPage = document.getElementById("saldoPage")
let idPage = document.getElementById("idPage")
let textStat = document.getElementById("textStat")

let idUser = localStorage.getItem("metacode");
let user = usersMeta.find(user => user.id === idUser);

if(user){
 mySaldo = user.saldo;
 myId = user.id;
 myStatistik = user.statistik;
 
 idPage.innerHTML = "ID saya: " + myId;
 textStat.innerHTML = myStatistik.join(" ");
 
 if(mySaldo >= 1){
  saldoPage.innerHTML = "Rp" + mySaldo + ".000";
 }
}