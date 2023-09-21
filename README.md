# Tailwindcss_Assignment

### Setup Instructions
1. Clone the project
```
git https://github.com/chintakiransai/Tailwindcss_Assignment.git
```
2. Change the directory
```
cd Tailwindcss_Assignment
```
3.Insatll dependencies
```
npm i
```
4. Run the server
```
npm run dev
```

### Setting up Tailwind CSS in a Vite project [Link](https://tailwindcss.com/docs/guides/vite)
1. Install tailwindcss and its peer dependencies using the below commands, then generate your tailwind.config.js and postcss.config.js files.
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
2. Add the paths to all of your template files in your tailwind.config.js file.
```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```
4.Add the @tailwind directives for each of Tailwind’s layers in your ./src/index.css file.
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
* Run the server, tailwind should be integrated....
