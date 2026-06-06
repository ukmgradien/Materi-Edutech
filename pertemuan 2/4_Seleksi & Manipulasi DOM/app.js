// 1. Menangkap elemen berdasarkan ID
const judul = document.getElementById("nama-game");
const hargaLabel = document.getElementById("harga-tampil");
const statusNotif = document.getElementById("notif-status");

// 2. Mengubah isi teks (Manipulation)
judul.innerText = "Genshin Impact";
hargaLabel.innerText = "Rp 150.000";

// 3. Mengubah gaya CSS melalui JS
statusNotif.style.color = "blue";
statusNotif.style.fontStyle = "italic";