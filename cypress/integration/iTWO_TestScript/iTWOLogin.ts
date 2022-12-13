describe("Do End to End testing on iTWO application", () => {

    it("Verify Login Module", ()=>{
        cy.visit("https://qa-live.mtwo.international/itwo405/client/#/loginPage");
        cy.get("#username").type("ribadmin");
        cy.xpath("//input[@id='password']").type("ribadmin");
        cy.get("#loginbutton").click();
        cy.wait(5000);
        cy.get('.tree-collapsed > .flex-box > .tree-branch-head').click();
        cy.get('.company_1000005 > .flex-box > .tree-label > .ng-binding')
        .should('contain','999 RIB Demo')
        .and('have.class','ng-binding ng-scope')
        .should('be.visible')
        .click();
        cy.wait(4000);
        cy.get('.ok').click();
        cy.wait(8000);
       
    })

    it('Verify Select Project Module', () => {
      cy.xpath("//*[contains(@class,'tile project-main')]")
      .click();
        cy.wait(2000);
        cy.xpath("(//*[contains(@class,'e2e-navbar-btn-refresh')])[2]")
        .click();
        cy.wait(2000);
      })


})