# 📚 E-Portofolio PPG — Panduan Lengkap

> **E-Portofolio Mahasiswa Pendidikan Profesi Guru (PPG)**  
> Praktik Pengalaman Lapangan (PPL) · Semester 2 · 2026

---

## 🗂️ Struktur Folder

```
eportofolio-ppg/
├── index.html          ← Beranda (halaman utama)
├── profil.html         ← Profil Guru
├── perencanaan.html    ← Komponen 1: Analisis Perencanaan Pembelajaran
├── materi.html         ← Komponen 2: Analisis Materi Pembelajaran
├── media.html          ← Komponen 3: Analisis Media Pembelajaran
├── video.html          ← Komponen 4: Analisis Video Praktik Mengajar
├── nonmengajar.html    ← Komponen 5: Analisis Kegiatan Nonmengajar
├── penilaian.html      ← Komponen 6: Instrumen Penilaian & Analisis
├── refleksi.html       ← Refleksi Diri Menyeluruh
├── assets/
│   ├── css/style.css   ← Stylesheet utama (jangan edit kecuali perlu)
│   ├── js/main.js      ← JavaScript: dark mode, hamburger, animasi, dll.
│   ├── img/            ← Folder foto dan gambar
│   └── docs/           ← Folder file PDF/lampiran
└── README.md           ← File panduan ini
```

---

## ✏️ A. Cara Mengganti Placeholder

Semua teks yang perlu Anda ganti ditandai dengan format `[ISI: ...]`.  
Gunakan **Ctrl+F** (atau **Cmd+F** di Mac) di editor teks untuk mencari `[ISI`.

### Daftar Placeholder Utama

| Placeholder | Keterangan |
|---|---|
| `[ISI: NAMA LENGKAP]` | Nama lengkap Anda |
| `[ISI: NIM/NPPPG]` | Nomor Induk Mahasiswa/NPPPG |
| `[ISI: BIDANG STUDI]` | Bidang studi PPG (misal: Matematika) |
| `[ISI: NAMA SEKOLAH]` | Nama sekolah tempat PPL |
| `[ISI: KELAS/FASE]` | Kelas dan fase yang diajar (misal: X / Fase E) |
| `[ISI: NAMA DOSEN PEMBIMBING]` | Nama dosen pembimbing PPL |
| `[ISI: NAMA GURU PEMBIMBING]` | Nama guru pamong/pembimbing |
| `[ISI: EMAIL]` | Alamat email Anda |
| `[ISI: NOMOR WA]` | Nomor WhatsApp Anda |

### Langkah-langkah Mengisi Konten

