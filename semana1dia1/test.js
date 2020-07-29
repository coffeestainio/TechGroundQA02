const expect = require('chai').expect;

// creo browser
describe('DDX', () =>  {

      before(()=>{
        console.log('Resultado3');
      });

      it('1. deberia ver la pagina de inicio', () => {
        console.log('Resultado2');
        // assert.equal(4, 2 + 2);
        expect(2+2).to.be.equal(4)
        expect(true).to.be.true
        expect(true).not.to.be.false

        arra = [1,2]
        expect(arra).to.be.lengthOf(2)
      });

      it('2. deberia ver la pagina de inicio', () => {
        // assert.equal(4, 2 + 2);
      }); 
});


describe('2. ', () =>  {

    var ver = true
    if (ver){
      it(`${ver} deberia ver la pagina de inicio`, () => {
            console.log('ver')
      });
  }

});