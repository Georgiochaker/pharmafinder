# PharmaFinder Authentication & User Management API

## Endpoints

### 1. Register User
- **POST** `/api/auth/register`
- **Body:**
```
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword",
  "role": "patient" // or "admin", "pharmacy"
}
```
- **Response:**
```
{
  "id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "patient"
}
```

### 2. Login
- **POST** `/api/auth/login`
- **Body:**
```
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```
- **Response:**
```
{
  "token": "JWT_TOKEN",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "patient"
  }
}
```

### 3. Get Current User
- **GET** `/api/auth/me`
- **Headers:**
  - `Authorization: Bearer JWT_TOKEN`
- **Response:**
```
{
  "id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "patient"
}
```

### 4. List All Users (Admin Only)
- **GET** `/api/auth/users`
- **Headers:**
  - `Authorization: Bearer JWT_TOKEN` (must be admin)
- **Response:**
```
[
  {
    "id": "...",
    "name": "Admin",
    "email": "admin@pharma.com",
    "role": "admin"
  },
  ...
]
```

## Example Requests

### Register
```
curl -X POST http://localhost:3001/api/auth/register \
  -H 'Content-Type: application/json' \
  -d '{"name":"Admin","email":"admin@pharma.com","password":"adminpass","role":"admin"}'
```

### Login
```
curl -X POST http://localhost:3001/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"admin@pharma.com","password":"adminpass"}'
```

### Get Current User
```
curl -X GET http://localhost:3001/api/auth/me \
  -H 'Authorization: Bearer JWT_TOKEN'
```

### List All Users (Admin Only)
```
curl -X GET http://localhost:3001/api/auth/users \
  -H 'Authorization: Bearer JWT_TOKEN'
```

## Notes
- Replace `JWT_TOKEN` with the token received from the login endpoint.
- Roles supported: `patient`, `pharmacy`, `admin`.
- Only admins can access `/api/auth/users`.
- All endpoints return JSON.

---

This documentation is ready for your team to integrate the frontend and test authentication/user management. If you need further examples or want to automate tests, let me know!
