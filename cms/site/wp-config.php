<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'davidmassimbo_cms' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '39{w:|@*s+n=6YIVYu=.c=0${}M[n8<zeR~%U`lCiFq&Pa!,_^b5LF042)&S{.?E' );
define( 'SECURE_AUTH_KEY',  'K}PzT$$jllK$ h.,xwsG{&|x`R-9HCU?Ak-<aZ`%@?KK?99. p&aQS*=[?+>J^bO' );
define( 'LOGGED_IN_KEY',    'J@K|,KzjCDtRQ`sXje=I<R&..Q~^_|+@UA2)K5J~QOKg3or`l[+9<+m >:U!*TA*' );
define( 'NONCE_KEY',        'l3e1>LWg`;oWg^%v(~U?Pvn7+$,bs1ZyAL_p`;hsDpCvnv@{p`2=L?BY.25({Q19' );
define( 'AUTH_SALT',        '2;..ArR0`$3M[is|A_?[ZSgc~e;P*57S=%4|$8mbT[-B(?&&b_a9Jr QWi06Y4_O' );
define( 'SECURE_AUTH_SALT', '@_p<#sf$I(joK2I?KQvW45B!!k ^1kB2QO8@.3|&_ A*YS1Q>64eOQ+>C!NU$g)(' );
define( 'LOGGED_IN_SALT',   'CU~hc&`{J%iL1#d}66E4{y^G]z,:2q8n$y^A;v_*$Z)0gyb>pAhDm68iF/D)Z;G2' );
define( 'NONCE_SALT',       'y}}hxsndKKz2L=7VzuSXD|!-v/U_FT$P_WHPRij *ldAxh]c[DOR~PpJNyTeA1Nt' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
