import { defineConfig } from "cypress";
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.resolve(__dirname,'.env')});

export default defineConfig({
  projectId: "16fo2z",
  e2e: {
    env:{
      URL: process.env.URL
    }
  },setupNodeEvents(on, config) {
    // implement node event listeners here
    return config;
  },

  viewportWidth: 1680,
  viewportHeight: 852
});
