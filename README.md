# webpack-cheatsheet
* it is one of javascript build tool

![how](imgs/how.png)

![state](imgs/state.png)

## vs react script
* Webpack is a general purpose bundler, not just for react
* with react project, `react script` will be easier to set up than webpack
  * we need to add other plugins required by Webpack to support some features
* `react script` uses webpack internally
* When to use webpack?
  * write a component library to reuse in other apps
  * want to build browser specific bundles of your JS, a smaller bundle for newer browsers without transpilation and polyfills, and a fatter bundle for older browsers containing all of those

## vs Babel
* Webpack vs Babel is apple to orange
  * webpack uses babel
* It is a JavaScript compiler
* It is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments
* It can convert JSX syntax
* It's main job is to turn unsupported or cutting-edge language features into ES5
* It used for both backend and frontend

### example
```javascript
// ES6 syntax
import moment from 'moment';
export default () => moment().format("YYYY Do MM");
```

into 

```javascript
// ES5 syntax
const moment = require('moment')

function getDateString() {
  const date = moment();
  return date.format("YYYY Do MM");
}
```

### Webpack
* It is frontend only
* It is a dependency analyzer and module bundler
  * It can collect all your inline CSS styles in your Javascript files and bundle them into one
  * This is also known as `minify` and `uglify`
* Webpack often runs Babel as one of its jobs



