const HomePage = require('../pageobjects/home.page');
const LensesPage = require('../pageobjects/lenses.page');
const LensPage = require('../pageobjects/lens.page');
const RXDetailsPage = require('../pageobjects/rx-details.page');
const ParametersPage = require('../pageobjects/parameters.page');
const PatientPage = require('../pageobjects/patient.page');

// test data
const testLens = { brand: 'SofLens' , name: 'SofLens 38' , id:'soflens-38'}
const rx = { right: { increase : 2, power: '2.00', bc: '9.0' },
              left: { increase : 1, power: '1.50', bc: '8.7' }}

const patient = { firstName: 'pablo', lastName: 'bald' }

describe('Order Lenses Flow From HomePage', () => {
    it('should let me search lenses', () => {
        HomePage.open()
        HomePage.btnFindMyContacts.click()

        // $('[data-selenium-id=txtSearch]').click()
        // $('[data-selenium-id=txtSearch]').keys("Ejemplo")
        // $('[data-selenium-id=txtSearch]').keys("")

        browser.pause(10000) // la paigna me cargaba
        browser.debug()

        
        expect(browser).toHaveUrlContaining('/lenses');
    });

    it('should let me choose my lenses', () => {
       LensesPage.selectBrandAndName(testLens)
       expect(browser).toHaveUrlContaining(`/lens/${testLens.id}`);
    });

    it('should let me select my eyes', () => {
        LensPage.choosePrescription(rx)
        expect(browser).toHaveUrlContaining(`/rx-details`);
        
        RXDetailsPage.btnEnterManually.click()
        expect(browser).toHaveUrlContaining(`/parameters`);

     });

     it('should let me select my prescription', () => {
        if (!rx.left) {
            expect(ParametersPage.iconAddLeftEye).toBeDisplayed()
            expect(ParametersPage.iconAddRightEye).not.toBeDisplayed()
        } else {
            ParametersPage.selectPower('Left', rx.left.power)
            ParametersPage.selectBaseCurve('Left', rx.left.power)
        }

        if (!rx.right) {
            expect(ParametersPage.iconAddRightEye).toBeDisplayed()
            expect(ParametersPage.iconAddLeftEye).not.toBeDisplayed()
        } else {
            ParametersPage.selectPower('Right', rx.right.power)
            ParametersPage.selectBaseCurve('Right', rx.right.bc)
        }
        
        ParametersPage.btnContinue.click()

        expect(browser).toHaveUrlContaining(`/patient`);

     });

     it('should let me enter my patient name', () => {
            PatientPage.txtFirstName.setValue(patient.firstName)
            PatientPage.txtLastName.setValue(patient.lastName)
            PatientPage.btnContinue.click()

            expect(browser).toHaveUrlContaining(`/cart`);
     });


});


