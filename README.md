# Recipes App

A CRUD (Create, Read, Update, Delete) application for managing recipes. Built using Node.js, Express.js, and MongoDB (Mongoose), the app provides RESTful API endpoints for recipe management.

## Features

- **Create a Recipe**: Add new recipes with details like name, ingredients, instructions, and category.
- **Retrieve Recipes**: Fetch all recipes or retrieve a specific recipe by its ID.
- **Update a Recipe**: Modify recipe details by ID.
- **Delete a Recipe**: Remove a recipe by its ID.
- **Validation and Error Handling**: Ensures proper data input and provides meaningful error messages.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ORM
- **API Testing**: Postman
- **Environment Variables**: Managed with dotenv

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone <repository_url>

    cd RecipesAppMongo
    npm install
    MONGODB_URI=mongodb+srv://koushikraghavan:<db_password>@guvib6.qwbz0.mongodb.net/
    PORT=3000

    node index.js

    Access the API at http://localhost:3000/api/recipes


# API Endpoints
## Base URL: http://localhost:3000/api/recipes

### 1. Create a Recipe

* POST /
* Request Body (JSON):

{
  "name": "Spaghetti Carbonara",
  "ingredients": ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Pepper"],
  "instructions": "Cook spaghetti. Mix eggs and cheese. Cook pancetta. Combine all.",
  "category": "Italian"
}
* Response:

{
  "_id": "631f1c8f4a8e4a9e8c12b97b",
  "name": "Spaghetti Carbonara",
  "ingredients": ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Pepper"],
  "instructions": "Cook spaghetti. Mix eggs and cheese. Cook pancetta. Combine all.",
  "category": "Italian",
  "createdAt": "2024-11-15T14:30:00.000Z",
  "__v": 0
}
### 2. Retrieve All Recipes

* GET /
* Response:

[
  {
    "_id": "631f1c8f4a8e4a9e8c12b97b",
    "name": "Spaghetti Carbonara",
    "ingredients": ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Pepper"],
    "instructions": "Cook spaghetti. Mix eggs and cheese. Cook pancetta. Combine all.",
    "category": "Italian",
    "createdAt": "2024-11-15T14:30:00.000Z",
    "__v": 0
  }
]
### 3. Retrieve a Recipe by ID

* GET /:id
* Response:

{
  "_id": "631f1c8f4a8e4a9e8c12b97b",
  "name": "Spaghetti Carbonara",
  "ingredients": ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Pepper"],
  "instructions": "Cook spaghetti. Mix eggs and cheese. Cook pancetta. Combine all.",
  "category": "Italian",
  "createdAt": "2024-11-15T14:30:00.000Z",
  "__v": 0
}
### 4. Update a Recipe

* PUT /:id
* Request Body (JSON):

{
  "name": "Updated Recipe Name",
  "instructions": "Updated instructions."
}

* Response:

{
  "_id": "631f1c8f4a8e4a9e8c12b97b",
  "name": "Updated Recipe Name",
  "ingredients": ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Pepper"],
  "instructions": "Updated instructions.",
  "category": "Italian",
  "createdAt": "2024-11-15T14:30:00.000Z",
  "__v": 0
}
### 5. Delete a Recipe

* DELETE /:id
* Response:

{
  "message": "Recipe deleted successfully"
}


### Example Request in Postman
* Method: GET
* URL: http://localhost:3000/api/recipes
* Headers:
* Content-Type: application/json

### Example Response

  {
    "_id": "631f1c8f4a8e4a9e8c12b97b",
    "name": "Spaghetti Carbonara",
    "ingredients": ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Pepper"],
    "instructions": "Cook spaghetti. Mix eggs and cheese. Cook pancetta. Combine all.",
    "category": "Italian",
    "createdAt": "2024-11-15T14:30:00.000Z",
    "__v": 0
  }
  {
    "_id": "631f1d5a4a8e4a9e8c12b97c",
    "name": "Chicken Curry",
    "ingredients": ["Chicken", "Curry Paste", "Coconut Milk", "Onions"],
    "instructions": "Cook onions. Add chicken. Stir in curry paste and coconut milk. Simmer.",
    "category": "Indian",
    "createdAt": "2024-11-15T14:45:00.000Z",
    "__v": 0
  }


[POSTMAN API Documentation URL: ](https://documenter.getpostman.com/view/38564233/2sAYBPkZKC#a6521115-bfec-4fea-8eb8-75a6dc19c513)