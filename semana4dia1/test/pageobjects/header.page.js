class HeaderPage {

    get iconMenu () { return $('.bm-burger-button') }

    get iconCart () { return $('.shopping_cart_badge') }

    get currentCartAmount() {
        if (this.iconCart.isExisting())
            return parseInt(this.iconCart.getText())
        return 0
    }

}

module.exports = new HeaderPage();
