<html><head><title>proses data dari form</title></head>
<body>
<h1>proses simpan buku tamu</h1>
<?
///membuat koneksi ke database
$hostname="localhost"; ///nama server
$username="root"; ///nama username mysql
$password=" "; ///password, kosongkan jika tidak ada
$database="kopi"; ///nama database yang dipilih

mysql_connect($hostname, $username, $password) or die ("Koneksinya Gagal"); ///koneksi ke database
mysql_select_db($database) or die ("Databasenya Gak Ada"); ///memilih database, dan menampilkan pesan jika gagal
///mengambil data dari form
$nama=$_POST[nama];
$alamat=$_POST[alamat];
$telepon=$_POST[telepon];

///input ke tabel pengunjung
$input=mysql_query("INSERT INTO pengunjung (nama_pengunjung, alamat, telepon) VALUES ('$nama', '$alamat', '$telepon')");
///cek sudah terinput atau belum
if($input) ///jika sukses
{
echo "Buku tamu berhasil disimpan";
}
else ///jika gagal
{
echo "Buku tamu gagal disimpan";
}
?>
| <a href="insert-db.html">OK</a>
</body></html>