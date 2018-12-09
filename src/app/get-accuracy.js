
const knn = require('../knn');
const helpers = require('../helpers');

function getAccuracy(filename, except, callback){
    helpers.csvtojsonTrainTestSet(filename,0.67, (labels, trainSet, testSet)=>{

        knn.getAccuracy(trainSet, testSet, except, 3, 'type',(res)=>{
            callback(res)
        })
    })
}

module.exports = getAccuracy
