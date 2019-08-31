const Influx = require('influx');

module.exports = {
  database: 'my_db',
  host: 'localhost',
  schema: [
    {
      fields: {
        value: Influx.FieldType.STRING
      },
      tags: [
        'host'
      ]
    }
  ]
};
