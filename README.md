# Kitabisa Campaign List

![Project screenshot](./docs/sample.png 'Project screenshot')

## Introduction
This project was created to fulfill recruitment process of Kitabisa.com, bootstrapped with : 
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)

## Available Scripts

### `npm run dev`

Runs the app in the development mode. The page will reload if you make edits.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Project Architecture
All files related to React components are stored in `src` folder, which in it consist of :

### Assets
`assets` folder includes all static file required for the project. In this project, this folder has `image` folder that store `.png` logo of Kitabisa.

### Components
Components includes all components related to the project. Each folder in it represent one single reusable component and others associated with it. In this project, a component folder includes :
- `index.tsx` - a component itself and styles defined in it
- `Component.test.tsx` - describe testing for the component
- `types.ts` - any interface or type definition related to the component

### Context
Context folder includes all context file to manage state. Every context file should export `Provider` and `Consumer`. 

For example in this project, there is one context file named `CampaignContext.tsx` that export `CampaignContextProvider` to provide state down to the children, and `useCampaignContext` hook as a consumer.

### Helper
Helper folder only has one file, `index.ts` file. It contains all helper function related for the project purposses.

### Hooks
Hooks folder only has one file, `index.tsx` file. It contains all custom hooks related for the project purposses.

### Pages
Pages folder includes all page related to the project. It used to bundle a components into one solid page, that react-router later can render for particular url. 

### Style
Style folder usually just for main style that applied globally in the project. In this project, there is `main.css` that only handle global padding, margin, box-sizing and font family.

its because a component style (or page) should have isolated style for itself. I'm using [Styled Components](https://styled-components.com/) to handle every component style itself. 


### index.html
It contain basic html boilerplate with `#app` node to render React component. 

### App.tsx
Usually this file include react-router to route which page to render in particular url. But in this project, because there is only one page, i'm not using react-router. just plain render one page called `LandingPage.tsx`

### index.tsx
This file is responsible to render `App.tsx` to the DOM.