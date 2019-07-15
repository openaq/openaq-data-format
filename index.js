const Ajv = require('ajv');
const jsonschema = require('jsonschema');
const location = require('./schemas/location');

const schemas = { location };

function validate (schemaName, data, options) {
  const schema = schemas[schemaName];

  if (!schema) {
    throw new Error('Schema not found');
  }

  return jsonschema.validate(data, schema, options);
}

module.exports = {
  validate,
  schemas
};
