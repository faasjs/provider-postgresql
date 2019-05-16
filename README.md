# @faasjs/provider-postgresql

PostgreSQL 适配

[![License: MIT](https://img.shields.io/npm/l/@faasjs/provider-postgresql.svg)](https://github.com/faasjs/provider-postgresql/blob/master/LICENSE)
[![Build Status](https://img.shields.io/travis/com/faasjs/provider-postgresql.svg)](https://travis-ci.com/faasjs/provider-postgresql)
[![Coverage Status](https://img.shields.io/codecov/c/github/faasjs/provider-postgresql.svg)](https://codecov.io/gh/faasjs/provider-postgresql)
[![NPM Stable Version](https://img.shields.io/npm/v/@faasjs/provider-postgresql/stable.svg)](https://www.npmjs.com/package/@faasjs/provider-postgresql)
[![NPM Beta Version](https://img.shields.io/npm/v/@faasjs/provider-postgresql/beta.svg)](https://www.npmjs.com/package/@faasjs/provider-postgresql)

[接口文档](https://github.com/faasjs/provider-postgresql/blob/master/API.md)

## How to use?

1. Add npm to package.json: `yarn add @faasjs/provider-postgresql@beta`;
2. Config connection info in providers folder, support host, user, password and database;
3. Use it in flow:

```typescript
new Flow({
  resources: {
    postgresql: {}
  }
}, async function(){
  const results = await this.postgresql.query('SELECT user from id = ?', ['1']);
  console.log(results[0].id); // => 1
})
```