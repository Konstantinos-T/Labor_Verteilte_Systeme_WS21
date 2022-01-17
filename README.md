**Verwendet wird eine Postgres Datenbank diese sollte (wenn ohne docker) installiert und richtig aufgesetzt werden.**

1. Postgres herunterladen und installieren
2. Das Terminal aufrufen und folgende Befehle eingeben.
3. **psql --version** checken ob diese installiert ist.
4. **psql postgres** in die default Datenbank einloggen.
5. postgres# **\conninfo** Verbindung und User herausfinden.
6. postgres# **CREATE ROLE my_user WITH LOGIN PASSWORD 'my_password';** einen Benutzer mit Passwort erstellen.
7. ALTER ROLE my_user CREATEDB;
8. GRANT pg_read_all_data TO my_user;
9. GRANT pg_write_all_data TO my_user;
10. **postgres=# \q** postgres verlassen.
11. **psql -d postgres -U my_user** einloggen.
12. **CREATE DATABASE shoppinlistdb;** erstellt eine Datenbank mit dem Namen shoppinglistdb.
13. **\c shoppinlistdb** Datenbank wechseln.
14. **CREATE TABLE items (  ID SERIAL PRIMARY KEY,  name VARCHAR(30), quantity INT, complete BOOLEAN, created DATE );**

Nach dieser Datenbank Konfiguration kann der Code in shoppinglist auch ausgeführt werden.

# **Wie man diese Anwendung ausführt.**

**Repo klonen.**

- git clone https://github.com/Konstantinos-T/Labor_Verteilte_Systeme_WS21.git

**Mit dem Terminal in das Verzeichnis shoppinglist und Befehl ausführen:**

**Shoppinglist ohne Docker ausführen**

- npm run start

**Shoppinglist mit Docker ausführen**

- docker-compose up -d

**Check die laufenenden Container mit**

-Docker ps

# **API-Endpoints**

## GET /items

curl -X GET 'localhost:3000/items'

## GET /items/:id

curl -X GET 'localhost:3000/items/:id'

## POST /items

curl -X POST -d "name=example" -d "quantity=100" -d "complete=false" 'localhost:3000/items'

## PUT /items/:id

curl -X PUT -d "name=example2" -d "quantity=10" -d "complete=true" localhost:3000/items/:id'

## DELETE /items/:id

curl -X DELETE 'localhost:3000/items/:id'
