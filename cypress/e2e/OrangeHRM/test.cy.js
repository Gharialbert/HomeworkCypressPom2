import LoginPage from "../../Orangehrm/loginPage";
import MyInfoPage from "../../Orangehrm/MyInfoPage";

describe('OrangeHRM Login and My Info Edit Test', () => {

    it('should login and edit personal details successfully', () => {
        const loginPage = new LoginPage();
        const myInfoPage = new MyInfoPage();
        loginPage.open();
        loginPage.login();
        loginPage.clickLogin();
        loginPage.assertLoginSuccess();

        myInfoPage.openInfoTab();
        myInfoPage.editFullName();
        myInfoPage.selectGender();
        myInfoPage.clickSaveButton();
        myInfoPage.assertSuccessMessage();
    });
});

