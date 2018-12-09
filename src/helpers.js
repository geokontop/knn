
 // Dependencies
 var path = require('path');
 var fs = require('fs');
 const readline = require('readline');
 
// Container
const helpers = {};

// Base directory of the csv folder
helpers.baseDir = path.join(__dirname,'/../data/');

// Read csv to create labels, trainSet and testSet
helpers.csvtojsonTrainTestSet=(filename, limit, callback)=>{
    const trainDataset = [];
    const testDataset = [];

    const rl = readline.createInterface({
        input: fs.createReadStream(helpers.baseDir+filename),
        crlfDelay: Infinity
    });
    
    let i=0;
    let labels={};
    
    rl.on('line', (line) => {
        if(i === 0){
            labels = line.split(',');
        }else{
            const item = line.split(',');
            const temp = {};
            for(let val in labels){
                temp[labels[val]] = item[val];
            }
            if(Math.random()<limit){
                trainDataset.push(temp);
            }else{
                testDataset.push(temp);
            }
        }
        i++;
    }).on('close',()=>{
        callback(labels, trainDataset, testDataset);
    });
}

// Read csv to create labels, trainSet and testSet
helpers.csvtojsonDataset=(filename, callback)=>{

    const rl = readline.createInterface({
        input: fs.createReadStream(helpers.baseDir+filename),
        crlfDelay: Infinity
    });
    
    let i=0;
    let labels={};
    const jsonArr=[];
    
    rl.on('line', (line) => {
        if(i === 0){
            labels = line.split(',');
        }else{
            const item = line.split(',');
            const temp = {};
            for(let val in labels){
                temp[labels[val]] = item[val];
            }
            
            jsonArr.push(temp);
        }
        i++;
    }).on('close',()=>{
        callback(labels, jsonArr);
    });
}

module.exports = helpers;