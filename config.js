const deployed_url = 'https://thisissumin.store';
const local_url = 'http://localhost:3000';

const local_db = {
    host: 'localhost',
    user: 'root',
    password: 'typuz123',
    database: 'ftd',
    port: 3306,
    multipleStatements : true
};

const ec2_db = {
    host: 'localhost',
    user: 'admin',
    password: 'canadasumin',
    port: 3306,
    database: 'sumin_in_canada',
    multipleStatements : true
};
const LOCAL = 'local';
const EC2 = 'ec2';

const setting = EC2;

const config = {
    db: setting == LOCAL? local_db : ec2_db,
    url: setting == LOCAL? local_url : deployed_url
};

module.exports = config;