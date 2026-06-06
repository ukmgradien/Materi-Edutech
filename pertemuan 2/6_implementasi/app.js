// Fungsi untuk memfilter proyek berdasarkan kategori
function filterProyek(kategori) {
    // Menangkap semua kartu proyek
    const semuaProyek = document.querySelectorAll(".kartu-proyek");

    // Melakukan perulangan untuk mengecek setiap kartu
    semuaProyek.forEach(function(proyek) {
        // Jika pilih 'semua' atau kartu memiliki class kategori yang dipilih
        if (kategori === 'semua' || proyek.classList.contains(kategori)) {
            proyek.style.display = "block"; // Tampilkan
        } else {
            proyek.style.display = "none"; // Sembunyikan
        }
    });
}