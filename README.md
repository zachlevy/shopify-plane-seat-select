shopify-plane-seat-select
=========================
This widget is for including a graphical seat selection tool for flight booking sites. This specific one was built for Shopify.

There are 3 main files, <code>plane_widget.js</code>, <code>plane_widget.css</code>, and <code>index.html</code>.
The images are included in the <code>images</code> folder.

Open <code>index.html</code> in your browser to see a demo.

The number of seats needs to be pre-determined in the <code>plane</code> JSON in <code>plane_widget.js</code>.

The JavaScript reads a select-list, in this case <code>.single-option-selector</code>, to get whether the seats are available. In Shopify, each seat is a variant with 1 inventory.
