const { TF_getting_started_page } = require("./TF_getting_started_page");

exports.TF_product_selector_page = class TF_product_selector_page{
    
    constructor(page){
        this.page = page; 
        this.SavingCDtab = "//h2[.='PERSONAL SAVINGS & CDS']"; 
        this.SelectStatementSevingsButton = "//div[@class='col mb-4'][3]//button[.=' Select ']"; 
        this.ApplyNowButton = "//button[@type='submit']";  
        this.currantNewPopUp = "//tf-modal-body"; 
        this.currantCostumerOption = "//div[@class='existing-wrap col-md-5 user-guide']"; 
        this.existingCostumerOption = "//div[@class='existing-wrap1 col-md-5']";
        this.EnterManuallyButton = "//div[@class='existing-wrap1 col-md-5']//a"; 

    }

    // navigate to TF digital WTUAT 118 brach 1 
    async goToPage(){
        await this.page.goto("https://wintrustbank--uat01.sandbox.my.salesforce-sites.com/?brandCode=118branchCode%3D1#/product-selector"); 
      
    }

    //click on Savings and CDs tab 
    async ClickSavingsTab(){ 
        await this.page.locator(this.SavingCDtab).click(); 
       

    }

    //click on select Statement Savings Product 
    async SelectStatementSavingsProduct(){ 
        await this.page.locator(this.SelectStatementSevingsButton).click(); 
        
    }

    //click on apply now button 
    async ClickApplyNow(){
        await this.page.locator(this.ApplyNowButton).click(); 
        
    }

    // click on enter manually option
    async EnterManually(){
       
        await this.page.locator(this.EnterManuallyButton).click(); 
        const gettingStarted = new TF_getting_started_page(this.page) // since clickin on the button redirects the user to a different page, we follow POM chaining approach 
        return gettingStarted; 
    }


}
