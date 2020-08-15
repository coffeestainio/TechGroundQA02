const chaiExpect = require('chai').expect
const InventoryPage = require('../../pageobjects/inventory.page')
const AccountKeyword = require('../../keywords/account.keyword')
const Header = require('../../pageobjects/header.page')
const CartPage = require('../../pageobjects/cart.page')


describe('Cart Related functionality', () => {

    describe('Cart Related functionality', () => {

        before(()=>{
            AccountKeyword.login()
        })

        it('should be able to add products to the cart', () => {

            expect(Header.iconCart).not.toExist()

            let card = InventoryPage.cardProduct('Sauce Labs Backpack')
            InventoryPage.btnInventory(card).click()

            expect(Header.iconCart).toExist()
            expect(Header.iconCart).toHaveText('1')

        });

        it('should display the product on the cart page', () => {

            CartPage.open()
            expect(CartPage.cartItemProduct('Sauce Labs Backpack')).toExist()
        });

        it('should be able to login', () => {
            let cartItem = CartPage.cartItemProduct('Sauce Labs Backpack')
            CartPage.buttonRemove(cartItem).click()
            expect(Header.iconCart).not.toExist()
        });
    
    });

    describe('Cart Icon Related functionality', () => {

        before(()=>{
            AccountKeyword.login()
        })

        it('should increase cart amount', () =>{

            let currentValue = Header.currentCartAmount

            let cardBackpack = InventoryPage.cardProduct('Sauce Labs Backpack')
            InventoryPage.btnInventory(cardBackpack).click()

            let currentSecondValue = Header.currentCartAmount
            chaiExpect(currentSecondValue).to.be.equal(currentValue + 1)

            let cardOnesie = InventoryPage.cardProduct('Sauce Labs Onesie')
            InventoryPage.btnInventory(cardOnesie).click()

            let currentThirdValue = Header.currentCartAmount
            chaiExpect(currentThirdValue).to.be.equal(currentValue + 2)

        })

        it('should decrease cart amount', () =>{

            let currentValue = Header.currentCartAmount

            InventoryPage.btnInventory(
                InventoryPage.cardProduct('Sauce Labs Backpack'))
                .click()

            let currentSecondValue = Header.currentCartAmount
            chaiExpect(currentSecondValue).to.be.equal(currentValue - 1)

            InventoryPage.btnInventory(
                InventoryPage.cardProduct('Sauce Labs Onesie'))
                .click()

            let currentThirdValue = Header.currentCartAmount
            chaiExpect(currentThirdValue).to.be.equal(currentValue - 2)

        })

    });

});