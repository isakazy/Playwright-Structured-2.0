const { TF_otp_page } = require("./TF_otp_page");

exports.TF_personal_information_page = class TF_personal_information_page{

    constructor(page){
        this.page = page; 
        this.AddressInputField = "//input[@id='tf-input-6-input']"; 
        this.cityInputField = "//input[@id='tf-input-8-input']"; 
        this.stateDropDown = page.getByLabel('State'); 
        this.AlabamaOnption = "//div[.=' Alabama ']"; 
        this.postalCodeInputField = "//input[@id='tf-input-9-input']"; 
        this.phoneNumberInputField = "//input[@id='tf-phone-1-input']";
        this.DateOfBirthInputField = "//input[@id='tf-date-0-input']";  
        this.IdDropDown = page.getByLabel('Please select identification'); 
        this.DriverslicenseOption = getByRole('option', {name: 'State Drivers License'}); 
        this.IDnumberInputField = "//input[@id='tf-input-2-input']";
        this.StateIssuedDropDown = "//input[@id='tf-dropdown-7-input']"; 
        this.StateIssuedOption = "//div[.=' Alaska ']";
        this.expirationDate = "//input[@id='tf-date-1-input']"; 
        this.issueDateInputField = "//input[@id='tf-date-2-input']"; 
        this.ssnInputField = "//input[@id='tf-ssn-0-input']"; 
        this.cityzenshipDopDown = "//input[@id='tf-dropdown-0-input']"; 
        this.UScitizenOption = "//div[.=' US Citizen ']"; 
        this.OcupationDropDown = page.getByLabel('Occupation'); 
        this.StudentOption = page.getByRole('option', {name: 'STUDENT'}); 
        this.TextmeRadioButton = this.page.getByLabel('Text me at my number ending in')
        this.SecretWordInputField = "//input[@id='tf-input-10-input']"; 
        this.SecretWordHint = "//input[@id='tf-input-11-input']"; 
        this.NextBUtton = "//button[.=' Next ']"; 
    }
    // the following methods are to fill personal information page. the drop down options are set within the method. to make it more dinamic, we need a more complex logic and config file in the future
    
    async SendStreetSddress(address){
        await this.page.fill(this.AddressInputField, address); 
    }
    
    async SendCity(city){
        await this.page.fill(this.cityInputField, city); 
    }
    
    async SelectStateAlabama(){
        await this.stateDropDown.click();  // this methods needs to be improved, swithc case 
        await this.page.locator(this.AlabamaOnption).click();
    }

    async SendPostalCode(zipCode){
        await this.page.fill(this.postalCodeInputField, zipCode);
    }

    async SendPhoneNumber(phoneNumber){
        await this.page.fill(this.phoneNumberInputField, phoneNumber);
    }

    async DateOfBirth(dateOfBirth){
        await this.page.fill(this.DateOfBirthInputField, dateOfBirth);
    }

    async SelectIDtype(){
        await this.IdDropDown.click();   // the method needs to be improved. We need to parameterize the method to make it more dynamic, I need Swich case 
        await this.DriverslicenseOption.click();
    }

    async SendIDnumber(idNumber){
        await this.page.fill(this.IDnumberInputField, idNumber); 
    }

    async SelectStateIssued(){
        await this.page.locator(this.StateIssuedDropDown).click(); 
        await this.page.locator(this.StateIssuedOption).click(); 
    }

    async SendExperationDate(experation){
        await this.page.fill(this.expirationDate, experation);
    }

    async SendIssueDate(issue){
        await this.page.fill(this.issueDateInputField, issue); 
    }

    async SendSSN(ssn){
        await this.page.fill(this.ssnInputField, ssn);
    }

    async SelectSitizen(){
        await this.page.locator(this.cityzenshipDopDown).click(); // also can be parameterized suing a swith case 
        await this.page.locator(this.UScitizenOption).click(); 
    }

    async SelectOcupationStudent(){
        await this.OcupationDropDown.click(); 
        await this.StudentOption.click(); 
    }

    async ClickTextMeRadioButton(){
        await this.TextmeRadioButton.click();
    }

    async SecretWordAndHint(secretWord, hint){
        await this.page.fill(this.SecretWordInputField, secretWord); 
        await this.page.fill(this.SecretWordHint, hint); 
    }

    async clickNext(){
        await this.page.locator(this.NextBUtton).click();
        const otpPage = new TF_otp_page(this.page); 
    }

   












    
}