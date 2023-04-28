import { createConnection, Connection } from "mysql2/promise"

class Database {
    private static _connection: Connection

     async get(): Promise<Connection> {
         if (Database._connection) return Database._connection
         return Database._connection = await createConnection({
             host: "localhost",
             user: "root",
             password: "",
             database: "project_db"
         })
     }
}

export default Database