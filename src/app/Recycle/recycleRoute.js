module.exports = function(app){
    const recycle = require('./recycleController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 0. 테스트 API
    app.get('/app/recycle', recycle.getRecycle)

};
