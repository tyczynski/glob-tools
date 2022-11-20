/**
 * ESLint configuration file based on Next.js defaults
 * @see {@link https://nextjs.org/docs/basic-features/eslint#eslint-config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: {
    'prefer-const': ['error'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
  },
};
