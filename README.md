# lelangbuana-backend
Back End repository for Lelangbuana project

## Database Design (Main Tables)
![Lelangbuana Database Design](./lelangbuana-database-design.png "Lelangbuana Database Design")

## REST API Endpoints

| Endpoint          | HTTP   | Description              |
| ------------------| ------ | -------------------------|
| `/`               | GET    | Get root API             |
| `/users`          | GET    | Get all users            |
| `/users/id/:id`   | GET    | Get one user by id       |
| `/users/:username`| GET    | Get one user by username |
| `/users/search`   | GET    | Search user by username  |
| `/users`          | POST   | Create new user          |
| `/users/:id`      | PUT    | Update one user by id    |
| `/users/:id`      | DELETE | Delete one user by id    |