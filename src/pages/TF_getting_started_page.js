const { TF_personal_information_page } = require("./TF_personal_information_page");

exports.TF_getting_started_page = class TF_getting_started_page{
    constructor(page){
        this.page = page;
        this.FirstNameInputFild = "//input[@id='tf-input-0-input']"; 
        this.LastNameInputField = "//input[@id='tf-input-1-input']"; 
        this.PhoneNumberInputField = "//input[@id='tf-phone-0-input']"; 
        this.EmailInputField = "//input[@id='tf-email-0-input']"; 
        this.EsignCheckBox = "//a[.='e-Sign Disclosure']"; 
        this.AcceptEdisclosure = "//button[.=' Accept ']";
        this.StartApplicationButton = "//button[.=' Start Application ']"; 
        this.disclosure = "//div[@class='textLayer']"; 

    }


    // method to send first name, last name, phone number, email and click on the check box. 
    async ProvideInitialInfo(firstName, lastName, phoneNumber, email){
        await this.page.fill(this.FirstNameInputFild, firstName); 
        await this.page.fill(this.LastNameInputField, lastName); 
        await this.page.fill(this.PhoneNumberInputField, phoneNumber); 
        await this.page.fill(this.EmailInputField, email); 
        await this.page.locator(this.EsignCheckBox).click(); 
    }


    // accept e disclosure 
async acceptEDocs(){
    await this.page.locator(this.AcceptEdisclosure).click(); 

}

//click on start application 
async clickAcceptApplication(){
  await this.page.locator(this.StartApplicationButton).click(); 
  const personalInfo = new TF_personal_information_page(this.page);  
  return personalInfo;
}


}


