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
		plugins_url( '/dist/blocks.build.js', DEMOIFY_FILE ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor' ),
		DEMOIFY_VERSION
	);

	// Load the compiled styles into the editor.
	wp_enqueue_style(
		'demoify-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', DEMOIFY_FILE ), // Block editor CSS.
		array( 'wp-edit-blocks' ),
		DEMOIFY_VERSION
	);
}
// End function demoify_editor_assets().

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
		plugins_url( '/dist/blocks.frontend.build.js', DEMOIFY_FILE ), // Block.build.js: We register the block here. Built with Webpack.
		array(),
		DEMOIFY_VERSION
	);

	// Styles.
	wp_enqueue_style(
		'demoify-block-frontend-css', // Handle.
		plugins_url( 'dist/blocks.frontend.build.css', DEMOIFY_FILE ), // Block frontend CSS.
		array('wp-edit-blocks'),
		DEMOIFY_VERSION
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
