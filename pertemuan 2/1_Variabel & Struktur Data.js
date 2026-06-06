// 1. Variabel (const untuk tetap, let untuk bisa berubah)
const namaToko = "LeyOne Digital Store";
let saldoUser = 200000;

// 2. Object (Menyimpan data terstruktur)
const produk = {
    id: "ML-500",
    nama: "500 Diamonds",
    harga: 120000,
    tersedia: true
};

// 3. Array (Daftar data)
const metodeBayar = ["QRIS", "Transfer Bank", "E-Wallet"];

console.log("Selamat Datang di " + namaToko);
console.log("Produk: " + produk.nama + " - Rp" + produk.harga);
console.log("Metode Pembayaran: " + metodeBayar[1]);