// ===== KONTROL DARK MODE =====
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Ganti ikon
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️"
        : "🌙";
});


// ===== KONTROL MUSIK =====
const backgroundMusic = document.getElementById("background-music");
const muteBtn = document.getElementById("muteBtn");

// Event listener untuk tombol mute/unmute
muteBtn.addEventListener("click", () => {
    // Balikkan status hening (jika true jadi false, jika false jadi true)
    backgroundMusic.muted = !backgroundMusic.muted;

    // Ganti ikon tombol berdasarkan status hening
    muteBtn.textContent = backgroundMusic.muted ? "🔇" : "🔊";
});

// Mencoba memutar musik secara otomatis saat halaman dimuat
const playPromise = backgroundMusic.play();

if (playPromise !== undefined) {
    playPromise.then(_ => {
        // Autoplay berhasil, pastikan musik bersuara
        backgroundMusic.muted = false;
        muteBtn.textContent = "🔊";
    }).catch(error => {
        // Autoplay diblokir, buat musik hening secara default
        console.log("Autoplay diblokir oleh browser.");
        backgroundMusic.muted = true;
        muteBtn.textContent = "🔇";
    });
}


// ===== FORM WHATSAPP =====
function redirectToWhatsApp() {
    const name = document.getElementById("name").value.trim();
    const layanan = document.getElementById("layanan").value.trim();

    if (name === "" || layanan === "") {
        alert("Silakan isi semua data terlebih dahulu.");
        return false;
    }

    const pesan = `Halo, saya ${name}, ingin memesan layanan: ${layanan}.`;
    const nomorWA = "6281234567890"; // Ganti dengan nomor WA admin TRM Studio

    const linkWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    window.open(linkWA, "_blank");
    return false; // agar form tidak reload
}

