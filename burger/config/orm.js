var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    
    return arr.toString();
};

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    
    return arr.toString();
};

var orm = {
    selectAll: function(whatToEat, cb) {
        var queryString = "SELECT * FROM " + whatToEat + ";";

        connection.query(queryString, function(err, result) {
            cb(result);
        })

    },

    add
}

module.exports = orm;