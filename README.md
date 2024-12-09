# SpamFinder Backend

## 1. Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or later)
- **MongoDB** (running locally or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Postman** or any API testing tool (optional but helpful)

## 2. Installation and Setup

### Clone or Extract Project
Unzip the provided `.zip` file or clone the project repository into your system.

### Install Dependencies
Open a terminal in the project folder and run:
BEFORE INSTALL MAKE SURE DELETE THE NODE_MODULES/ FOLDER
```bash
npm install
```

#### Environment Variables
Create a `.env` file in the project root and add the following variables:
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/your_database_name
JWT_SECRET=your_jwt_secret
```

### run
```bash
node server.js
```
