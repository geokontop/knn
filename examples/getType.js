const knn = require('../index')

// knn.app.getType('iris.csv', {'sepal_length':1,'sepal_width':2,'petal_length':3,'petal_width':4}, ['sepal_length','sepal_width','petal_length','petal_width'], 1);

if(process.argv[2]){
    filename = process.argv[2]
} else {
    filename = 'iris.csv'
}

if(process.argv[3]){
    values = JSON.parse(process.argv[3]);
} else {
    values = {'sepal_length':1,'sepal_width':2,'petal_length':3,'petal_width':4};
}

if(process.argv[4]){
    k = Number(process.argv[4]);
} else {
    k = 1
}

if(process.argv[5]){
    except = process.argv[5];
} else {
    except = ['type']
}



knn.app.getType(filename, values, except, k, (res)=>{
    console.log(res);
});