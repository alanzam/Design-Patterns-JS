class DbConnection {
    constructor() {
        this.Connstring = "connection1";
        this.connected = false;
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
