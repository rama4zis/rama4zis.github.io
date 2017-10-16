<?php
session_start();

if( isset($_SESSION['set_masuk']) ){
  echo "Selamat datang " . $_SESSION['set_masuk'];
}else{
  echo "Anda harus <a href='login.php'>Login</a>!";
  die();
}

if( isset($_POST['log-out']) ){
  session_destroy();
  header('Location: masuk.php');
}

 ?>

<form class="" action="" method="post">
    <input type="submit" name="log-out" value="logout">
</form>
