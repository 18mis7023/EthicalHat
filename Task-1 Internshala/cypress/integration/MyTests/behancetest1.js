describe('MyTestSuite', () => 
{
    
    it('Login Scenario', () =>
    {
        cy.visit('https://internshala.com/')  //to visit the website 
        // cy.title().should('eq','reddit: the front page of the internet') //here should be checking whether it is there or not (it will check whethe the name is nopcommerce... or not)
        cy.get('.navbar-nav > :nth-child(5) > .btn').click()
        cy.get('.show > .modal-dialog > .modal-content > .modal-body > #modal-login-form > :nth-child(2) > #modal_email')
        .type('fake@email.com').should('have.value', 'fake@email.com')  
        cy.get('.show > .modal-dialog > .modal-content > .modal-body > #modal-login-form > :nth-child(3) > #modal_password')
        .type('fakepassword').should('have.value','fakepassword')

    })
    it('.submit() - submit a form', () => {
        cy.get('.show > .modal-dialog > .modal-content > .modal-body > #modal-login-form')
          .find('[type="email"]')
          cy.get('.show > .modal-dialog > .modal-content > .modal-header > .close').click()
        //   cy.get('.show > .modal-dialog > .modal-content > .modal-body > #modal-login-form').submit()
        //   .next().should('contain', 'This email id is not registered with Internshala. To register, please click here if you are a student or here if you an employer. If you are a T&P head, register here.')

    })
    // it('.Select-checking', () => {
    //     cy.get('#internships_new_superscript')
    //     .should('have.value', 'Internships')
    //     cy.get('#internships_new_superscript').select('Work from Home')
    //     // confirm the apples were selected
    //     // note that each value starts with "fr-" in our HTML
    //     cy.get('#internships_new_superscript').should('have.value', 'Work from Home')

    //     cy.get('#internships_new_superscript')
    //     .select(['Work from Home', 'Internship in Bangalore'])
    //     // when getting multiple values, invoke "val" method first
    //     .invoke('val')
    //     .should('deep.equal', ['Work from Home', 'Internship in Bangalore'])        
    // });
    it('.Clicks-checking', () => {
        cy.get('#internships_new_superscript').click()
        cy.get('#close_popup').click()        
    });

    

})