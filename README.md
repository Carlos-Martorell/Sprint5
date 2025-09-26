# OnBoarding

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

# 🚀 Onboarding Carousel Project

This project implements a modern onboarding carousel using **Angular 20 Standalone Components** and **CSS Animations** for smooth, directional transitions.

## 🌟 Key Features

- **Standalone Components:** Built entirely with the modern Angular architecture.
- **Directional Animations:** Smooth slide-in and slide-out animations controlled via CSS Keyframes and triggered by Angular's native animation events (`(animate.enter)`/`(animate.leave)`).
- **Code Quality Enforcement:** Utilizes ESLint, Prettier, and Husky to automatically ensure code formatting and quality standards.

---

## 🛠️ Development Setup & Code Quality

The project is configured with tools to ensure all code is consistent and adheres to Angular best practices.

### 1. Installation of Dependencies

Install all necessary packages, including the core Angular ESLint plugins and `lint-staged` for pre-commit checks.

# Install core linting and formatting tools

npm install -D eslint prettier eslint-config-prettier

# Install Angular-specific ESLint plugins and lint-staged

npm install -D @angular-eslint/builder @angular-eslint/eslint-plugin @angular-eslint/eslint-plugin-template @angular-eslint/template-parser lint-staged

# Initialize Husky for Git Hooks

npm install -D husky
npx husky init

### 2. Initial Codebase Cleanup (Mandatory First Run)

Since these tools were introduced later in the project, run these commands once to **format and fix the entire existing codebase**.

| Tool                    | Command                                      | Description                                                         |
| :---------------------- | :------------------------------------------- | :------------------------------------------------------------------ |
| **Prettier (Format)**   | `npx prettier --write .`                     | Formats all files according to `.prettierrc.json`.                  |
| **ESLint (Lint & Fix)** | `npx eslint --fix src/**/*.ts src/**/*.html` | Fixes auto-correctable errors across all TypeScript and HTML files. |

### 3. Configuring Husky Pre-Commit Hook

Husky runs **`lint-staged`** before every commit to ensure only the files you are about to commit are checked, making the process fast.

1.  **Create the pre-commit hook file:**
    echo "npx lint-staged" > .husky/pre-commit

2.  **Make the file executable:**
    chmod +x .husky/pre-commit

> 💡 **NOTE:** You must have the `lint-staged` configuration added to your `package.json` for the `pre-commit` hook to work correctly.

### 4. Git Commit Flow

After setup, the workflow is simple:

1.  **Modify files.**
2.  **Stage files:** `git add .`
3.  **Commit:** `git commit -m "feat: your new feature"`
    _(Husky automatically executes Prettier and ESLint on staged files before the commit is finalized)._

---

## 🎨 Animation Details

The directional sliding is achieved by:

1.  **TypeScript (`home.ts`):** Using the `showEscena` signal and `setTimeout` to manually **destroy and recreate** the `<app-escena>` component, which forces Angular to trigger the animation lifecycle. The `animationDirection` signal (`'forward'` or `'backward'`) is also set here.
2.  **HTML (`home.html`):** Using Angular's animation event listeners:
    `(animate.enter)="onEnter($event)"`
    `(animate.leave)="onLeave($event)"`
3.  **Custom Logic:** The `onEnter` and `onLeave` callbacks in `home.ts` dynamically **add and remove** the correct CSS classes (`slide-in-reverse`, `slide-out-reverse`, etc.) based on the current `animationDirection()`.

---

🛠️ Comandos de Terminal (Sin Bloques de Código)
Aquí están todos los comandos de instalación y configuración en texto plano.

Instalación de dependencias
npm install -D eslint prettier eslint-config-prettier
npm install -D @angular-eslint/builder @angular-eslint/eslint-plugin @angular-eslint/eslint-plugin-template @angular-eslint/template-parser lint-staged
npm install -D husky
npx husky init

Configuración del pre-commit de Husky
echo "npx lint-staged" > .husky/pre-commit
chmod +x .husky/pre-commit

---

### Latest Fixes & Quality Setup

- **Fixed ESLint Version:** Downgraded ESLint to **v8.57.0** to ensure compatibility with `@angular-eslint` and the `.eslintrc.json` file format.
- **Reinstalled Plugins:** Confirmed all necessary `@typescript-eslint` plugins are installed.
- **Codebase Cleanup:** Successfully executed `prettier --write` and `eslint --fix` to clean and format the entire existing project. All files are now consistent.
