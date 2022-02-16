module.exports = {
    get: function (con, callback) {
        con.query("SELECT * FROM files;", callback)
    },

    getById: function (con, id, callback) {
        con.query(`SELECT * FROM files WHERE id_file=${id}`, callback)
    },

    create: function (con, file_name, callback) {
        con.query(`INSERT INTO files(file_name) VALUES ("${file_name}")`, callback
        )
    },

    update: function (con, id, data, callback) {
        con.query(`
        UPDATE files 
        SET file_name=?
        WHERE id_file=?;
        `, [data.file_name, id], callback)
    },

    delete: function (con, id, callback) {
        con.query(`DELETE FROM files WHERE id_file=${id}`, callback)
    }
}