<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @package WP
 */


// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'aa_demoify_editor_assets' );

/**
 * Enqueue the block's assets for the editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function aa_demoify_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'aa-demoify-block', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ) // Dependencies, defined above.
		// filemtime( plugin_dir_path( __FILE__ ) . 'block.js' ) // filemtime — Gets file modification time.
	);

	// Styles.
	wp_enqueue_style(
		'aa-demoify-block-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // filemtime — Gets file modification time.
	);
} // End function aa_demoify_editor_assets().


// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'aa_demoify_frontend_assets' );

/**
 * Enqueue the block's assets for the frontend.
 *
 * @since 1.0.0
 */
function aa_demoify_frontend_assets() {
	// Styles.
	wp_enqueue_style(
		'aa-demoify-frontend-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block frontend CSS.
		array( 'wp-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // filemtime — Gets file modification time.
	);
} // End function aa_demoify_frontend_assets().
