<?php
/**
 * Plugin Name: Demoify Blocks
 * Plugin URI: https://demoify.com
 * Description: Demoify is a collection of content blocks for the new Gutenberg block editor. Blocks are chunks of content such as paragraphs, images, Tabs, columns, testimonials, buttons, and more. Demoify blocks give you more control to quickly create and launch any kind of site you want!
 * Author: Sandeep Prasad Bhatt
 * Author URI: http://www.sandeepbhatt.com.np
 * Version: 1.0.1
 * License: GPL-3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package DEMOIFY BLOCKS
 */


/**
 * Exit if accessed directly
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Define global constants.
 *
 *
*/

defined( 'DEMOIFY_VERSION' ) || define( 'DEMOIFY_VERSION', '1.0.1' );
defined( 'DEMOIFY_FILE' ) || define( 'DEMOIFY_FILE', __FILE__ );

if ( ! defined( 'DEMOIFY_NAME' ) ) {
	define( 'DEMOIFY_NAME', trim( dirname( plugin_basename( __FILE__ ) ), '/' ) );
}

if ( ! defined( 'DEMOIFY_DIR' ) ) {
	define( 'DEMOIFY_DIR', WP_PLUGIN_DIR . '/' . DEMOIFY_NAME );
}

if ( ! defined( 'DEMOIFY_URL' ) ) {
	define( 'DEMOIFY_URL', WP_PLUGIN_URL . '/' . DEMOIFY_NAME );
}

/**
 * Initialize the blocks
 */
require_once( DEMOIFY_DIR . '/src/init.php' );
















