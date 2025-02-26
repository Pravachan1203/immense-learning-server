import mysql from 'mysql2/promise';

async function createConnection() {
    try {
        const connection = await mysql.createConnection({
            host: 'srv1752.hstgr.io',
            user: 'u607585719_class',
            password: 'Classhos@79',
            database: 'u607585719_class'
        });
        console.log('Database connected successfully');
        return connection;
    } catch (error) {
        console.error('Database connection failed:', error);
        return null;  // Prevents abrupt termination
    }
}

const connection = await createConnection();
if (!connection) process.exit(1);

export default connection;
