# Users CRUD with Node.js

Hello devs👋, how are you? I came here to showcase my project, a user CRUD made with Node.js. I decided to create this project to update my Node.js concepts and practice my skills. I plan to bring more updates to the API to improve the performance of the project🤗.

## Install
Before you start, you need to have Node.js and npm or yarn (Node.js package manager) installed on your machine. Then clone this repository and, inside the project folder, run the following command to install the dependencies:
  
```bash
yarn install
```

```bash
npm install
```

## Run the app
Now that we have all the project dependencies installed, make sure that: <br/>

- The project uses the ORM the prism that connects with mongodb so it is necessary to create a DATABASE_URL inside an .env
- To execute, use the command:

```bash
yarn start:dev
```

The API will be available from http://localhost:3000 or http://localhost:3333, depending on the port configuration defined in the .env file. To run the tests on port 3333, just create an .env.test file and add the PORT variable with the value 3333.

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

## Technologies and tools used

- Node.s
- Typescript
- Prisma ORM (for MongoDB connection)
- Jest (for automated testing)

## Conclusion

This is a simple API, and there are still many functionalities to be added. However, I wanted to show you how the development of this project is going.


