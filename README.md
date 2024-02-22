
# Capstone Project - React Frontend


## Technologies Used

- **Frontend Framework:** React.js
- **Styling:** CSS
- **HTTP Client:** Axios

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  \`\`\`sh
  npm install npm@latest -g
  \`\`\`

### Running the Application

1. To start the application in development mode, run:
   \`\`\`sh
   npm start
   \`\`\`
2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

### Register User

- Navigate to the \`/register\` route in the application.
- Fill in the registration form with your full name, email, and password.
- Submit the form. The application will communicate with the backend to register the user.

### Login User

- Navigate to the \`/login\` route in the application.
- Enter your registered email and password.
- Submit the form. Upon successful authentication, the application will log you in.




## Fetching Products

### Request

To fetch the list of all products:

\`\`\`javascript
axios.get('https://dummyjson.com/products');
\`\`\`

### Response

The response is a JSON object containing an array of products. Each product object includes:

- \`id\` (Number): Unique identifier for the product.
- \`title\` (String): Name of the product.
- \`description\` (String): Detailed description of the product.
- \`price\` (Number): Price of the product.
- \`thumbnail\` (String): URL to the product's thumbnail image.

Example response for a single product:

\`\`\`json
{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
}
\`\`\`

## Displaying Product Details

To display details of a specific product, a request is made to the API using the product's ID:

### Request

\`\`\`javascript
axios.get('https://dummyjson.com/products/{id}');
\`\`\`

Replace \`{id}\` with the actual product ID.

### Response

The response for this request is a JSON object containing detailed information about the product, similar to the example shown above.

## Implementation

The application consists of two main components:

- \`Products\`: Fetches and displays a list of all products.
- \`ProductDetails\`: Fetches and displays details for a single product.






Backend repository  : https://github.com/alanyaz/capstone_backend