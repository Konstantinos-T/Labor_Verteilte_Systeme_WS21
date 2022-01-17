# **Wie man diese Anwendung ausführt.**

**Als erstes Repo klonen.**

- git clone https://gitlab.hs-esslingen.de/kotsit00/verteilte_systeme_ws21.git

**Als nächstes geht man mit dem Terminal in das Verzeichnis shoppinglist und führt den Docker Befehl aus:**

- docker-compose up -d

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
