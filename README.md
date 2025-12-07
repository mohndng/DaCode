# React + Tailwind + Lucide + GitHub Pages

This is a centralized layout template using React, Tailwind CSS, and Lucide icons.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## Deploying to GitHub Pages

This project is pre-configured with the `gh-pages` package.

1.  Create a repository on GitHub.
2.  Initialize git and push your code:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```
3.  **Important**: Open `vite.config.js` and update the `base` property.
    *   If your repo is `my-project`, set `base: '/my-project/'`.
    *   The current default `base: './'` works for most simple setups but absolute paths are recommended for production.
4.  Run the deploy script:
    ```bash
    npm run deploy
    ```
5.  Go to your GitHub Repository Settings -> Pages. Ensure the source is set to `gh-pages` branch.