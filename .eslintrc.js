module.exports = {
    // Configuration for JavaScript files
  "extends": [
    "airbnb-base",
    "next/core-web-vitals", // Needed to avoid warning in next.js build: 'The Next.js plugin was not detected in your ESLint configuration'
    "plugin:prettier/recommended"
  ],
  "ignorePatterns":["**/PocWidget/**", "**/__name__/**"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "endOfLine": "auto"
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "test.{ts,tsx}", // repos with a single test file
          "test-*.{ts,tsx}", // repos with multiple top-level test files
          "**/*{.,_}{test,spec}.{ts,tsx}", // tests where the extension or filename suffix denotes that it is a test
          "**/jest.config.ts", // jest config
          "**/jest.setup.ts" // jest setup
        ],
        "optionalDependencies": false
      }
    ],
    "no-param-reassign": ["error", { "props": false }]
  },
  "overrides": [
    // Configuration for TypeScript files
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "plugins": ["@typescript-eslint", "unused-imports", "simple-import-sort"],
      "extends": [
        "airbnb-typescript",
        "next/core-web-vitals",
        "plugin:prettier/recommended"
      ],
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "rules": {
        "prettier/prettier": [
          "error",
          {
            "singleQuote": true,
            "endOfLine": "auto"
          }
        ],
        "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        "react/require-default-props": "off", // Allow non-defined react props as undefined
        "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
        "react-hooks/exhaustive-deps": "off", // Incorrectly report needed dependency with Next.js router
        "@next/next/no-img-element": "off", // We currently not using next/image because it isn't supported with SSG mode
        "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
        "@typescript-eslint/consistent-type-imports": "error", // Ensure `import type` is used when it's necessary
        "import/prefer-default-export": "off", // Named export is easier to refactor automatically
        "simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
        "simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "class-methods-use-this":"warn",
        "unused-imports/no-unused-vars": [
          "error",
          {
            "argsIgnorePattern": "^_",
            "ignoreRestSiblings": true
          }
        ]
      }
    },
    // Configuration for testing
    {
      "files": ["**/*.test.ts", "**/*.test.tsx"],
      "plugins": ["jest", "jest-formatting", "testing-library", "jest-dom"],
      "extends": [
        "plugin:jest/recommended",
        "plugin:jest-formatting/recommended",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended"
      ]
    },
    {
      // feel free to replace with your preferred file pattern - eg. 'src/**/*Slice.ts'
      "files": ["src/store/**/reducer.ts"],
      // avoid state param assignment
      "rules": { "no-param-reassign": ["error", { "props": false }] }
    }
  ]
}
