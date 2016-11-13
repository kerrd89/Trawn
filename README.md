# Trawn

App is available on gh-pages at [https://kerrd89.github.io/Trawn/](https://kerrd89.github.io/Trawn/).

![](http://g.recordit.co/oOI8TrHVkQ.gif)

To install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run your application.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

To build the static files:

```js
npm run build
```


To run tests in Node:

```js
npm test
```
## There are 3 script files in total.

1. World.js: Contains anything related to tracking the game itself.  Difficulty, past locations, score, game size, and many key functions are attributes of the world and associated methods can be found on the world..  

2. Prawn.js: Contains all information associated with individual game pieces.  These are created and removed each game and therefore only contain information pertanent to the movement and characteristics of those individual prawns.

3. Index.js: Contains all event listeners and requires the world and the prawn.  Important elements within are:

  * request animation function: this renders the world, moves individual prawns, and checks for collisions
  * event listeners
  * Canva animations
  * requires both the world and prawn, allowing it access to both.

Functions associated with initiating, rendering, and event listeners on the game are housed here.  Event listeners such as a change direction request will execute a function via the world prototype, which then executes the movement function on individual prawns, which are then rendered in the tick function in the world.

## Tests can be found in the test folder and consist of 4 files:

1. index.js: included for the bundler to combine other 3 test files
2. world-test.js: contains tests associated with the creation and parameters around the world
3. prawn-test.js: contains tests for the creation and movement of each prawn
4. prawn-world-test: contains collision testing

Tests are in place to ensure attributes of the world and the prawn, to test key functions (like those moving the prawns), and confirm basic collision testing is working.

##Other files

Basic reset files and styling is applied in the css folder.  The majority of styling is being applied as animations in canva, but headers and footers frame the canvas for buttons, scoreboard, and the difficulty dropdown.

Index.html contains basic HTML and script tags to the bundler.

Images are in the images folder.  All rights are reserved on the Trawn Prawn image.
