import {expect, test} from "@playwright/test"
import { TF_product_selector_page } from "../../pages/TF_product_selector_page";

test("E2E WTUAT digital brand code 118, branch code 1 wtuat", async ({page})=>{
    const ProductPage = new TF_product_selector_page(page); // create an object of TFdigitsl class so i could have an access to the web elements and methods 
    const expectedUrl = "https://wintrustbank--uat01.sandbox.my.salesforce-sites.com/?brandCode=118branchCode%3D1#/product-selector" // set up expected url 
    await ProductPage.goToPage();  // naviga to page 
    await expect(page).toHaveURL(expectedUrl) //assert
    await ProductPage.ClickSavingsTab(); // click on savings tab 
    await ProductPage.SelectStatementSavingsProduct(); // select a product 
    await expect(page.locator(ProductPage.ApplyNowButton)).toBeVisible() // verify apply now button is visible
    await ProductPage.ClickApplyNow() // click apply now 
    await expect(page.locator(ProductPage.currantNewPopUp)).toBeVisible(); // verify new /existing pop up is visible 
    await expect(page.locator(ProductPage.existingCostumerOption)).toBeVisible(); // verify existing is visible 
    await expect(page.locator(ProductPage.existingCostumerOption)).toBeVisible(); // verify new is visible 
    const gettingStarted = await ProductPage.EnterManually(); // select enter manually 
    await page.waitForTimeout(1000); 
    await gettingStarted.ProvideInitialInfo("Isakazy", "Amanbaev", "3127795529", "iamanbae@wintrust.com"); 
    await page.waitForTimeout(3000); 
    await gettingStarted.acceptEDocs(); 
    try{
        await page.waitForTimeout(2000);
    }
    catch(error){
        console.error("error during eccept E Docs: ", error)
    }
    
    const personalInfoPage = await gettingStarted.clickAcceptApplication();
    await personalInfoPage.SendStreetSddress("'5451 North East River Road"); 
    await personalInfoPage.SendCity("Chicago"); 
    await personalInfoPage.SelectStateAlabama(); 
    await personalInfoPage.SendPostalCode("60656"); 
    await personalInfoPage.SendPhoneNumber("312 7795529"); 
    await personalInfoPage.DateOfBirth("12121997"); 
    await personalInfoPage.SelectIDtype(); 
    await personalInfoPage.SendIDnumber("9876556785"); 
    await personalInfoPage.SelectStateIssued(); 
    await personalInfoPage.SendExperationDate("12122030"); 
    await personalInfoPage.SendIssueDate("12122023"); 
    await personalInfoPage.SendSSN("988879889"); 
    await personalInfoPage.SelectSitizen();
    await personalInfoPage.SelectOcupationStudent(); 
    await personalInfoPage.ClickTextMeRadioButton(); 
    await personalInfoPage.SecretWordAndHint("water", "ocean"); 
    const opt = await personalInfoPage.clickNext(); 
}); 