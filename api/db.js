import mysql from "mysql";

export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"SQLhmtgl@467",
    database:"myblogs",
});