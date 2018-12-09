
# gk-knn

<img src="" alt="Logo" width=200px/>

[![npm](https://img.shields.io/npm/dt/gk-knn.svg?style=flat-square)](https://npmjs.com/package/gk-knn.js) [![npm](https://img.shields.io/npm/v/gk-knn.svg?style=flat-square)](https://npmjs.com/package/gk-knn.js)


## About

`gk-knn` is a library of [k-nearest neighbors](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm) written in JavaScript.


## Table of Contents

- [Examples](#examples)
    + [Node](#node)
    + [Browser](#browser)
- [Usage](#usage)
    + [Node](#node-usage)
    + [Browser](#browser-usage)
- [Data format](#data-format)
    + [.csv](#csv)
    + [JSON](#json)

# Examples
## Node
### getType
Execute getType with file name, test instance, k and fields to exclude as arguments.

```
node examples/getType.js 'iris.csv' '{"sepal_length":1,"sepal_width":2,"petal_length":3,"petal_width":4}' 7 ['type']
```
or with default parameters
```
node examples/getType.js 
```

### getAccuracy
Execute getAccuracy with file name and fields to exclude as arguments.

```
node examples/getAccuracy.js 'iris.csv' ['type','sepal_length', 'sepal_width']
```

```
node examples/getAccuracy.js 'iris.csv' ['type']
```
or with default parameters
```
node examples/getAccuracy.js 
```

## Browser
TODO

# Usage
## Node usage
If you have [node](http://nodejs.org/), you can install `gk-knn.js` with [npm](http://npmjs.org):

```
npm install gk-knn.js
```

Or if you prefer yarn:
```
yarn add gk-knn.js
```

At present, the published version of gk-knn.js is approximately 1.0.0.

## Browser usage
TODO
Download the latest [gk-knn.js for browser](). 


# Data format
Currently only .csv files are supported. 

## csv
The first line should hold label names.
```
sepal_length,sepal_width,petal_length,petal_width,type
5.1,3.5,1.4,0.2,Iris-setosa
4.9,3.0,1.4,0.2,Iris-setosa
4.7,3.2,1.3,0.2,Iris-setosa
...
```

## JSON
TODO

