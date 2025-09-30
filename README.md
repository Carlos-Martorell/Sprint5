# 🚀 OnBoarding Carousel Project 🎬

This repository contains an onboarding application built with **Angular 20 Standalone Components** and is styled using **Tailwind CSS**. It features a dynamic, directional carousel implemented using CSS animations.

---

## 🌟 Architecture and Key Features

The project is designed following modern Angular best practices, focusing on performance and code maintainability:

| Feature             | Detail                                                                                                                                                |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Angular Version** | Developed with **Angular CLI 20.3.1** (based on Angular 20).                                                                                          |
| **Architecture**    | Implemented with **Standalone Components** for a simpler, module-less structure.                                                                      |
| **Styling**         | Uses **Tailwind CSS** for a utility-first approach and rapid styling.                                                                                 |
| **Animations**      | Directional transitions achieved via **CSS Keyframes** and component lifecycle manipulation (`destroy`/`recreate`) to force Angular animation events. |
| **Testing**         | Employs **Jasmine** and the **Karma** test runner (configured to use `ChromeHeadless` for stability).                                                 |

---

## 🛠️ Configuration and Development Commands

### 1. Initial Installation

Install all necessary Node.js dependencies:

npm install

### 2. Development Server

Run ng serve to start the local development server:

Bash

ng serve
Open your browser to http://localhost:4200/. The application will automatically reload upon modifying source files.

### 3. Running Unit Tests

Tests are configured to run in Watch Mode, remaining active and automatically re-executing upon saving file changes.

Bash

ng test

💡 Note on Testing: For stability and speed, the recommended setup uses ChromeHeadless in your karma.conf.js. If you prefer the visual browser, ensure the CHROME_BIN environment variable is correctly set to your Chrome binary path.

## 🧹 Code Quality and Commit Workflow

This project enforces code consistency using ESLint and Prettier, automated via Git hooks with Husky.

### 1. Initial Codebase Cleanup (Recommended)

If these tools were integrated later in the project, run these commands once to format and fix the entire existing codebase:

Tool Command Description
Prettier (Format) npx prettier --write . Formats all files according to project standards.
ESLint (Lint & Fix) npx eslint --fix src/**/\*.ts src/**/\*.html Fixes auto-correctable linting errors in TypeScript and HTML files.

### 2. Commit Flow (Husky + Lint-Staged)

Husky executes Lint-Staged before every git commit, applying quality checks only to the files you have staged.

Modify and stage files: git add .

Commit: git commit -m "feat: descriptive commit message"

(ESLint and Prettier run automatically to validate and format the code before the commit is finalized.)

## 🎨 Carousel Animation Details

The directional sliding effect is achieved by coupling direction management with Angular's animation events:

Animation Trigger: Toggling the showEscena signal in home.ts forces the child component to destroy and recreate, triggering the necessary enter and leave events.

Directional Logic: Animation event listeners ((animate.enter) and (animate.leave)) in the HTML read the current direction and dynamically apply specific CSS classes (e.g., slide-in-reverse) to control the visual movement.
