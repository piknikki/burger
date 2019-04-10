


var orm = require("../config/orm");

var burger = {
    all: function(callback) {
        orm.all("burgers", function(res) {
            callback(res);
            // console.log("this is the result of the selectall in the controller " + res)
        })
    },
    create: function(cols, vals, callback) {
        orm.create("burgers", cols, vals, function(res) {
            callback(res);
            console.log("this is the result of the insertOne in the controller " + res)
        })
    },
    update: function(objColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, function(res) {
            callback(res);
        })
    },
    delete: function(condition, callback) {
        orm.delete("burgers", condition, function(res) {
            callback(res);
        })
    }

}

module.exports = burger;