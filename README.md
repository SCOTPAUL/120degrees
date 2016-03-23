# Setup

This application requires [bower](http://bower.io/) to setup.

From the root directory of the project, run `bower install`. This should install all of the frontend dependencies for the project.

A Google Maps JavaScript API key is also required. This can be obtained from [here](https://developers.google.com/maps/documentation/javascript/).

Once you have this key, there are two places in the code where it must be inserted. In `src/html/index.html` and `src/js/main.js` there are two places where the string `PUT_GOOGLE_MAPS_API_KEY_HERE` is used as a placeholder. Replace each of these with your API key. You should now be ready to run the application. In older versions of this application, the API key was set for testing, but this key has now been revoked and will not work with current versions.

# Usage

The index page is `./src/html/index.html`. Simply load this file into your browser to use.

