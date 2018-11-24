<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @package DEMOIFY
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue assets for backend editor
 *
 * @since 1.0.0
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 */
function demoify_editor_assets() {
	// Load the compiled blocks into the editor.
	wp_enqueue_script(
		'demoify-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor' ) // Dependencies, defined above.
		// filemtime( plugin_dir_path( __FILE__ ) . 'block.js' ) // filemtime — Gets file modification time.
	);

	// Load the compiled styles into the editor.
	wp_enqueue_style(
		'demoify-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __FILE__ ) . 'blocks.editor.build.css' )
	);
} // End function demoify_editor_assets().


// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'demoify_editor_assets' );

/**
 * Enqueue assets for frontend
 *
 * @since 1.0.0
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 */

function demoify_frontend_assets() {
	// Scripts.
	wp_enqueue_script(
		'demoify-block-frontend-js', // Handle.
		plugins_url( '/dist/blocks.frontend.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( ) // Dependencies, defined above.
		// filemtime( plugin_dir_path( __FILE__ ) . 'block.js' ) // Version: filemtime — Gets file modification time.
	);

	// Styles.
	wp_enqueue_style(
		'demoify-frontend-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block frontend CSS.
		array( 'wp-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // filemtime — Gets file modification time.
	);
} // End function demoify_frontend_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'demoify_frontend_assets' );


// Add custom block category
add_filter( 'block_categories', function( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'demoify-blocks',
				'title' => __( 'Demoify - Advanced Gutenberg Blocks', 'demoify-blocks' ),
			),
		)
	);
}, 10, 2 );
