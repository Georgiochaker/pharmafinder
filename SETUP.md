
# Local Development Setup: MongoDB, Redis, and Node.js

## 1. MongoDB Setup

- Use Homebrew:
  ```sh
  brew tap mongodb/brew
  brew install mongodb-community@7.0
  brew services start mongodb-community@7.0
  ```
- To stop MongoDB:
  ```sh
  brew services stop mongodb-community@7.0
  ```

## 2. Connect to MongoDB

- Use the MongoDB shell:
  ```sh
  mongosh
  ```

## 3. Create Database and Collections

- In the shell, create your database and collections:
  ```js
  use pharmafinder
  db.createCollection('users')
  db.createCollection('pharmacies')
  db.createCollection('medications')
  db.createCollection('inventory')
  db.createCollection('medication_alternatives')
  ```


## 4. Redis Setup

### Install Redis (macOS)
- Use Homebrew:
  ```sh
  brew install redis
  brew services start redis
  ```
- Test connection:
  ```sh
  redis-cli ping
  # Should return: PONG
  ```


## 5. Node.js Setup

### Install Node.js (macOS)
- Use Homebrew or nvm:
  ```sh
  brew install node
  # or
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
  nvm install --lts
  ```
- Check version:
  ```sh
  node -v
  npm -v
  ```

### Install Project Dependencies
```sh
npm install
```


## 6. Environment Variables Example

Create a `.env.local` file in the project root:

```
# MongoDB
MONGODB_URI=mongodb://localhost:27017/pharmafinder

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# Node.js
NODE_ENV=development
PORT=3000
```

---

- Update credentials as needed.
- For production, use secure passwords and consider Docker for service management.
