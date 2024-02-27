import {defineConfig} from "vitest/config";
import {configDefaults} from "vitest/config";

export default defineConfig({
    test: {
        coverage: {
            provider: 'istanbul',
            exclude: [...configDefaults.exclude, 'features/', 'cucumber.js'],
            enabled: true,
            reporter: ['text', 'html'],
        },
    },
});
