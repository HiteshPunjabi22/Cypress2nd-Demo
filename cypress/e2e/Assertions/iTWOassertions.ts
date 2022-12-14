describe("Do End to End testing on iTWO application", () => {


    it("Verify Login Module", ()=>{
        cy.visit("https://qa-live.mtwo.international/itwo405/client/#/loginPagenpm ");
        cy.get("#username").type("ribadmin");
        cy.get('#password').type("ribadmin");
        cy.get("#loginbutton",{timeout:4000}).click();
        cy.get('.tree-collapsed > .flex-box > .tree-branch-head').click();
        cy.get('.company_1000005 > .flex-box > .tree-label > .ng-binding')
        .should('contain', '999 RIB Demo')
        .click();
        cy.get('.ok').click();
        cy.wait(8000);

    })

    it('Verify Select Project Module', () => {
        cy.contains('Management of Projects')
        .should('contain','Project')
        .click();
        cy.wait(8000);
        cy.get("button[title='Refresh (Ctrl+R)']")
        .should('be.visible')
        .should('be.e')
          .click();
        cy.wait(2000);
      })

      it('Verify add new record', () =>{
        cy.get('#pane-lt > .filler > .subview-header > .showimages > [data-ng-hide="tools.items[1].hideItem"] > .tlb-icons')
        .should
      })



})