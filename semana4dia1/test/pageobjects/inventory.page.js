const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {

    constructor(){
        super()
        this.pageUrl = '/inventory.html';
    }

    get imgProduct() { return $('img.inventory_item_img') }
    cardProduct(producto) { return $(`//div[text()='${producto}']/../../..`)}
    btnInventory(element){ 
        return element.$('.btn_inventory')
    }

    getPageUrl() { return this.pageUrl }

    isUserOnInventoryPage(){
        return (
            $('.inventory_container').isExisting()
            && browser.getUrl().includes(this.pageUrl)
            )
    }

    open () {
        return super.open(this.pageUrl);
    }
}

module.exports = new InventoryPage();
