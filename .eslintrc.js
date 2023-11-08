// .eslintrc.js
module.exports = {
    parser: '@typescript-eslint/parser', // TypeScript用パーサーを指定
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended', // TypeScript用推奨ルール
    ],
    parserOptions: {
      ecmaVersion: 2020, // ECMAScript2020を使う
      sourceType: 'module', // モジュールを使う
    },
    rules: {
      // プロジェクトに合わせてカスタムルールを追加
    },
  };
  