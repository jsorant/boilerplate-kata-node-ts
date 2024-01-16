import { defineConfig } from "vitest/config";
import { configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      exclude: [...configDefaults.exclude, "features/", "cucumber.js"],
      enabled: true,
      reporter: ["text", "html"],
    },
  },
});
