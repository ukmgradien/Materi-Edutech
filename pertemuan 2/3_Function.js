const namaToko = "LeyOne Digital Store";
let saldoUser = 200000;

const produk = {
    id: "ML-500",
    nama: "500 Diamonds",
    harga: 120000,
    tersedia: true
};

const metodeBayar = ["QRIS", "Transfer Bank", "E-Wallet"];

console.log("Selamat Datang di " + namaToko);
console.log("Produk: " + produk.nama + " - Rp" + produk.harga);
console.log("Metode Pembayaran: " + metodeBayar[1]);

if (produk.tersedia === true && saldoUser >= produk.harga) {
    console.log("Status: Transaksi dapat dilanjutkan.");
} else if (saldoUser < produk.harga) {
    console.log("Status: Saldo tidak cukup. Kurang Rp" + (produk.harga - saldoUser));
} else {
    console.log("Status: Produk sedang tidak tersedia.");
}

// Membuat fungsi penghitung biaya admin (Biaya tetap Rp2.000)
function hitungTotal(hargaItem, biayaAdmin) {
    const total = hargaItem + biayaAdmin;
    return total;
}

// Memanggil fungsi
const tagihanAkhir = hitungTotal(produk.harga, 2000);
console.log("Total yang harus dibayar (Inc. Admin): Rp" + tagihanAkhir);