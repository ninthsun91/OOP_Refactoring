import mysql from 'mysql2'
import env from '../../config.env';

const connection = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD
});

(async function() {
    console.log(env.DB_HOST);
    connection.query(
        `SHOW DATABASES LIKE '${env.DB_NAME}'`,
        (error, result) => {
            if (error) {
                console.error(error);
                connection.end();
            }
            if (!result.toString()) {
                connection.query(`CREATE DATABASE IF NOT EXISTS ${env.DB_NAME}`)
                console.log("CREATE DB");
            } else {
                connection.query(`DROP DATABASE ${env.DB_NAME}`)
                console.log("DROP DB");
                connection.query(`CREATE DATABASE IF NOT EXISTS ${env.DB_NAME}`)
                console.log("CREATE DB");
            }
            connection.end();
        }
    );
})();