# Shopping API (Back-End)

This application is built using [Node.js](https://nodejs.org/en/) and [TypeScript](https://www.typescriptlang.org/) with the [Nest.js framework](https://nestjs.com/). It provides a comprehensive API for managing shopping-related operations.

## Features

This project offers a simple yet functional API for purchasing products. The primary features include:

- **Product Purchase**: Users can purchase a product using the API.

  - **Endpoint**: `/api/v1/product/${productId}/purchase`
  - **HTTP Method**: POST
  - **Input Parameters**:
    - `productId`: The ID of the product to purchase.
  - **Input Body**:
    - `quantity`: The quantity of the product to purchase.
    - `paymentGateway`: The selected payment gateway (melat, saman).

  - **Response**: The API provides a response indicating whether the payment process was successful or not.

## Predefined Data

For ease of testing and development, the project includes predefined data for both products and users. These data entries are automatically loaded into the database during the bootstrap of the project.
## How to Run the Application

To run the Shopping API, follow these steps:

1. Clone the repository: git clone https://github.com/ho3einmolavi/Quarkino

2. Navigate to the project directory: cd shopping_api/

3. Run the application using Docker Compose: docker-compose up -d --build

The application should now be running and accessible.

## Database

The application uses [MongoDB](https://www.mongodb.com/) as its database. MongoDB is run and managed via Docker, ensuring easy setup and portability.

## API Documentation

API documentation can be accessed through Swagger UI. Simply open the following URL in your browser: http://localhost:3000/swagger

This will provide a user-friendly interface to explore and test the API endpoints.

## Deployment

For production deployment, it is recommended to use a process manager like [PM2](https://pm2.keymetrics.io/) to manage and keep the application online. Ensure that your environment variables and configuration are properly set for production use.

## Contributing

Contributions to this project are welcome. Feel free to open issues or submit pull requests to improve the application.

## License

This project is licensed under the [MIT License](LICENSE).
