
const knn = require('../knn');
const helpers = require('../helpers');

function getType(filename, testInstance, fields, k){
    helpers.csvtojsonDataset(filename, (labels, dataSet)=>{
        knn.getNeighbors(dataSet, testInstance, fields, k, (testType)=>{
            console.log(testType)
        });
    });
}
module.exports = getType