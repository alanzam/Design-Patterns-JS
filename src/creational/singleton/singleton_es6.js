class DbConnection {
    constructor() {
        if (typeof DbConnection.instance === 'object') {
            return DbConnection.instance;
        }
        this.Connstring = "connection1";
        this.connected = false;
        DbConnection.instance = this;
        return this;
    }

    getStatus() {
      return this.connected;
    }

    connect() {
      this.connected = true;
    }

    changeConnection(connString) {
      this.Connstring = connString;
    }

    getConnection() {
      return this.Connstring;
    }

}

export default DbConnection;
