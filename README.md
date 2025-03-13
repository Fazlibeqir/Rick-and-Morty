# Rick-and-Morty
This project is the front-end application built as part of the Software Engineer Intern Assignment for Pabau.

It is developed usint **React+Vite** to interact with tHe [Rick and Morty API](https://rickandmortyapi.com/graphql)  


## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm 

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Fazlibeqir/Rick-and-Morty.git
   cd Rick-and-Morty/app
   ```
2. Install Dependencies
   ```bash
   npm install
   ```
   if that doesn't install all the dependencies install those manually:
   ```bash
   npm install @apollo/client graphql boostrap
   ```
## Running the Application
   ```bash
   npm run dev
   ```
  This will launch the app on http://localhost:5173
## Configuration
- The app queries the Rick and Morty GraphQL API at:
  
  https://rickandmortyapi.com/graphql
  
  Example Query:
  ```bash
    query GetCharacters($page: Int, $status: String, $species: String) {
    characters(page: $page, filter: { status: $status, species: $species }) {
      info {
        next
        prev
      }
      results {
        id
        name
        status
        species
        gender
        origin {
          name
        }
      }
    }
  }
  ```
## Technologies Used
- React+Vite
- Apollo Client (GraphQL)
- Bootstrap
