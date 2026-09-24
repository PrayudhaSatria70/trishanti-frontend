import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/**
 * ESLint configuration — SonarQube / SAST compliant.
 * Rules enforce clean, secure, maintainable code.
 */
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
  ]),
  {
    rules: {
      /* Prevent any usage — zero tolerance for unsafe typing */
      "@typescript-eslint/no-explicit-any": "error",

      /* SonarQube — no dead code */
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-unused-expressions": "error",
      "no-unreachable": "error",

      /* Security — no dangerous patterns */
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",

      /* Production safety — no console.log in code */
      "no-console": ["error", { allow: ["warn", "error"] }],

      /* Code quality */
      "no-duplicate-imports": "error",
      "prefer-const": "error",
      "no-var": "error",
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],

      /* React — hooks and JSX safety */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-danger": "error",
      "react/no-danger-with-children": "error",
    },
  },
]);

export default eslintConfig;
