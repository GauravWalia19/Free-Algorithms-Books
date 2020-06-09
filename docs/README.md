# MERN BOILERPLATE

This is a boilerplate repo for creating new mern stack apps that doesn't sucks.

This is minimalist boilerplate for Full Stack MERN developers *(Recommended for beginners only)*. This boilerplate provides basic configurations like:

* Sample CRUD API
* Create-react-app boilerplate
* NPM Scripts needed for MERN Stack
* Sample mongoose connection provided for connecting API with database like mongodb
* Heroku Deployment Configurations

## Available Scripts

For APIs to work in development please add a **.env** file in root of the project and add your **MONGODB_URI** in that file.

### `yarn start`

Runs the server in the production mode.<br />
Open [http://localhost:5000/api/v1/get](http://localhost:5000/api/v1/get) to view sample CRUD API output from server in the browser.

### `yarn run dev`

Runs the server in the development mode.<br />
Open [http://localhost:5000/api/v1/get](http://localhost:5000/api/v1/get) to view sample CRUD API output from server in the browser.

The server will auto restart if you make any changes.

### `yarn run client`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn run mern`

Runs the **server** and the **client** at the **same time** that makes MERN Stack development easier.<br>

Open [http://localhost:5000/api/v1/get](http://localhost:5000/api/v1/get) to view sample CRUD API output from server in the browser.<br>

Open [http://localhost:3000](http://localhost:3000) to view React App in the browser.

## Steps for Heroku Deployment

### Dependencies

* nodejs
* yarn package manager
* heroku cli

### Deployment Steps

1. Check whether you have heroku installed in you PC or not using `heroku --version` command. If you don't have then you can install it from [here](https://devcenter.heroku.com/articles/heroku-cli).

2. Create your account if you don't have any.

3. Then open the terminal or cmd in root directory and make sure you have created a git repository for your project. Remove **.git** directory if present in **client** folder otherwise it may lead to deployment issues.

4. **All the heroku build deployment scripts are provided you can review and update the engine in root package.json if you want to deploy with any other version of node and yarn** .

5. Then login your heroku account using `heroku login`.

6. After login its time to create a new app with you app name using `heroku create <your unique app name>`. If you get name already used then you have to choose any other unique name.

7. Now open the heroku account in the browser, you will see your app is created. Then open the settings of the app and in the config vars add **heroku variables** like **MONGODB_URI**.

8. For deployment run `git push heroku master` and it will deploy your app on heroku.
