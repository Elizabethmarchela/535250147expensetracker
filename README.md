Expense Tracker adalah website untuk mencatat pengeluaran, dibuat menggunakan HTML, CSS, dan JavaScript.

Cara Kerja Website:
- Pengguna dapat memasukkan nama pengeluaran(name), jumlah uang(amount), kategori(category), dan tanggal(date).
- Setelah semua data diisi, pengguna dapat menekan tombol Add Expense. 
- Data yang dimasukkan akan muncul di dalam tabel.
- Website juga akan menghitung dan menampilkan:
  - Total seluruh pengeluaran
  - Jumlah data pengeluaran
- Setiap data yang sudah ditambahkan juga dapat dihapus menggunakan tombol Delete.

1. index.html
   
File index.html digunakan untuk membuat struktur website.

Di dalam file ini terdapat:
- Judul Expense Tracker
- Form untuk memasukkan data pengeluaran
- Input nama pengeluaran
- Input jumlah pengeluaran
- Pilihan kategori
- Input tanggal
- Tombol Add Expense
- Tabel untuk menampilkan data
- Total Amount untuk menampilkan jumlah pengeluaran
- Total Data untuk menampilkan jumlah data

HTML digunakan untuk membuat bagian-bagian yang akan dilihat oleh pengguna.

2. style.css
   
File style.css digunakan untuk mengatur tampilan website.

CSS digunakan untuk mengatur:
- Warna background
- Warna tulisan
- Ukuran dan posisi form
- Tampilan input
- Tampilan tombol
- Tampilan tabel
- Tampilan bagian total
  
Pada website ini menggunakan warna pink pastel dan background putih pada bagian form, tabel, dan total agar tampilannya lebih rapi.

Pada bagian form digunakan grid agar input dapat tersusun menjadi dua kolom.

3. app.js
   
File app.js digunakan untuk membuat website dapat bekerja dan berinteraksi dengan pengguna.

JavaScript digunakan untuk:
- Mengambil data dari form
- Mengecek data yang dimasukkan
- Menambahkan data pengeluaran
- Menampilkan data ke dalam tabel
- Menghitung total pengeluaran
- Menghitung jumlah data
- Menghapus data pengeluaran
  
Jadi, saat pengguna menekan Add Expense, JavaScript mengambil data dari form kemudian menampilkannya ke tabel.

Jika pengguna menekan Delete, data tersebut akan dihapus dari daftar dan tampilan tabel akan diperbarui.
