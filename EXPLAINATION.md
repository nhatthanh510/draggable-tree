This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Folder Structure

- common     : Including common variables, helpers functions, components
- components : Including classes or functions which take props and render UI
- containers : Including components which handle application data (logic, fetching) and pass props down to components to render
- services   : Including files which using to fetch data from external API
- store      : Including folders/files related to redux flow
     - tree (a feature or part of APP)
     - reducer  : Handling updatereducer of a feature ( this is a part of root reducer)
     - saga     : Including function (using middleware redux-saga) which handle side effect in Redux ( Another popular lib is redux-thunk)
      - action   : Define action creator 
      - selector : Define functions which get data from redux store
      - type     : Define type contanst name

    index.js : configuration to Init app with redux 
    reducers.js : Root reducer of the APP
    saga.js : Root saga of the APP

Split reducer, saga, action by funtionality help us easy to maintain when the APP is bigger. Easy to detect the problem area and easier to read.

## Library used

- redux-actions : Helps to fast create action creator (reduce boilerplate code)
- reduce-reducer: combine multi reducer to single reducer in flatten ( it's different with combine reducer, create nested state)
- redux-saga : Handle side effect. I used it instead of redux-thunk to make code easier to read and avoid promise hell.
- reselect  : Create selector for Redux, avoid recalculating data when un-related part of tree changed so improve the performance
- redux-logger : Middleware logging lib used for tracking redux data

- immutability-helper : The lib help to update state without muate it
- immer : The same immutability-helper functionality, allow to work with immutable data in a convenient way (Easier to use than immutability-helper)
- antd : React UI, a collection of reuseable component which help to fast build a UI
- bootstrap : Toolkit for developing HTML, CSS

and very important is 
- react-dnd, react-dnd-html5-backend : Drag and Drop library help us inject draggable and droppable to our component in the easy way

## Styling used
- Less : CSS preprocessors
- CSS Module : define classname with scope locally

## Config
- react-app-rewired, customize-cra : Override create-react-app config to using "antd" design
- eslint-config-prettier, eslint-plugin-prettier, prettier: auto formater code base on ESLint rule

## Exercise NOTE 
- About the UI/UX of tree, I use "drop" function instead of "hover" because there're some wrong behavior happens during drag and drop, this make UI too laggy and maybe crash browser,  due to lot of re-render is trigger.

- Use "drop" function instead "hover" make the APP is not smoothly, currently I have no found best solution to fix it. So please treat it as a limitation.

- Please using Google Chrome to testing.
