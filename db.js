const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://bradatec_db_user:kG9BJQ1n2L2hEXmwwBDDZHYrpp9fcerW@dpg-d28e2vc9c44c73acreg0-a/bradatec_db', {
    logging: false,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;
