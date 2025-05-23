function goLogout(){
 localStorage.clear();
 location.reload();
}

let nama = document.getElementById("nama")
myNama = localStorage.getItem("namaMeta")
let idUser = localStorage.getItem("metacode");
let user = usersMeta.find(user => user.id === idUser);

function changeName() {
 if(nama.value == ""){
  nama.focus()
 }else{
  localStorage.setItem("namaMeta", nama.value)
  location.reload();
 }
}


if (user) {
 myId = user.id;
 myIdUsed= user.idUsed;
 
 if (myNama) {
 nama.value = myNama;
} else {
 nama.value = "user" + myId;
}
 
document.getElementById("id").innerHTML = myId;
document.getElementById("idUsed").innerHTML = myIdUsed + "×";
}