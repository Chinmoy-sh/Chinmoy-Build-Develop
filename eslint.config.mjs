import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        files: ["script.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "script",
            globals: {
                ...globals.browser,
                ...globals.es2021,
                THREE: "readonly"
            }
        },
        rules: {
            "no-alert": "off",
            "no-console": "off",
            "no-unused-vars": "off"
        }
    }
];
