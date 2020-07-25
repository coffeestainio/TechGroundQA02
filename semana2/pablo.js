var assert = require('assert');

// creo browser

describe.only('Cuando el login page funciona', () =>  {

    before(()=>{
      console.log('Me llamo primero')
    })

    beforeEach(function () {
      console.log('Me llamo antes de cada test')
    });
   
    it('1. deberia ver la pagina de inicio', () => {
      console.log('Me llamo en el test')
      assert.equal(4, 2 + 2);
    });

    it('2. deberia ver la pagina de inicio', () => {
      console.log('Me llamo en el test')
      assert.equal(4, 2 + 2);
    });

    it('3. deberia ver la pagina de inicio', () => {
      console.log('Me llamo en el test')
      assert.equal(4, 2 + 2);
    });

    afterEach(function () {
      console.log('Me llamo despues de cada test')
    });

    after(()=>{
      console.log('Me llamo despues')
    })

});

// destruyo browser