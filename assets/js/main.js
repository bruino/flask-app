
/*
 * Main Javascript file for my_flask_app.
 *
 * This file bundles all of your javascript together using webpack.
 */

// JavaScript modules
require('@tabler/core')

require.context(
  '../img', // context folder
  true, // include subdirectories
  /.*/, // RegExp
);

