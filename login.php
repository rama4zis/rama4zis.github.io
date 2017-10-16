<?php
  require_once('dasar/header.php');
 ?>

<?php

session_start();

$user = 'rama';
$password = '3015';

if ( isset($_POST['masuk']) ){

  if ( $_POST['id'] == $user && $_POST['pass'] == $password ){

    //membuat ver set_masuk sama seperti id yang dimassukan
    $_SESSION['set_masuk'] = $_POST['id'];
    //kita pindah ke masuk.php
    header('Location: masuk.php');
  }else{
    echo "Login Gagal";
  }

}


 ?>

<form action="" method="post">
  <input type="text" name="id" value="">
  <input type="password" name="pass" value="">
  <input type="submit" name="masuk" value="Login">
</form>

<!-- <?php
  require_once('dasar/footer.php')
 ?> -->
