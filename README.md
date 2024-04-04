# Dynamic Website / Portfolio
## CV
- **Separate resume information:** Instead of embedding your resume information directly in the HTML code, create a separate file in JSON format.
- **Content:** This JSON file should contain information about your education and previous workplaces.
- **Dynamic generation:** Use the JSON file to dynamically generate your resume page.
## React
- **Portfolio Extension:** Update your portfolio to pull in public projects from your GitHub page and display them by name and description.
- **Choices:** You can choose to keep both previous projects directly in the HTML and those from GitHub, or replace the previous projects with only GitHub projects.
- **Loading Indicator:** Display a loading indicator to inform the visitor that the projects are loading.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
