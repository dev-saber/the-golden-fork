# The Golden Fork

# ℹ️ Project Overview

The Golden Fork is a restaurant website that handles online orders and reservations. It allows customers to browse the menu, place orders, and make reservations online. The website also includes a secure payment gateway.

# 📦 Deliverables

- 📂 client: React app
- 📂 server: Laravel app

# 👨‍💻 Technology Stack & Packages

| Front-End Technologies | Utility |
| --- | --- |
| ReactJS | JavaScript library for building user interfaces |
| TailwindCSS | CSS framework for styling web interfaces |
| Redux Toolkit | Simplified Redux state management |
| Axios | HTTP client for making API requests |
| Flowbite | UI toolkit for building responsive web interfaces |
| Formik | Form library for handling form validations and submissions |
| Framer Motion | Animation library for React components |
| React Router Dom | React package for DOM rendering |
| React Scroll | Scroll library for React components |
| Yup | JavaScript schema builder for form validation |

| Back-End Technologies | Utility |
| --- | --- |
| Laravel | PHP framework for building the app API |

# ✏️ Prototyping

- Use Case Diagram:
[https://www.figma.com/file/H9PcWtVgchuOBhXjv5m9g4/Untitled?type=design&node-id=0%3A1&t=j0qeSeWsr5Tn3V98-1](https://www.figma.com/file/H9PcWtVgchuOBhXjv5m9g4/Untitled?type=design&node-id=0%3A1&t=j0qeSeWsr5Tn3V98-1)
- Class Diagram:
[https://www.figma.com/file/W4W5FxyTaXj6cypGBnpWN8/the-golden-fork-class-diagram?type=design&node-id=0%3A1&t=gbM6StfCOjqhikPj-1](https://www.figma.com/file/W4W5FxyTaXj6cypGBnpWN8/the-golden-fork-class-diagram?type=design&node-id=0%3A1&t=gbM6StfCOjqhikPj-1)

# 📁 Client Folder Structure

- `public` : contains all images.
- `assets` : contains fonts used in the project.
- `layouts` : contains non-shared components of the project.
- `components` : contains all components that are used in the project.
- `hooks` : contains custom hooks used in the project.
- `pages` : contains all pages of the project.
- `redux` : contains files related to Redux.
- `routes` : contains all routes used in the project.
- `services` : contains files related to API communication.

# 👥 Contribution Requirements

1. Clone the repository on your local machine
    
    ```jsx
    git clone https://github.com/sifeddineEddr/the-golden-fork.git
    ```
    
2. Navigate into the local repository, and run the following commands to install the dependencies and set up the project.
    1. Laravel
        1. Install dev dependencies
            
            ```jsx
            cd server
            npm install
            composer install
            ```
            
        2. Set up the environment variables and generate the encryption key
            
            ```jsx
            cp .env.example .env
            php artisan key:generate
            ```
            
        3. Run the project’s migrations
            
            ```jsx
            php artisan migrate --seed
            ```
            
        4. Run two simultaneous command lines with the following commands
            
            ```jsx
            npm run dev
            php artisan serve
            ```
            
    2. React
        1. Install dev dependencies
            
            ```jsx
            npm install
            ```
            
        2. Run this command to start the server
            
            ```jsx
            npm run dev
            ```