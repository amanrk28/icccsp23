// turn off the rule completely
const OFF = 0;
// turns the rule on but won't make the linter fail
const WARN = 1;
// turns the rule on and make the linter fail
const ERROR = 2;

module.exports = {
  // stop eslint from looking for a config file in parent folders
  root: true,
  extends: [
    'prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'next/core-web-vitals',
    'next',
  ],
  plugins: ['react', 'import', 'prettier', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': OFF,
    camelcase: OFF,
    'react/prop-types': OFF,
    'react/require-default-props': OFF,
    'accessor-pairs': OFF,
    'arrow-parens': [ERROR, 'as-needed'],
    'arrow-spacing': [ERROR, { before: true, after: true }],
    'brace-style': [ERROR, '1tbs'],
    'no-prototype-builtins': OFF,
    'comma-dangle': [
      ERROR,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'dot-notation': ERROR,
    'eol-last': ERROR,
    eqeqeq: [ERROR, 'allow-null'],
    'jsx-quotes': [ERROR, 'prefer-double'],
    'keyword-spacing': [ERROR, { after: true, before: true }],
    'no-inner-declarations': [ERROR, 'functions'],
    'no-multi-spaces': ERROR,
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    'no-shadow': ERROR,
    'no-unused-vars': [WARN, { args: 'after-used' }],
    'no-useless-concat': ERROR,
    quotes: [
      ERROR,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'space-before-blocks': ERROR,
    'space-before-function-paren': OFF,
    'react/jsx-boolean-value': [ERROR, 'never'],
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js', '.tsx'] }],
    'react/boolean-prop-naming': [
      ERROR,
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      },
    ],
    'react/react-in-jsx-scope': OFF,
    'react/self-closing-comp': ERROR,
    'react/no-unused-state': ERROR,
    'react/default-props-match-prop-types': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react-hooks/rules-of-hooks': ERROR, // Checks rules of Hooks
    'react-hooks/exhaustive-deps': WARN, // Checks effect dependencies
    'import/prefer-default-export': OFF,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'no-shadow': OFF,
  },
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },
};
