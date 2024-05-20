import { defineConfig } from 'astro/config';
import icon from "astro-icon";

export default defineConfig({
  integrations: [icon()],
  styles: [
    'bootstrap/dist/css/bootstrap.min.css'
  ]
});