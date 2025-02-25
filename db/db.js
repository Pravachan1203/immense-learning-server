import mysql from 'mysql2/promise';

async function testConnection() {
    try {
        const conn = await mysql.createConnection({
            host: 'srv1752.hstgr.io',
            user: 'u607585719_class',
            password: 'Classhos@79',
            database: 'u607585719_class'
        });
        console.log('Database connected successfully!');
        await conn.end();
    } catch (error) {
        console.error('Connection failed:', error);
    }
}

testConnection();
