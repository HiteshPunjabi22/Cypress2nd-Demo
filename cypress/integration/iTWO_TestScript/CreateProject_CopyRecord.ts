
describe('Test Case of Create and Copy Project Record', () => {

  let PrjNum = "PrjN1";
  let PrjName = "Cy_test_Project5";
  let Copy_PrjNum = "78881";
  let Copy_PrjName = "Copy_Cy_test_Project7";

  before("URL ", () => {
    cy.visit("https://qa-live.mtwo.international/itwo405/client/#/loginPage")
  })

  beforeEach("InputData", () => {
    cy.fixture("example").then((data) => {
      this.value = data
    })
  })

  it('Verify Login and Select Company', () => {
    cy.wait(4000);
    cy.get("#username").type(this.value.username)
    cy.get('#password').type(this.value.password)
    cy.get('#loginbutton').click();
    cy.get('.tree-branch-head').click();
    cy.get('.company_1000005 > .flex-box > .tree-label > .ng-binding').click();
    cy.get('.ok').click();
    cy.wait(4000);

  })

  it('Verify Select Project Module', () => {
    cy.wait(4000);
    cy.xpath("//*[contains(@class,'tile project-main')]")
      .click();
    cy.wait(4000);
    cy.xpath("(//*[contains(@class,'e2e-navbar-btn-refresh')])[2]")
      .click();
    cy.wait(2000);
  })

  it('Verify Create New Project Record', () => {
    cy.wait(4000);
    cy.xpath("//*[contains(@class,'cid_713b7d2a532b43948197621ba89ad67a')]//*[contains(@class,'ico-rec-new')]").click();
    cy.wait(1000);
    var ranNum = Math.floor(Math.random() * (100 - 1) + 1);
    cy.xpath("//*[@class='modal-dialog']//*[contains(text(),'Number')]/following::input[contains(@class,'domain-type-code')]").type(PrjNum+ranNum);
    cy.xpath("//*[@class='modal-dialog']//*[contains(text(),'Name ')]/following::input[contains(@class,'omain-type-description')]").type(PrjName);
    cy.xpath("//*[@class='modal-dialog']//*[contains(text(),'Cost Group Configuration')]/following::div[1]//button[2]").click();
    cy.xpath("//li[contains(text(),'MDC_LINEITEMCONTEXT 1000002')]").click();
    cy.get('.ok').click();
    cy.wait(2000);
    cy.xpath("//*[contains(@class,'e2e-navbar-btn-save')]")
    .click();
    cy.wait(2000);
  })


  after("Logout", () => {
    cy.xpath("//*[@class='menu main-color']//*[contains(@class,'dropdown-toggle')]").click();//click on three dots  
    cy.xpath("//button[@title='Logout']").should('contain', 'Logout').click();//click on logout button
  })

})

