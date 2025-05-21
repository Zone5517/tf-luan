const { Model } = require('objection');

class ColaboradoresModel extends Model {
  static get tableName() {
    return 'colaboradores';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['nome', 'email'],

      properties: {
        id: { type: 'integer' },
        nome: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string', minLength: 1, maxLength: 255 },
        cargo: { type: 'string', maxLength: 100 },
      },
    };
  }
}

module.exports = ColaboradoresModel;
