/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  name: 'Milanea a la napolitana',
  shortDesc: 'carne rebozada',
  healthScore: '01',
  stepByStep: 'css',
  dishType: 'html',
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes').expect(200)
    );
  });
});


//- [ ] __GET /recipes?name="..."__:
//  - Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
//  - Si no existe ninguna receta mostrar un mensaje adecuado