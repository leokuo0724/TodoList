# This repository is for React Redux Tutorial
## Three Main Parts
* ### 1. React
* ### 2. Redux
* ### 3. React-Redux (used together)

***
### 1. React
![](https://i.imgur.com/v5G1tbR.png)

#### Prerequisite (some keyword you can find)
#### Tool
* 1. Node ( version > 8 )
* 2. Npm ( version > 5.6)

#### Tech
* 1. JSX (syntax sugar for write html style in js file)
* 2. Webpack (transpile some weird js(like JSX) to the one browser know)
* 3. babel (kind of loader for webpack)

#### Concept of React
* 1. Reuse same html in same component instead of repeat writing same html code
* 2. Render in the efficient way
* 3. Data binding make ui easy to management (rerender)
#### You can use the repository in master branch (which has seted up for your first react demo)
***

### 2. Redux
![](https://i.imgur.com/zt6QbbJ.png)
#### Concept of Redux
* 1. React and Redux you can use one of them individually ,just because it is perfect when you use them together
* 2. Redux will hold a global store that make things easier
* 3. All redux is about three component
    * store : save the state of SPA (single page application)
    * reducer : handle action (and retrive store or update store)
    * action : action fired from js (defined by developer)

![](https://i.imgur.com/XP60H8g.png)

#### You can use the repository in reduxExample branch (which will show you the simple concept about redux)
***
### 3. React-Redux

#### Work flow of React SPA without Redux
* state will be in any component pass to each other
![](https://i.imgur.com/mwVcyT7.png)

#### Work flow of React SPA with Redux
* only one global state hold every component's infomation

![](https://i.imgur.com/0V047A9.png)

##### you can see the basic demo in react-redux branch
