<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc-globals/header.php'); ?>

<section class="site__body">
	<div class="inner">
		<aside class="site__sidebar">

			<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc-globals/search.php'); ?>
			<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc/site-tabs.php'); ?>
			<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc/social-tabs.php'); ?>

			<a href="#" class="btn--donate">Donate to the IMEU</a>

		</aside>
		<section class="site__main">
			<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc/main-content.php'); ?>
		</section>
	</div>
</section>


<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc-globals/footer.php'); ?>
