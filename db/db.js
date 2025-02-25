import mysql from 'mysql2/promise';

async function createConnection() {
    try {
       const connection = await mysql.createConnection({
    host:'srv1752.hstgr.io',
    user: 'u607585719_class',
    password:'Classhos@79',
    database:'u607585719_class',
    waitForConnections: true,
    connectionLimit: 10,  
    queueLimit: 0,
    connectTimeout: 10000  // 10 seconds
});

        console.log('Database connected successfully');
        return connection;
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}

const connection = await createConnection();
export default connection;
