# Users CRUD with Node.js

Hello devs👋, how are you? I came here to show my project, a user CRUD made with Node.js. I decided to create this project to remember some Node.js concepts and practice my skills 🤗

<hr/>

## 📦Install
Before you start, you need to have Node.js and npm or yarn (Node.js package manager) installed on your machine. Then clone this repository and, inside the project folder, run the following command to install the dependencies:
  
```bash
yarn install
```

```bash
npm install
```

## 🎲Run the app
Now that we have all the project dependencies installed, make sure that: <br/>

-  The project uses the ORM the prism that connects with the mongodb so it is necessary to edit the DATABASE_URL with your connection URL inside the .env.example
- To execute, use the command:

```bash
yarn start:dev
```

```bash
npm run start:dev
```

The API will be available from http://localhost:3000 or http://localhost:3333 depending on the port configuration defined in the .env.example file

## **Routes**

## `GET /users`

Returns a list of all registered users.

### Response

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Ok here is the list of users",
  "data": [
  "id": "6439f413df01d602184fab76",
  "name": "user test",
  "email": "user@gmail.com"
  ]
}
```

## `POST /users`

Create a new user

### Example of request

```json
{
  "name": "user test",
  "email": "usertest@gmail.com"
}
```

### Response

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Congratulations, your user has been successfully registered!",
  "data": {
  "id": "6439f413df01d602184fab76",
  "name": "user test",
  "email": "usertest@gmail.com"
  }
}
```

## `PUT /users/:id`

Updates an existing user by its ID.

### Example of request

```json
{
  "name": "user test modified",
  "email": "usertestmodified@gmail.com"
}
```
It is important to insert the user id in the url parameter!

### Response

```json
{
  "statusCode": 200,
  "success": true,
  "message": "User updated successfully",
  "data": {
  "id": "6439f413df01d602184fab76",
  "name": "user test modified",
  "email": "usertestmodified@gmail.com"
  }
}
```

## `DELETE /users/:id`

Delete the user

### Response

```json
{
  "statusCode": 200,
  "success": true,
  "message": "User deleted successfully",
  "data": [
  "id": "6439f413df01d602184fab76",
  "name": "user test",
  "email": "user@gmail.com"
  ]
}
```

<hr/>

## 🛠Technologies and tools used

- Node.s
- Typescript
- Prisma ORM (for MongoDB connection)
- Jest (for automated testing)

## Conclusion

This is my API, built in Node.js where I practiced some Node.js concepts and tested Prisma(ORM) to connect to a database, which I chose to be MongoDB. Possible updates may occur in the project, as I can bring improvements and more functionality to the API as I continue to develop it. So see you soon.

💜 Built by Leonardo
