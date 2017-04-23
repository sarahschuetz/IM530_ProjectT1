# IM530_ProjectT1 - PURR PURR PURR

## Summary

Purr purr purr is a game about cats. It is made to have fun and fullfill everybodies secret dream (to chat with their cats). Some of your cats has not been well-behaved and your task is to find out which cat is was.

## Web Demo

A working version can be found [here](https://purr-purr-purr.herokuapp.com/).

## Teammembers

* Sarah Sauseng
* Sarah Schütz

## Setup & Folder Structure

The project is set up using **AdonisJs**, **Nuxt** and **Vue.js**.

The Node version used is 7.2.0 like stated in the `package.json` file.

The basic folder structure is given by Adonis. All vue components as well as images and styles life in the `resources` folder. The vue components are stored in the folder `components`. Styles and images are in the folder `assets`.

We are also using **Vuex**. The store file can be found at `components/store/index.js`.

Most of the backend can be found in the Adonis controllers at `app/Http/Controllers`. 

**Nuxt** provides **server-side rendering**. Everytime a page is requested directly via entering the Url in the browser, the templates are rendered on the server. When firing click events for example, dynamically generated content is rendered in the browser.

On the server-side every incoming route is matched to a controller. All routes are defined in `app/Http/routes`. We define several routes for our backend and for the webhooks used by **API.ai**. The last route provided is a wildcard for all other routes. The corresponding controller will execute the Nuxt-Controller. If the route corresponds with the location of a vue page in the `resources/pages` folder the corresponding template is rendered. e.g. the route `/play` will render the component `resources/pages/play.vue`. If no corresponding file exists an error page is rendered using the layout defined in `resources/layouts/error.vue`.

## Workflow

Our workflow needs two servers to run. Both can started simultaneously by running `gulp dev`.
To view the project open `http://localhost:3333/` in the Browser. **Always use port 3333**. Port 3000 is only running some simple Gulp tasks and will not show anything.

### Nodemon

**Nodemon** is used to start a server on **port 3333** which runs the backend and the webpack tasks provided by nuxt.

### Gulp

In addition, we use **Gulp** to add some basic copying and scss compiling tasks for our images and global scss files combined to one `main.css` file in the `resources/static` folder which is imported in the HTML file on which everything is based on. It contains basic styling important and equal an all pages. The images are copyed to `resources/static/img` and referenced from there.

## Database

The data is stored using **MongoDB**. The database lives in the cloud at [cloud.mongodb.com](https://cloud.mongodb.com).

For the project to work it is important that either a **.dev** file with necessary parameters exists or that the parameters are set correctly in the deployment environment.

The necessary parameters for the database are:

* DB_CONNECTION
* DB_HOST
* DB_PORT
* DB_USER
* DB_PASSWORD
* DB_DATABASE

If you have our .zip file the .env is contained in there. If you clone the repository and don't have our parameters contact us.

## Deployment

The git repository has **two branches**: `master` and `deploy`. Everything that is pushed to `deploy` is **automatically deployed** to [purr-purr-purr.herokuapp.com](https://purr-purr-purr.herokuapp.com/).

Bevore the project can be deployed the `gulp` task must be run to ensure that all images and the compiled css is copyed to the `static` folder. Also `npm run build` must be run to accomplish a nuxt build. When deploying with heroku this is done automatically after cloning the data from the git repository.

The project can also be deployed manually with `git push heroku master`.

## Chatbot

For the chatbot **API.ai** is used. **Webhooks** are configuered to send request to our server so the cats can know informations like what their name is or where they are at the moment.

## Browser Compatibility & Responsiveness

The project is primarily optimised for **Google Chrome**. It has also been tested in Firefox and Safari. All tests were performed on MacOSX. There is a known bug in Safari which seems not to support the plugin used to make the image map responsive. Therefor the areas in the map are not scaled correctly.

While the game is primarily optimized for desktop and tablet use. It still is responsive, so the use on mobile phones is possible.

