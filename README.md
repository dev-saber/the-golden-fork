# The Golden Fork

# ℹ️ Project Overview

The Golden Fork is a restaurant website that handles online orders and reservations. It allows customers to browse the menu, place orders, and make reservations online. The website also includes a secure payment gateway.

# 📦 Deliverables

- 📂 client: React app
- 📂 server: Laravel app
- 📂 payment: ExpressJS app

# 👨‍💻 Technology Stack & Packages

| Front-End Technologies | Utility |
| --- | --- |
| ReactJS | JavaScript library for building user interfaces |
| TailwindCSS | CSS framework for styling web interfaces |
| Redux Toolkit | Simplified Redux state management |
| Redux Persist | Library for persisting Redux state in storage |
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
| ExpressJS | Node.js framework for processing the Stripe Payment Checkout |

# 📁 Client Folder Structure

- `public` : contains all images.
- `api`: contains files related to API communication.
- `components` : contains all components that are used in the project.
- `layouts` : contains non-shared components of the project.
- `middlewares` : contains handlers of pages access permissions.
- `pages` : contains all pages of the project.
- `redux` : contains files related to Redux.
- `routes` : contains all routes used in the project.

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
            
    3. Express
        1. Install dev dependencies
            
            ```jsx
            cd payment
            npm install
            ```
            
        2. Run this command to start the server
            
            ```jsx
            npm run start
            ```
            
        3. To try a payment checkout you can use the following information
            
            ```jsx
            Email : test@test.com
            Card information : 4242 4242 4242 4242
            Name on card : test
            ```