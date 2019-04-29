const Ajv = require('ajv');
const location = require('./schemas/location');

const schemas = { location };

function validate (schemaName, data, options) {
  const schema = schemas[schemaName];

  if (!schema) {
    throw new Error('Schema not found');
  }

  const ajv = new Ajv(options);
  const validate = ajv.compile(schema);
  return validate(data);
}

module.exports = {
  validate,
  schemas
};
