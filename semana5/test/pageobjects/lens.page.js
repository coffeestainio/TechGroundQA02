const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    get iconPlusLeftEye() { return $(`//form[contains(@class,'quantity') and contains(.,'Left')]//span[@class='icon-plus']`)}
    get iconMinusLeftEye() { return $(`//form[contains(@class,'quantity') and contains(.,'Left')]//span[@class='icon-minus']`)}
    get chkboxLeftEye() { return $(`//span[contains(text(),'Left')]`)}

    get iconPlusRightEye() { return $(`//form[contains(@class,'quantity') and contains(.,'Right')]//span[@class='icon-plus']`)}
    get iconMinusRightEye() { return $(`//form[contains(@class,'quantity') and contains(.,'Right')]//span[@class='icon-minus']`)}
    get chkboxRightEye() { return $(`//span[contains(text(),'Right')]`)}

    get btnNo() { return $('[data-selenium-id=btnNoOtherEye]')}
    
    
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/lenses');
    }

    choosePrescription(rx) {
        browser.pause(5000)
        if (rx.left)  {
            for (let i=0 ; i< rx.left.increase ; i++){
                this.iconPlusLeftEye.waitForClickable()
                this.iconPlusLeftEye.click()
            }  
        }
        else {
            this.chkboxLeftEye.click()
        }

        if (rx.right){
            for (let i=0 ; i< rx.right.increase ; i++){
                this.iconPlusRightEye.waitForClickable()
                this.iconPlusRightEye.click()
            }    
        }      
        else {
            this.chkboxRightEye.click()
        }

        this.btnContinue.click()
        
        if (!rx.left || !rx.right)
            this.btnNo.click()   
    }



}

module.exports = new HomePage();
