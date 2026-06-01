# How to Run the Project

## 1. Run Frontend

Open a terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

---

## 2. Run Backend

Open another terminal and navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm run dev
```

or

```bash
npm start
```

Expected output:

```text
MongoDB Connected Successfully
Server running on port 5000
```

The backend server will run at:

```text
http://localhost:5000
```

---

## 3. Run Database (MongoDB)

Open a new terminal and start MongoDB Shell:

```bash
mongosh
```

Switch to the project database:

```javascript
use foodordering
```

Show all collections:

```javascript
show collections
```

View all orders:

```javascript
db.orders.find().pretty()
```

---

# Project Features

* View food items
* Add items to order
* Display order summary
* Calculate total bill
* Place order
* Store orders in MongoDB
* Responsive two-column layout

  * Food Menu on the left
  * Order Summary on the right

---

# Project Structure

```text
food-ordering-system
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── node_modules
│
├── backend
│   ├── models
│   │   └── Order.js
│   ├── server.js
│   ├── package.json
│   └── node_modules
│
└── README.md
```

---

# Database Information

Database Name:

```text
foodordering
```

Collection Name:

```text
orders
```

---
