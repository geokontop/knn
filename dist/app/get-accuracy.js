
const knn = require('../knn');
const helpers = require('../helpers');

function getAccuracy(filename) {
    helpers.csvtojsonTrainTestSet(filename, 0.67, (labels, trainSet, testSet) => {
        knn.getAccuracy(trainSet, testSet, labels.slice(0, -1), 3, 'type', res => {
            console.log('Accuracy ', res);
        });
    });
}

module.exports = getAccuracy;
//# sourceMappingURL=get-accuracy.js.map