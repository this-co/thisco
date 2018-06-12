<?php
	//Template Name: 170523
?>


<?php get_header(); ?>

<?php get_sidebar(); ?>

<?php
	$args = array(
		'posts_per_page' => 1,
		'posts_status' => 'publish',
		'post_type' => 'post'
	);
?>

<?php 
// the query
$the_query = new WP_Query( $args ); ?>

<?php if ( $the_query->have_posts() ) : ?>

	<!-- pagination here -->
    <?php the_title(); ?>
	<!-- the loop -->
	<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
		<div class="news_title"><?php the_title(); ?></div>
		<div class="content">
			<?php the_content(); ?>
		</div>
	<?php endwhile; ?>
	<!-- end of the loop -->

	<!-- pagination here -->

	<?php wp_reset_postdata(); ?>

<?php else : ?>
	<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>


<?php get_footer(); ?>