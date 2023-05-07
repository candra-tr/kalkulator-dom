function tambah() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  let hasil = angka1 + angka2;
  document.getElementById("hasil").value = hasil;
}

function kurang() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  let hasil = angka1 - angka2;
  document.getElementById("hasil").value = hasil;
}

function kali() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  let hasil = angka1 * angka2;
  document.getElementById("hasil").value = hasil;
}

function bagi() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  let hasil = angka1 / angka2;
  document.getElementById("hasil").value = hasil;
}
function clearInput() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
  document.getElementById("hasil").value = "";
}
