<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc-globals/header.php'); ?>

<section class="site__body">
	<div class="inner">
		<aside class="site__sidebar">

			<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc-globals/search.php'); ?>
			<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc/site-tabs.php'); ?>
			<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc/social-tabs.php'); ?>

			<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc/popular-tags.php'); ?>

			<a href="#" class="btn--donate">Donate to the IMEU</a>

		</aside>
		<section class="site__main listing">
			<article class="main__content listing">
				<header class="listing__header">
					<h1>Culture</h1>
					<div class="listing__social">
						<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc-globals/add-this.php'); ?>
					</div>
				</header>
				<div class="listing__intro">
					<div class="img"><img src="../assets/img/ph_listing_intro.jpg" alt="placeholder image"></img></div>
					<div class="text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quis excepturi libero saepe, commodi nemo consequatur impedit corporis facere cupiditate, rem sunt cum inventore ipsa obcaecati molestias, neque blanditiis dicta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quidem eaque, laudantium iure assumenda, distinctio asperiores non et quibusdam id aliquid. Repudiandae, doloribus, quibusdam. Eveniet, quos rerum libero animi saepe?</p></div>
				</div>
			</article>
  		<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc/generic-tiles.php'); ?>
		</section>
	</div>
</section>


<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc-globals/footer.php'); ?>
