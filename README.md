# Incentrify! 🚀

> written
> by [Martijn Benjamin](https://www.linkedin.com/in/martijn-benjamin/) ([Appeltje-C](https://github.com/appeltje-c))
>

## Intro

This project has been created as part of the Incentro Technical Assessment.

The Assessment asks to create a "Voice Command Music Search" App making use of the Spotify API.

I chose to create a React App written in Typescript using redux toolkit for data retrieval and caching and Material UI with Three.js and Fiber for the visualization of
the search results.

## Running the App

Clone the repo

```shell
git clone git@github.com:appeltje-c/incentrify.git
```

Then install and run

```shell
cd incentrify && yarn && yarn dev
```

An visit [http://localhost:5173](http://localhost:5173)

## What's in the box

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/material-ui/getting-started/)
- [RTKQuery](https://redux-toolkit.js.org/rtk-query/overview)
- [Three.js](https://threejs.org/)
- [Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)

## To do with more time

- Move spotify auth to redux
- Implement Refresh token
- Refactor Carousel
