import mysql from "mysql2";
import dotenv from "dotenv"

dotenv.config()

const MODE = process.env.MODE;
switch (MODE) {
    case "local":
        var [ DB_HOST, DB_NAME, DB_USER, DB_PASSWORD ] = 
            [ "127.0.0.1", "OOP", "root", "1234" ];
        break;

    case "aws":
        var { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
        break;
}


// const DB_HOST = process.env.DB_HOST || "127.0.0.1";
// const DB_NAME = process.env.DB_NAME || "OOP";
// const DB_USER = process.env.DB_USER || "root";
// const DB_PASSWORD = process.env.DB_PASSWORD || "1234";

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD
});

(async function() {
    console.log(DB_HOST);
    connection.query(
        `SHOW DATABASES LIKE '${DB_NAME}'`,
        (error, result) => {
            if (error) {
                console.error(error);
                connection.end();
            }
            if (!result.toString()) {
                connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`)
                console.log("CREATE DB");
            } else {
                connection.query(`DROP DATABASE ${DB_NAME}`)
                console.log("DROP DB");
                connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`)
                console.log("CREATE DB");
            }
            connection.end();
        }
    );
})();
