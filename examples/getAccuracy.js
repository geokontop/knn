const knn = require('../index')

if(process.argv[2]){
    filename = process.argv[2]
} else {
    filename = 'iris.csv'
}

if(process.argv[3]){
    except = process.argv[3]
} else {
    except = ['type']
}


knn.app.getAccuracy(filename, except, (res)=>{
    console.log('Accuracy ', res)
});

