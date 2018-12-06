/*
 * Getting the data from a csv file, forming datasets, evaluating distances
 * 
 */

 // Dependencies
var path = require('path');
var fs = require('fs');
const readline = require('readline');

 // Container
 const knn = {};

 // Base directory of the csv folder
knn.baseDir = path.join(__dirname,'/../.data/');

// Read csv
knn.csvtojsonDatasets=(filename, limit, callback)=>{
    const trainDataset = [];
    const testDataset = [];

    const rl = readline.createInterface({
        input: fs.createReadStream(knn.baseDir+filename),
        crlfDelay: Infinity
    });
    let i=0;
    let labels={};
    const jsonArr=[];
    
    rl.on('line', (line) => {
        if(i === 0){
            labels = line.split(',');
        }else{
            item = line.split(',');
            const temp = {};
            for(let val in labels){
                temp[labels[val]] = item[val];
            }
            if(Math.random()<limit){
                trainDataset.push(temp);
            }else{
                testDataset.push(temp);
            }
            jsonArr.push(temp);
        }
        i++;
    }).on('close',()=>{
        callback(labels, trainDataset, testDataset);
    });
}

// Get k neighbors in the training sample
knn.getNeighbors = (dataSet, testInstance, fields, k, callback)=>{
    distances = []
    // length =
    for(let x in dataSet){
        dist = knn.euclideanDistance(testInstance, dataSet[x], fields);
        distances.push({dataSet:dataSet[x], dist: dist})        
    }
    const distListed = distances.sort(function(a, b) {
        return a.dist - b.dist;
    });
    
    callback(knn.classify(distListed.slice(0,3)));
    
}

// Evaluate Euclidean distance
knn.euclideanDistance=(data1, data2, fields)=>{
    distance = 0;
    for(let field of fields){
        distance += Math.pow((data1[field]-data2[field]),2);
    }
    return Math.sqrt(distance);
}

knn.classify=(neighbors)=>{
    classVotes = {};
    for(let neighbor of neighbors){
        if(classVotes[neighbor.dataSet.type]){
            classVotes[neighbor.dataSet.type] += 1;
        }else{
            classVotes[neighbor.dataSet.type] = 1;
        }
    }
    const sortable = [];
    for (var type in classVotes) {
        sortable.push([type, classVotes[type]]);
    }

    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });

    return sortable[0][0];
}

knn.getAccuracy=(dataSet, testSet, fieldsTest, k, fieldType, callback)=>{
    correct = 0;
    wrong =0;
    // console.log(testSet)
    for(let testInstance of testSet){
        knn.getNeighbors(dataSet, testInstance, fieldsTest, k, (res)=>{
            if(res===testInstance[fieldType]){
                correct += 1;
            }else{
                wrong += 1;
            }
        });

    }
    callback(100*correct/(correct+wrong))
}


// Export module
module.exports = knn;
