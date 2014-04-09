<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc-globals/header.php'); ?>

<section class="site__body">
	<div class="inner">
		<aside class="site__sidebar">

			<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc-globals/search.php'); ?>
			<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc/site-tabs.php'); ?>
			<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc/social-tabs.php'); ?>

			<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc/popular-tags.php'); ?>

			<div class="sidebar__form">
				<form action="http://imeu.createsend.com/t/r/s/zttkr/" method="post">
				  <h4>Sign Up</h4>
					<div class="form__group">
						<label for="fieldName">Name</label>
						<input id="fieldName" name="cm-name" type="text" required />
					</div>
					<div class="form__group">
						<label for="fieldEmail">Email</label>
						<input id="fieldEmail" name="cm-zttkr-zttkr" type="email" required />
					</div>
					<div class="form__group">
						<label for="fieldkkpt">Organization</label>
						<input id="fieldkkpt" name="cm-f-kkpt" type="text" required />
					</div>
					<button class="btn--default" type="submit">Subscribe</button>
				</form>
			</div>

			<a href="#" class="btn--donate">Donate to the IMEU</a>

		</aside>
		<section class="site__main">
			<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc/main-content.php'); ?>
		</section>
	</div>
</section>


<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc-globals/footer.php'); ?>
