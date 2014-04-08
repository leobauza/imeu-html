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
		<section class="site__main">
			<article class="main__content hot-topic">
				<header class="hot-topic__header">
          <div class="hot-topic__tags">
		    		<a href="#" class="label--default">Hot Issue</a>
    			</div>
					<div class="hot-topic__social">
						<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc-globals/add-this.php'); ?>
					</div>
					<h1>Culture</h1>
				</header>
				<div class="hot-topic__intro row">
          <aside class="span6">
  					<div class="img"><img src="../assets/img/ph_listing_intro.jpg" alt="placeholder image"></img></div>
  					<div class="text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quis excepturi libero saepe, commodi nemo consequatur impedit corporis facere cupiditate, rem sunt cum inventore ipsa obcaecati molestias, neque blanditiis dicta.</p></div>
          </aside>
          <aside class="span6">
            <a class="twitter-timeline" height="350" href="https://twitter.com/search?q=%23NHL" data-widget-id="453534854420762625">Tweets about "#NHL"</a>
            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
          </aside>
				</div>
			</article>
  		<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc/generic-tiles.php'); ?>
		</section>
	</div>
</section>


<?php include($_SERVER['DOCUMENT_ROOT'] . '/inc-globals/footer.php'); ?>
