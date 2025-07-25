# API Documentation

## Authentication

### `POST /login`
- **Description:** User login.
- **Body:**  
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:** JWT token or error.

---

## Users

| Method | Endpoint                | Description           | Auth Required |
|--------|-------------------------|-----------------------|--------------|
| GET    | `/users`                | Get all users         | Yes          |
| POST   | `/users/create`         | Create a new user     | Yes          |
| GET    | `/users/:id`            | Get user by ID        | Yes          |
| PUT    | `/users/:id/update`     | Update user by ID     | Yes          |
| DELETE | `/users/:id/delete`     | Delete user by ID     | Yes          |

---

## Rooms

| Method | Endpoint                | Description           | Auth Required |
|--------|-------------------------|-----------------------|--------------|
| GET    | `/rooms`                | Get all rooms         | Yes          |
| POST   | `/rooms/create`         | Create a new room     | Yes          |
| GET    | `/rooms/:id`            | Get room by ID        | Yes          |
| PUT    | `/rooms/:id/update`     | Update room by ID     | Yes          |
| DELETE | `/rooms/:id/delete`     | Delete room by ID     | Yes          |

---

## Sessions

| Method | Endpoint                    | Description               | Auth Required |
|--------|-----------------------------|---------------------------|--------------|
| GET    | `/sessions`                 | Get all sessions          | Yes          |
| POST   | `/sessions/create`          | Create a new session      | Yes          |
| GET    | `/sessions/:id`             | Get session by ID         | Yes          |
| PUT    | `/sessions/:id/update`      | Update session by ID      | Yes          |

---

**Note:**  
- All endpoints except `/login` require authentication (JWT or session).
- Error handling is applied to all routes.
- Replace `:id` with the actual resource ID.