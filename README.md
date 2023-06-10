# Fronted development environment

### Node js webpack environment! For frontend web development. 
To work comfortably with scss/sass, js and css. Optimizing build files for better page performance

## Requirements
`Node js`

## Commands
ambient installation
```
npm install
```
start dev server
```
npm start
```
generate build files
```
npm run build
```

### Advice
it is recommended to use the structure of the environment as described
```
--src
  --js
    --(all js files)
  --scss
    --(all scss/sass files)
  -- (all html fils)
```
For js and scss/sass files it is advisable to use the instructions in the index and main files of the respective folders

It is not recommended to integrate external libraries inside js folder and register them inside js files.
This is because the compiler creates a single bundle file for all js files. So also the libraries imported in this way will be included in the process