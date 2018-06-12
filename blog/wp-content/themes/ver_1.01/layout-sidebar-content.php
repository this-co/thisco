<?php
/*
Template Name: Sidebar Content
*/

get_header(); ?>

	<?php get_sidebar(); ?>

	<div id="container" class="clearfix">

		<div id="content">

		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'content-page', get_post_format() ); ?>

		<?php endwhile; ?>

		</div>
		<!-- #content -->
	</div>
	<!-- #container -->

<?php get_footer(); ?>