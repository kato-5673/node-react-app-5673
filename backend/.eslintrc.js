module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "semi": ["error", "always"],
        "semi-spacing": ["error", {"after": true, "before": false}],
        "semi-style": ["error", "last"],
        "no-extra-semi": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
    }
};
