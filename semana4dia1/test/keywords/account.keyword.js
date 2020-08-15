const InventoryPage = require('../pageobjects/inventory.page');
const Header = require('../pageobjects/header.page');
const SideBar = require('../pageobjects/sidebar.page');

class AccountKeyword {

    logout(){
        if (InventoryPage.isUserOnInventoryPage()){
            Header.iconMenu.click()
            SideBar.lnkLogout.click()
        }
    }

}

module.exports = new AccountKeyword();
