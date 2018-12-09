
const knn = require('../knn');
const helpers = require('../helpers');

function getType(filename, testInstance, except, k, callback){
    helpers.csvtojsonDataset(filename, (labels, dataSet)=>{
        knn.getNeighbors(dataSet, testInstance, except, k, (testType)=>{
            callback(testType)
        });
    });
}
module.exports = getType