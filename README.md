
# gk-knn

<img src="" alt="Logo" width=200px/>

[![npm](https://img.shields.io/npm/dt/gk-knn.svg?style=flat-square)](https://npmjs.com/package/gk-knn.js) [![npm](https://img.shields.io/npm/v/gk-knn.svg?style=flat-square)](https://npmjs.com/package/gk-knn.js)


## About

`gk-knn` is a library of [k-nearest neighbors](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm) written in JavaScript.


## Table of Contents

- [Examples](#examples)
- [Usage](#usage)
    + [Node](#node)
    + [Browser](#browser)
- [Training](#training)
    + [Data format](#data-format)
    + [Training Options](#training-options)
    + [Async Training](#async-training)
- [Methods](#methods)
- [Failing](#failing)

# Examples
## getType
Example get Type with file name, test instance, k and fields to exclude as arguments.

```
node examples/getType.js 'iris.csv' '{"sepal_length":1,"sepal_width":2,"petal_length":3,"petal_width":4}' 7 ['type']
```
or with default parameters
```
node examples/getType.js 
```

## getAccuracy
Example get accuracy with file name and fields to exclude as arguments.

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

# Usage

### Node
If you have [node](http://nodejs.org/), you can install `brain.js` with [npm](http://npmjs.org):

```
npm install gk-knn.js
```

Or if you prefer yarn:
```
yarn add gk-knn.js
```

At present, the published version of gk-knn.js is approximately 1.0.0.

### Browser
Download the latest [gk-knn.js for browser](). 


### Data format







# JSON