1. **Buka** file HTML menggunakan editor teks (disarankan: [VS Code](https://code.visualstudio.com/) — gratis).
2. **Cari** semua placeholder dengan `Ctrl+H` (Find & Replace).
3. **Ganti** placeholder dengan konten Anda.
4. **Hapus** blok `example-box` (bertanda "CONTOH PENULISAN") setelah Anda menulis konten nyata.
5. **Simpan** dan buka `index.html` di browser untuk melihat hasilnya.

### Tips Mengisi Konten Berkualitas

- Setiap halaman analisis punya kerangka 7 langkah — isi **semua** langkah agar analisis terlihat mendalam.
- Gunakan **data nyata** dari praktik Anda: angka, observasi, kutipan peserta didik.
- Untuk halaman video, isi tabel analisis per menit sambil menonton ulang video mengajar Anda.
- Untuk halaman refleksi, jawab setiap pertanyaan panduan Model Gibbs dengan jujur dan spesifik.

---

## 🖼️ B. Cara Menambahkan Foto, PDF, dan Video

### Menambah Foto Profil

1. Simpan foto Anda ke `assets/img/` dengan nama `foto-profil.jpg`.
2. Foto akan otomatis muncul di beranda dan halaman profil.
3. Ukuran yang direkomendasikan: minimal **400×400 px**, rasio 1:1, format JPG atau PNG.

### Menambah Foto Dokumentasi

1. Simpan foto ke `assets/img/` dengan nama yang deskriptif (misal: `foto-media-1.jpg`).
2. Di file HTML, cari bagian `<div class="gallery-item">` dan tambahkan:
   ```html
   <div class="gallery-item">
     <img src="assets/img/foto-media-1.jpg" alt="Deskripsi foto Anda">
   </div>
   ```

### Menambah File PDF/Lampiran

1. Simpan file PDF ke folder `assets/docs/`.
2. Di file HTML, cari tombol unduh dan ganti `href`:
   ```html
   <!-- Sebelum -->
   <a href="assets/docs/modul-ajar.pdf" class="btn btn-outline">⬇️ Unduh Modul Ajar</a>
   
   <!-- Setelah — sesuaikan nama file -->
   <a href="assets/docs/modul-ajar-matematika-kelas-x.pdf" class="btn btn-outline">⬇️ Unduh Modul Ajar</a>
   ```

### Menambah Embed Video

Di `video.html`, cari bagian `<div class="video-container">` dan isi `src` iframe:

**Dari YouTube:**
```
https://www.youtube.com/embed/VIDEO_ID_ANDA
```
Contoh: Jika URL video YouTube Anda adalah `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,  
maka embed URL-nya: `https://www.youtube.com/embed/dQw4w9WgXcQ`

**Dari Google Drive:**
```
https://drive.google.com/file/d/FILE_ID_ANDA/preview
```
Contoh: Jika URL Drive Anda adalah `https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs5/view`,  
maka embed URL-nya: `https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs5/preview`

---

## 🚀 C. Langkah Publikasi Gratis

### Opsi 1: GitHub Pages (Direkomendasikan untuk pemula)

> Gratis, URL tetap, mudah diperbarui.

**Langkah 1: Buat Akun GitHub**
- Kunjungi [github.com](https://github.com) dan daftar akun gratis.
- Verifikasi email Anda.

**Langkah 2: Buat Repository Baru**
- Klik tombol **"New"** (atau tanda **+** di pojok kanan atas) → **"New repository"**.
- Isi nama repository: `eportofolio-ppg` (tidak boleh ada spasi).
- Pilih **Public** (wajib untuk GitHub Pages gratis).
- Klik **"Create repository"**.

**Langkah 3: Upload File Website**
- Di halaman repository baru, klik **"uploading an existing file"**.
- Drag & drop **semua file dan folder** dari folder `eportofolio-ppg/` ke browser.
- ⚠️ **Penting:** Upload folder `assets/` beserta isinya dengan cara: drag folder `assets` langsung ke area upload.
- Isi pesan commit: "Upload E-Portofolio PPG".
- Klik **"Commit changes"**.

**Langkah 4: Aktifkan GitHub Pages**
- Di repository Anda, klik tab **"Settings"**.
- Di menu kiri, klik **"Pages"**.
- Di bagian **"Source"**, pilih **"Deploy from a branch"**.
- Pilih branch: **main** dan folder: **/ (root)**.
- Klik **"Save"**.

**Langkah 5: Dapatkan URL**
- Tunggu 1–3 menit, refresh halaman Settings > Pages.
- URL akan muncul dalam format:  
  `https://USERNAME-ANDA.github.io/eportofolio-ppg/`
- Itulah URL yang dikirim ke LMS Ruang GTK! ✅

---

### Opsi 2: Netlify (Lebih cepat, drag & drop)

> Gratis, URL custom tersedia, deploy otomatis.

**Langkah 1: Buat Akun Netlify**
- Kunjungi [netlify.com](https://www.netlify.com) dan daftar akun gratis (bisa login dengan akun GitHub).

**Langkah 2: Deploy dengan Drag & Drop**
- Di dashboard Netlify, scroll ke bawah hingga melihat area **"Want to deploy a new site without connecting to Git?"**.
- Drag & drop **seluruh folder** `eportofolio-ppg/` ke area tersebut.
- Netlify akan otomatis mengupload dan mendeploy website Anda.

**Langkah 3: Dapatkan URL**
- Setelah selesai (30–60 detik), Netlify memberikan URL acak seperti:  
  `https://amazing-heisenberg-abc123.netlify.app`

**Langkah 4 (Opsional): Ubah Nama Site**
- Klik **"Site configuration"** → **"Change site name"**.
- Ganti dengan nama yang mudah diingat, misal: `eportofolio-namaanda`.
- URL menjadi: `https://eportofolio-namaanda.netlify.app` ✅

---

## 🔗 D. Cara Mendapatkan URL Final untuk LMS

Setelah publikasi berhasil, URL yang dikirimkan ke **Ruang GTK (LMS)** adalah:

| Platform | Format URL |
|---|---|
| GitHub Pages | `https://USERNAME.github.io/eportofolio-ppg/` |
| Netlify | `https://NAMA-SITE.netlify.app` |

**Tips:**
- Pastikan URL dapat dibuka di browser **tanpa login**.
- Test buka URL di mode **Incognito/Private** untuk memastikan akses publik.
- Cek semua 9 halaman dapat diakses dari URL tersebut.
- Cek tampilan di HP sebelum mengirim ke LMS.

---

## ✅ E. Checklist Akhir — Pemetaan ke Persyaratan Dosen

### 6 Komponen Wajib

| Komponen | File | Status |
|---|---|---|
| ✅ Analisis Perencanaan Pembelajaran | `perencanaan.html` | Tersedia |
| ✅ Analisis Materi Pembelajaran | `materi.html` | Tersedia |
| ✅ Analisis Media Pembelajaran | `media.html` | Tersedia |
| ✅ Analisis Video Praktik Mengajar | `video.html` | Tersedia |
| ✅ Analisis Kegiatan Nonmengajar | `nonmengajar.html` | Tersedia |
| ✅ Instrumen Penilaian & Analisis | `penilaian.html` | Tersedia |

### 4 Unsur Penilaian

| Unsur Penilaian | Di Mana | Catatan |
|---|---|---|
| **Profil Guru** | `profil.html` | Foto, visi, kompetensi, kontak, riwayat pendidikan |
| **Kedalaman Analisis Produk** | Semua halaman analisis | Kerangka 7 langkah di setiap halaman |
| **Refleksi Diri** | `refleksi.html` + setiap halaman | Model Gibbs + timeline + rencana tindak lanjut |
| **Navigasi & Tampilan** | Semua halaman | Navbar sticky, breadcrumb, prev/next, dark mode, responsif |

### Fitur UI/UX yang Tersedia

- [x] Navbar sticky dengan active state
- [x] Menu hamburger mobile-friendly
- [x] Breadcrumb navigasi
- [x] Tombol Sebelumnya/Selanjutnya di setiap halaman
- [x] Tombol "Kembali ke Atas"
- [x] Dark mode (simpan preferensi)
- [x] Animasi fade-in saat scroll
- [x] Reading progress bar
- [x] Fully responsive (mobile-first)
- [x] Alt text semua gambar (WCAG AA)
- [x] Struktur heading semantik (h1→h2→h3)
- [x] Google Fonts (Poppins + Inter)

---

## 🆘 Pertanyaan Umum

**Q: Bagaimana cara membuka website di browser untuk uji coba?**  
A: Klik dua kali file `index.html` — browser akan otomatis membukanya. Tidak perlu server khusus.

**Q: Apakah saya perlu mengerti coding?**  
A: Tidak perlu. Cukup buka file HTML di Notepad atau VS Code, cari `[ISI`, dan ganti teksnya.

**Q: Bagaimana jika foto saya tidak muncul?**  
A: Pastikan nama file **persis sama** (termasuk huruf besar/kecil) dengan yang ada di `src` tag `<img>`.

**Q: Bisakah saya menambah halaman baru?**  
A: Ya. Duplikat salah satu file HTML, ganti kontennya, dan tambahkan link di navbar.

**Q: Apakah website ini aman digunakan untuk menampilkan data siswa?**  
A: Jangan tampilkan nama lengkap atau data pribadi siswa. Gunakan inisial atau kode (Siswa A, Siswa B).

---

*Dibuat dengan ❤️ untuk Program Pendidikan Profesi Guru (PPG) · 2026*
