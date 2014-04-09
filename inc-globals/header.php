<!DOCTYPE html>
<html lang="en">
<head>
	<link href='http://fonts.googleapis.com/css?family=Asap:400,700' rel='stylesheet' type='text/css'>
  <meta charset="utf-8">
  <title>IMEU</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="IMEU html mock up">
  <meta name="author" content="Saforian">

  <!-- styles -->
  <link rel="stylesheet" href="/assets/css/styles.css" type="text/css" media="screen" charset="utf-8">

  <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
  <!--[if lt IE 9]>
    <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->

  <!-- fav and touch icons -->
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
</head>
<body>
	<header class="site__header">

		<header class="header__top">
			<section class="container">
				<nav class="top__nav">
					<ul class="list--horizontal">
						<li class="first"><a href="#">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Media Center</a></li>
						<li class="last"><a href="#">Contact</a></li>
					</ul>
				</nav>
				<nav class="top__nav--social">
					<ul class="list--social">
						<li class="first"><a href="#" class="twitter">twitter</a></li>
						<li><a href="#" class="fbook">facebook</a></li>
						<li><a href="#" class="tumblr">tumblr</a></li>
						<li><a href="#" class="email">email</a></li>
						<li class="last"><a href="#" class="rss">rss</a></li>
					</ul>
				</nav>
			</section>
		</header>

		<section class="header__main container">
			<span class="toggle--nav">
				<i></i>
				<i></i>
				<i></i>
			</span>
			<span class="toggle--sidebar">
				<i></i>
				<i></i>
				<i></i>
			</span>
			<h1 id="brand">
				<a href="/"><img src="../assets/img/logo_imeu.png" alt="IMEU | Institute for Middle East Understanding"></a>
				<span>IMEU <em>Institute for Middle East Understanding</em></span>
			</h1>
			<?php include('nav.php');?>
		</section>

	</header>
