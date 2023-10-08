// if statement
let hargaRumah = 10000;
if (hargaRumah > 8000) {
  console.log("harga barang ini = " + hargaRumah);
}
// else statement
let hargaElpiji = 30000;
if (hargaElpiji > 40000) {
  console.log("harga barang saat ini = " + hargaElpiji);
} else hargaElpiji;
console.log("harga Elpiji saat ini =" + hargaElpiji);
// nested if
let username = prompt("Masukan Username Anda:");
let password = prompt("Masukan Password Anda:");

if (username == "userbaru") {
  if (password == "mantap") {
    console.log(object);
    <h2>Selamat Anda sudah terdaftar</h2>;
  } else {
    console.log(object);
    <h3>tetot,coba lagi</h3>;
  }
} else {
  console.log(object);
  <h3>Maaf,Anda tidak terdaftar!</h3>;
}
// Switch statement

let nilaiKelas12 = "A";
console.log("Entering switch block");
switch (nilaiKelas12) {
  case "A":
    console.log("Mantul!!!!");
    break;

  case "B":
    console.log("Bagus Sekali");
    break;

  case "C":
    console.log("Tingkatkan lagi ya!!!");
    break;

  case "D":
    console.log(<H1>HAHAHAHA</H1>);
    break;

  case "F":
    console.log("Failed");
    break;

  default:
    console.log("Unknown grade");
}
console.log("Exiting switch block");
// for statement
for (let i = 0; i < 30; i++) {
  console.log("Perulangan ke-" + i);
}

// while statement
let ulangi = confirm("Apakah anda mau mengulang ?");
let number = 0;

while (ulangi) {
  let jawab = confirm("mau coba lagi");
  number++;
  if (jawab == false) {
    ulangi = false;
  }
}
console.log("Perulangan sudah dilakukan sebanyak " + number + " kali");
// do while statement
let repeat = confirm("Apakah anda mau mengulang?");
let angka = 0;

do {
  angka++;
  repeat = confirm("Apakah anda mau mengulang?");
} while (repeat);

console.log("Perulangan sebanyak " + angka + " kali");
// function
function apakahGanjil(num) {
  let cekNomor = num + 2 !== 0;
  console.log(cekNomor);
}

apakahGanjil(5); // true
apakahGanjil(8); // false
