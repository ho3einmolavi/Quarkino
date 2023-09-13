# Shopping API (Back-End)

This application is built using [Node.js](https://nodejs.org/en/) and [TypeScript](https://www.typescriptlang.org/) with the [Nest.js framework](https://nestjs.com/). It provides a comprehensive API for managing shopping-related operations.

## Features

This project offers a simple yet functional API for purchasing products. The primary features include:

- **Product Purchase**: Users can purchase a product using the API.

  - **Endpoint**: `/api/v1/product/${productId}/purchase`
  - **HTTP Method**: POST
  - **Input Parameters**:
    - `productId`: The ID of the product to purchase. Just copy one of the product's ObjectId from mongoDB.
  - **Input Body**:
    - `quantity`: The quantity of the product to purchase.
    - `paymentGateway`: The selected payment gateway (melat, saman).

  - **Response**: The API provides a response indicating whether the payment process was successful or not.
  - **Authorization**: To use the API, users must provide a Bearer token for authorization. They can copy one of the user's ObjectId and use it as a Bearer token when making requests to the API.


## Predefined Data

For ease of testing and development, the project includes predefined data for both products and users. These data entries are automatically loaded into the database during the bootstrap of the project.

## How to Run the Application

To run the Shopping API, follow these steps:

1. Clone the repository: `git clone https://github.com/ho3einmolavi/Quarkino`

2. Navigate to the project directory: `cd shopping_api/`

3. Run the application using Docker Compose: `docker-compose up -d --build`

The application should now be running and accessible.

## API Documentation

API documentation can be accessed through Swagger UI. Simply open the following URL in your browser: `http://localhost:3000/swagger`

This will provide a user-friendly interface to explore and test the API endpoints.

## Database

The application uses [MongoDB](https://www.mongodb.com/) as its database. MongoDB is run and managed via Docker, ensuring easy setup and portability.
