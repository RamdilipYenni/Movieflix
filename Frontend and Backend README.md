# Movieflix
assignment for the algo based placement 

# MovieFlix Frontend

MovieFlix is a responsive movie dashboard built with **React + Vite**. It fetches movie data from a Spring Boot backend and allows users to search and filter movies by genre.

---

## Features

- Search movies by title
- Filter movies by genre
- REST API integration with backend
- Clean and responsive UI with Tailwind CSS
- Fast development with Vite

---

## Tech Stack

| Technology     | Purpose                      |
|----------------|------------------------------|
| React          | UI rendering                 |
| Vite           | Fast build tool              |
| Axios          | REST API calls               |
| Tailwind CSS   | Styling and layout           |
| JavaScript     | Application logic            |

---

Folder structure 
src/
├── components/
│   └── MovieCard.jsx
├── pages/
│   └── Home.jsx
├── services/
│   └── movieService.js
├── App.jsx
├── main.jsx

Endpoints used:
- GET /movies — fetch all movies
- GET /movies?search=title — search by title
- GET /movies?genre=genre — filter by genre
- GET /movies/{id} — fetch movie by ID

## Setup Instructions

### 1.Clone the Repository

```bash
git clone https://github.com/your-username/movieflix-frontend.git
cd movieflix-frontend
````
### 2.Install Dependencies
npm install

### 3.Start Development Server
npm run dev

### 4.Visit at app http://localhost:5173


---------------------------------------------------------------------------------------------------------------------------

# backend
Backend API

 Tech Stack

| Technology     | Purpose                      |
|----------------|------------------------------|
| Java           | Core programming language    |
| Spring Boot    | Backend framework            |
| MongoDB        | NoSQL database               |
| Maven          | Build and dependency manager |
| Spring Data    | MongoDB repository support   |

Make sure your backend is running at http://localhost:8080.

Folder Structure
src/
└── main/
    └── java/com/movieflix/
        ├── model/
        │   └── Movie.java
        ├── repository/
        │   └── MovieRepository.java
        ├── service/
        │   └── MovieService.java
        ├── controller/
        │   └── MovieController.java
        └── MovieflixApplication.java

mongodb host
mongodb://localhost:27017
Create a database named movieflix and a collection named movies.


to run the application
./mvnw spring-boot:run

Json file
{
  "_id": "tt0133093",
  "title": "The Matrix",
  "year": 1999,
  "genre": ["Action", "Sci-Fi"],
  "rating": 8.7,
  "plot": "A hacker discovers reality is a simulation.",
  "posterUrl": "https://example.com/matrix.jpg"
}

Author Developed by Ram Dilip Yenni
