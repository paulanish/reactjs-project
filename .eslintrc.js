module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "react-app", "prettier", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended", "plugin:import/errors", "plugin:import/warnings",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        
        "react",
        "prettier", "@typescript-eslint", "react", "jsx-a11y", "import"
    ],
    "rules": {
        "prettier/prettier": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off"
    }
}
