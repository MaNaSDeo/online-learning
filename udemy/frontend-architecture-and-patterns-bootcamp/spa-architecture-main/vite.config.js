import { defineConfig } from "vite";

export default defineConfig({
  root: "src", // here src is the folder where vite will look for entry html/css/js files.
  base: "./", // URL prefix that Vite adds to all built asset links, <script type="module" src="src/assets/index-xxxxx.js"></script>
});
