
# gk-knn

<img src="" alt="Logo" width=200px/>

[![npm](https://img.shields.io/npm/dt/gk-knn.svg?style=flat-square)](https://npmjs.com/package/gk-knn) [![npm](https://img.shields.io/npm/v/gk-knn.svg?style=flat-square)](https://npmjs.com/package/gk-knn)


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
The example problem used is iris classification. The dataset iris.csv is saved in data folledr.

The example file is comprised of 150 observations of iris flowers from three different species. There are 4 measurements of given flowers: sepal length, sepal width, petal length and petal width, all in the same unit of centimeters. The predicted attribute is the species type, which is one of setosa, versicolor or virginica.


### getType
Execute getType with file name, test instance, k and fields to exclude as arguments, to determine the type of a new instance. We can exclude more fields than just the mandatory excluded "type" field.

```
node examples/getType.js 'iris.csv' '{"sepal_length":1,"sepal_width":2,"petal_length":3,"petal_width":4}' 7 ['type','sepal_length', 'sepal_width']
```
or with default parameters
```
node examples/getType.js 
```


### getAccuracy
Execute getAccuracy with file name and fields to exclude as arguments. In order to determine the classification accuracy, we split the data into training and test datasets in a ratio 67/33. We evaluate each test instance type and compare the result with the actual type. The mean classification accuracy in this problem is approximately 96%. 

```
node examples/getAccuracy.js 'iris.csv' ['type']
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
npm install gk-knn
```

Or if you prefer yarn:
```
yarn add gk-knn
```

At present, the published version of gk-knn 1.0.3

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

