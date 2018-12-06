/*
 * Primary file for API
 *
 */

 // Dependencies
 const knn = require('./knn/knn');

// knn.csvtojsonDatasets('iris.csv', 0.67, (labels,trainDataset, testDataset)=>{
//     // console.log(trainDataset)
//     knn.getNeighbors(trainDataset,{ a: '6.1', b: '3.0', c: '4.9', d: '1.8', 
//         type: 'Iris-virginica' },['a','b','c','d'],3,(res)=>{
//             console.log(res)
            
//         })
// })

knn.csvtojsonDatasets('iris.csv', 0.67, (labels,trainDataset, testDataset)=>{
    // console.log(trainDataset)
    knn.getAccuracy(trainDataset,testDataset,['a','b','c','d'],7,'type',(res)=>{
            console.log(res)
        })
})


module.exports = knn;