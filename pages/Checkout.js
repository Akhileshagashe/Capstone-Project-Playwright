export class CheckoutPage {

    constructor(page) {
        this.page = page;

        // Contact Information
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.email = page.locator('#email');
        this.phone = page.locator('#phone');

        // Address Information
        this.address = page.locator('#address');
        this.city = page.locator('#city');
        this.state = page.locator('#state');
        this.pinCode = page.locator('#pincode');

        // Button
        this.placeOrderBtn = page.getByRole('button', {
            name: /place order/i
        });
    }

    async openCheckoutForm() {

        await this.page.goto(
            'https://justyourkicks.in/shop'
        );

        await this.page
            .getByRole('button', {
                name: /add to cart/i
            })
            .first()
            .click();

        await this.page
            .getByRole('link', {
                name: /proceed to checkout/i
            })
            .click();
    }

    async fillContactInfo(
        firstName,
        lastName,
        email,
        phone
    ) {

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.phone.fill(phone);
    }

    async fillAddress(
        address,
        city,
        state,
        pinCode
    ) {

        await this.address.fill(address);
        await this.city.fill(city);
        await this.state.fill(state);
        await this.pinCode.fill(pinCode);
    }

    async fillCheckoutForm(
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        state,
        pinCode
    ) {

        await this.fillContactInfo(
            firstName,
            lastName,
            email,
            phone
        );

        await this.fillAddress(
            address,
            city,
            state,
            pinCode
        );
    }

    async placeOrder() {
        await this.placeOrderBtn.click();
    }
}