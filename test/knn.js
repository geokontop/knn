/*
 * Unit tests
 *
 */

// Dependencies
// const exampleAccuracy = require('../examples/getAccuracy')
// const exampleType = require('../examples/getType')
const helpers = require('../src/helpers')
const knn = require('../src/knn')
const getAccuracy = require('../src/app/get-accuracy')
const getType = require('../src/app/get-type')
const assert = require('assert')

describe('knn', function() {
  describe('Euclidean distance function', function() {
    const data1 = {'sepal_length':1,'sepal_width':2,'petal_length':3,'petal_width':4, type: 'Iris-virginica'};
    const data2 = {'sepal_length':2,'sepal_width':1,'petal_length':4,'petal_width':3, type: 'Iris-virginica'};
    const except = ['type'];
    it('should return distance 2 between items 1,2,3,4 and 2,1,4,3', function() {
      assert.equal(knn.euclideanDistance(data1,data2,except), 2);
    });
  }); 
  describe('count votes and classify k=6', function() {
    const neighborhood = [{"dataSet": {type:'a'}, "dist":5},
                      {"dataSet": {type:'b'}, "dist":6},
                      {"dataSet": {type:'b'}, "dist":7},
                      {"dataSet": {type:'a'}, "dist":8},
                      {"dataSet": {type:'a'}, "dist":9},
                      {"dataSet": {type:'c'}, "dist":10}];
    it('should return a as majority type', function() {
      assert.equal(knn.classify(neighborhood), 'a');
    });
  }); 
  describe('count votes and classify k=3', function() {
    const neighborhood = [{"dataSet": {type:'a'}, "dist":5},
                      {"dataSet": {type:'b'}, "dist":6},
                      {"dataSet": {type:'b'}, "dist":7}];
    it('should return b as majority type', function() {
      assert.equal(knn.classify(neighborhood), 'b');
    });
  }); 
  describe('get neighbors k=3', function() {
    const dataSet = [
                      {"d1": 4, "d2":4, "type":'a'},
                      {"d1": 1, "d2":5, "type":'a'},
                      {"d1": 2, "d2":3, "type":'c'},
                      {"d1": 3, "d2":1, "type":'c'},
                      {"d1": 5, "d2":2, "type":'c'}
                    ];
    const testInstance = {"d1": 3.5, "d2": 3.5};
    const except = ['type'];
    k = 3;
    it('should return type c', function(done) {
      knn.getNeighbors(dataSet, testInstance, except, k, (res)=>{
        assert.equal(res, 'c');
        done();
      })
    });
  }); 
  describe('get accuracy from iris.scv', function() {
    const filename = 'iris.csv';
    const except = ['type'];
    k = 3;
    it('should return accuracy greater than 88%', function(done) {
      getAccuracy(filename, except, (res)=>{
        assert.ok(res > 88);
        done();
      });
    });
  }); 
  describe('get type of item in iris.csv', function() {
    const filename = 'iris.csv';
    const testInstance = {"sepal_length":1,"sepal_width":2,"petal_length":3,"petal_width":4};
    const except = ['type'];
    kapa = 1;
    it('should return the {"sepal_length":1,"sepal_width":2,"petal_length":3,"petal_width":4} type as ', function(done) {
      getType(filename, testInstance, except, kapa, (res)=>{
        assert.equal('Iris-virginica' , res);
        done();
      });
    });
  }); 
});
