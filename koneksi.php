<?php

    // KONSTAMTA ALAMAT DATABASE 
    define('hostname', 'localhost');
    define('username', 'root');
    define('password', '');
    define('database', 'kopi');

    // variabel untuk menampung database 
    $koneksi = mysqli_connect(hostname, username, password, database);

    if (!$koneksi) {
        // ketika koneksi gagal
        die('Gagal terhubung ke database. ' . mysqli_connect_error());
    }

?>