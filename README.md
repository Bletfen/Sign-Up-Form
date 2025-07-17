# Intro Component with Sign Up Form

This is a responsive React + TailwindCSS implementation of a **sign-up form landing page**, inspired by frontend mentor-style challenges.

## 💡 Features

- **Fully responsive layout** (Mobile-first, with `xl:` breakpoint for larger screens)
- **Custom form validation** with inline error messages
- **Dynamic error SVG icon rendering**
- Font styling with **Poppins** from Google Fonts
- Clean, accessible form UI
- Custom background image switch via media queries (optional in CSS)

## 🛠 Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **Custom CSS** (for body styling, fonts, and background images)
- Responsive Design using Tailwind’s utility-first approach

## 📁 Folder Structure

src/
├── App.jsx
├── index.css (or App.css)
├── components/
│ ├── maintext/
│ │ └── MainText.jsx
│ ├── signup/
│ │ └── SignUp.jsx
│ └── trial/
│ └── Trial.jsx

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/intro-component-with-sign-up-form.git
   cd intro-component-with-sign-up-form

    Install dependencies:
   ```

npm install

Run the development server:

    npm run dev

    Visit http://localhost:5173 in your browser.

🧪 Form Validation Logic

    All fields must be filled

    Email field is validated with a basic regex pattern

    If validation fails:

        Error message shown under the input

        Error icon (SVG) appears on the right

🖼 Background

    Mobile: /images/bg-intro-mobile.png

    Desktop: /images/bg-intro-desktop.png (optional, currently commented out in CSS)

🔗 Live Demo

👉 [View Live Site](https://sign-up-form-sable-alpha.vercel.app/)

    This project is created for practice and educational purposes. Inspired by frontend mentor challenges.
