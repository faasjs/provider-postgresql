import { Pool } from 'pg';
import Logger from '@faasjs/logger';

class ProviderPosgresql {
  public pool: Pool;
  public logger: Logger;

  constructor (opts: {
    host: string;
    user: string;
    password: string;
    database: string;
    [key: string]: any;
  }) {
    this.logger = new Logger('@faasjs/provider-postgresql');

    const config = Object.assign({
      connectionLimit: 1,
      port: 3306
    }, opts.resource.config);

    this.logger.debug('createPool: %o', config);
    this.pool = new Pool(config);
  }

  public query (sql: string, values: any) {
    this.logger.debug('query begin: %s %o', sql, values);
    this.logger.time(sql);

    return this.pool.query(sql, values).then((result) => {
      this.logger.timeEnd(sql, 'query end: %s %o', sql, result.rows);
      return result.rows;
    });
  }

  public execute (sql: string, values: any) {
    this.logger.debug('execute begin: %s %o', sql, values);
    this.logger.time(sql);

    return this.pool.query(sql, values).then((result) => {
      this.logger.timeEnd(sql, 'execute end: %s %o', sql, result);

      return result;
    });
  }
}

export function handler (opts: {
  config: {
    host: string;
    user: string;
    password: string;
    database: string;
    [key: string]: any;
  };
  [key: string]: any;
}) {
  return new ProviderPosgresql(opts.config);
}
