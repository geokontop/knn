/*
 * Primary file 
 *
 */

const core = require('./src/knn');

const app = {
    getAccuracy: require('./src/app/get-accuracy'),
    getType: require('./src/app/get-type')
};
 
const knn = {
    core: core,
    app: app
  };

  
  
  if (typeof window !== 'undefined') {
    window.knn = knn;
  }
  if (typeof self !== 'undefined') {
    self.knn = knn;
  }
  if (typeof module !== 'undefined') {
    module.exports = knn;
  }
  