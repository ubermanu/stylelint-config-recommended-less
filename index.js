module.exports = {
    extends: ["stylelint-config-recommended"],
    plugins: ["stylelint-less"],
    rules: {
        "declaration-colon-space-after": "always",
        "declaration-colon-space-before": "never",
        "at-rule-no-unknown": null,
        "less/color-no-invalid-hex": true,
        "less/no-duplicate-variables": true
    }
};