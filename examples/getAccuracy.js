const knn = require('../index')

let filename = 'iris.csv'
let except = ['type']

if(process.argv[2]){
    filename = process.argv[2]
} 

if(process.argv[3]){
    except = process.argv[3]
} 

knn.app.getAccuracy(filename, except, (res)=>{
    console.log('Accuracy ', res)
});

