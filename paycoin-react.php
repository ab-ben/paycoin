<?php
/*
Plugin Name: PayCoin Plugin
Description: Displays the PayCoin settings on an admin page.
Version: 1.0
Author: Your Name
*/

// Register the main menu page
function paycoin_add_admin_page() {
    add_menu_page(
        'PayCoin Settings', // Page title
        'PayCoin', // Menu title
        'read', // Capability
        'paycoin', // Menu slug
        'paycoin_page_html', // Function to display page content
        'dashicons-welcome-write-blog', // Icon URL
        20 // Position
    );

    // Register a submenu page
    add_submenu_page(
        'paycoin', // Parent slug
        'PayCoin Packages', // Page title
        'Packages', // Menu title
        'read', // Capability
        'paycoin-packages', // Menu slug
        'paycoin_packages_page_html' // Function to display page content
    );

    // Register a hidden submenu page for free packages
    add_submenu_page(
        'paycoin', // No parent slug to hide from the sidebar
        'PayCoin Free Packages', // Page title
        'Free Packages', // Menu title
        'read', // Capability
        'paycoin-free-packages', // Menu slug
        'paycoin_free_packages_page_html' // Function to display page content
    );

    // Register a hidden submenu page for premium packages
    add_submenu_page(
        'paycoin', // No parent slug to hide from the sidebar
        'PayCoin Premium Packages', // Page title
        'Premium Packages', // Menu title
        'read', // Capability
        'paycoin-premium-packages', // Menu slug
        'paycoin_premium_packages_page_html' // Function to display page content
    );

    add_submenu_page(
        null, // No parent slug, so it won't be displayed on the sidebar
        'Sign In', // Page title
        'Sign In', // Menu title
        'read', // Capability
        'paycoin-signin', // Menu slug
        'paycoin_signin_page_html' // Function to display page content
    );
}

function paycoin_enqueue_scripts($hook) {
    if ($hook !== 'toplevel_page_paycoin' && 
    $hook !== 'paycoin_page_paycoin-packages' && 
    $hook !== 'paycoin_page_paycoin-free-packages' && 
    $hook !== 'paycoin_page_paycoin-premium-packages'&&
    $hook !== 'paycoin_signin_page_html') {
        return;
    }

    $script_path = plugin_dir_path(__FILE__) . 'build/assets/';
    $script_url = plugin_dir_url(__FILE__) . 'build/assets/';
    $scripts = glob($script_path . 'main-*.js'); 

    if (!empty($scripts)) {
        $script_file = basename($scripts[0]); 
        wp_enqueue_script('paycoin-app', $script_url . $script_file, array(), null, true);
    }
}

function paycoin_page_html() {
    echo '<div id="paycoin-root"></div>';
}

function paycoin_packages_page_html() {
    echo '<div id="packages-root"></div>';
}

function paycoin_free_packages_page_html() {
    echo '<div id="free-packages-root"></div>';
}

function paycoin_premium_packages_page_html() {
    echo '<div id="premium-packages-root"></div>';
}
function paycoin_signin_page_html() {
    echo '<div id="signin-root"></div>';
}

// Hook the functions to WordPress actions
add_action('admin_menu', 'paycoin_add_admin_page');
add_action('admin_enqueue_scripts', 'paycoin_enqueue_scripts');

// Enable error logging and display
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
