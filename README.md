# React CRM App
> Minimal front-end for crm app.

* **[React](https://facebook.github.io/react/)** (16.x)
* **[Webpack](https://webpack.js.org/)** (4.x)
* **[Material UI](https://material-ui.com/)** (3.x)
* **[Hot Module Replacement (HMR)](https://webpack.js.org/guides/hmr-react/)** using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (4.x)
* **[Babel](http://babeljs.io/)** (7.x)
* [SASS](http://sass-lang.com/)
* [Jest](https://facebook.github.io/jest/) - Testing framework for React applications
* Image loading/minification using [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader)
* Code formatting using [Prettier](https://github.com/prettier/prettier).

## Installation
1. Clone/download repo
2. `yarn install` (or `npm install` for npm)

## Usage
**Development**

`yarn run start-dev`

* Build app continously (HMR enabled)
* App served @ `http://localhost:8080`

**Production**

`yarn start-prod`

* Build app once (HMR disabled)
* App served @ `http://localhost:3000`

---

**All commands**

Command | Description
--- | ---
`yarn run start-dev` | Build app continously (HMR enabled) and serve @ `http://localhost:8080`
`yarn run start-prod` | Build app once (HMR disabled) and serve @ `http://localhost:3000`
`yarn run build` | Build app to `/dist/`
`yarn run test` | Run tests
`yarn run prettier-write` | Format code and write changes
`yarn run prettier-check` | Prints the filenames of files that are different from Prettier formatting
`yarn run start` | (alias of `yarn run start-dev`)

**Note**: replace `yarn` with `npm` if you use npm.

## Development flow
All commits should be done in separate branch and merged to `master` only after the code review process.
Branch should be named in next format: `feature/name_of_the_task`

