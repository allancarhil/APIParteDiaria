module.exports = {
    dialect: 'mssql',
    host: 'localhost',
    username:"sa",
    password: 'Prod@petra',
    database:'nodeSql2',
    define:{
        timestamps: true,
        underscored: true,
        freezeTableName: true
    }
};
