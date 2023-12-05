
# React Task Manager
Welcome to the React Task Manager project! This task manager application is built using React, Vite, TypeScript, and Tailwind CSS. It allows users to manage their tasks with a simple and intuitive interface. The application stores task data locally using React's useState, useEffect, and state lifting tools.

# Getting Started
To run the project locally, follow these steps:

Clone the repository:

bash
Copy code
```js
git clone https://github.com/KhaledMowafy/React-Fundamentals.git
```
Navigate to the project directory:

bash
Copy code

```js
cd React-Fundamentals
Install dependencies:
```

bash

```js
Copy code
npm install
Run the development server:
```

bash

Copy code
```js
npm run dev
```
This will start the development server, and you can view the application at http://localhost:5173/ in your browser.

# Features
Task Creation: Add new tasks with a title and optional details.
Task List: View and manage your tasks in a clean and organized list.
Local Storage: Task data is saved in local storage, ensuring persistence between sessions.
Responsive Design: The application is designed to work seamlessly on various screen sizes.
Technologies Used
React: A JavaScript library for building user interfaces.
Vite: A fast frontend build tool that enhances the development experience.
TypeScript: A typed superset of JavaScript that adds static types.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Project Structure
lua
Copy code
React-Fundamentals/
|-- src/
|   |-- components/
|   |   |-- TaskList.tsx
|   |   |-- TaskForm.tsx
|   |-- App.tsx
|   |-- index.tsx
|-- tsconfig.json
|-- vite.config.js
|-- tailwind.config.js
|-- README.md
Usage
Adding a Task:

Click the "+" button to open the task creation form.
Enter the task title and optional details.
Click "Save Changes" to save the task.
Managing Tasks:

View your tasks in the task list.
Mark tasks as completed as needed.
Persistence:

Task data is stored in local storage.
Your tasks will persist even if you close or refresh the page.
Contributing

License
This project is licensed under the MIT License.

Happy task managing! 🚀