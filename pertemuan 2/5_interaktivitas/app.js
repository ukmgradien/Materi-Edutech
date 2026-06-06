
const judul = document.getElementById("nama-game");
const hargaLabel = document.getElementById("harga-tampil");
const statusNotif = document.getElementById("notif-status");

judul.innerText = "Genshin Impact";
hargaLabel.innerText = "Rp 150.000";

statusNotif.style.color = "blue";
statusNotif.style.fontStyle = "italic";

const tombol = document.getElementById("btn-beli");

// Mendengarkan kejadian 'Click'
tombol.addEventListener("click", function() {
    // Aksi saat diklik
    statusNotif.innerText = "PESANAN BERHASIL DIPROSES!";
    statusNotif.style.color = "green";
    statusNotif.style.fontWeight = "bold";

    // Mengubah tampilan tombol
    tombol.innerText = "SUDAH DIBELI";
    tombol.style.backgroundColor = "#ccc";
    tombol.disabled = true; // Agar tidak bisa diklik lagi
    
    alert("Terima kasih telah berbelanja!");
});