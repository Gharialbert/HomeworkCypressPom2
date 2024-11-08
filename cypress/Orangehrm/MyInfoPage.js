import {MY_INFO_PAGE, editPrfileConstants} from "../Locators/MyInfoLocators";

class MyInfoPage {
    openInfoTab() {
        cy.get(MY_INFO_PAGE.myInfo).click();
    }

    editFullName() {
        cy.get(MY_INFO_PAGE.firstname).clear().type(editPrfileConstants.firstName);
        cy.get(MY_INFO_PAGE.middlename).clear().type(editPrfileConstants.middleName);
        cy.get(MY_INFO_PAGE.lastname).clear().type(editPrfileConstants.lastName);

    }

    selectGender() {
        cy.get(MY_INFO_PAGE.gender).click( {force: true});
    }

    clickSaveButton() {
        cy.get(MY_INFO_PAGE.saveBtn).click();
    }

    assertSuccessMessage() {
        cy.get(MY_INFO_PAGE.assertSuccessMessage).should('exist');
        cy.wait(3000);
    }

    assertEditedDataVisible() {
        cy.get(MY_INFO_PAGE.firstname).should('have.value', editPrfileConstants.firstName);
        cy.get(MY_INFO_PAGE.middlename).should('have.value', editPrfileConstants.middleName);
        cy.get(MY_INFO_PAGE.lastname).should('have.value', editPrfileConstants.lastName);
        cy.get(MY_INFO_PAGE.gender).should('be.checked');
    }
}
export default MyInfoPage

