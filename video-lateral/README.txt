A Pen created at CodePen.io. You can find this one at https://codepen.io/schoberg/pen/pJBVqO.

 Based off of Alexis Ulrich's http://www.sitepoint.com/faster-youtube-embeds-javascript/ 

This script stops YouTube iframes from loading the ~450kb of data into the page and instead only loads the image. Upon click it loads the iframe using jQuery

Updates from Alexis's version:
- Responsive (does not accommodate for player bar as this has vanished in the current html5 player)
- Replaced play button image with pure css
- Changed paths to dynamically support with our without https
- Other small tweaks and cleanup