var connection = require('./connection.js');

var orm = {
    selectAll: function (tableInput, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function (table, columns, values, callback) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [table, columns, values], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function (table, set, condition, callback) {
        var queryString =
            "UPDATE burgers SET devoured = false where id = 1";

        connection.query(queryString,
            function (err, result) {
                if (err) throw err;
                callback(result);
            }
        );
    }
};

module.exports = orm;