const pool = require('./database');

function test (result) {
    pool.connect(function(err, client, done) {
        if (err) 
            result(err);
        else {
            client.query(`SELECT * FROM users;`, function(err,results) {
                done();
                if (err)
                    result(err);
                else
                    result(results.rows);        
            });
        };
    });
};

module.exports = {
    test,
};