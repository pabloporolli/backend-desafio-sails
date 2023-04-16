/**
 * Productos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    title: { type: 'String', required: true },
    price: { type: 'Number', required: true },
    thumbnail: { type: 'String', required: true },
    id: {type: 'String'}
    
  },

};

