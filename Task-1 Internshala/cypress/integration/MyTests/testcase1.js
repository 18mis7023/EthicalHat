describe('My TestSuite', () => 
{
    
    it('Verify title of the page!', () =>
    {
        cy.visit('https://www.nopcommerce.com/en')  //to visit the website 
        cy.title().should('eq','Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce') //here should be checking whether it is there or not (it will check whethe the name is nopcommerce... or not)
        cy.get('.menu-toggle > .sprite-image').click()
        cy.get(':nth-child(1) > .default > :nth-child(1)').click()
        // cy.get('#mobile-menu > :nth-child(1) > .sublist > :nth-child(1) > a').click()
        cy.get('.mobile-menu-back').click()
        // cy.get('.mobile-menu-back').click()
        cy.get(':nth-child(2) > .default > :nth-child(1)').click()
        cy.get('.mobile-menu-back').click()
        cy.get(':nth-child(3) > .default > :nth-child(1)').click()
        cy.get('.mobile-menu-back').click()
        cy.get(':nth-child(4) > .default > :nth-child(1)').click()
        // cy.get('.mobile-menu-back').click()
        

        
    })
    it('Verify Login of the page!', () =>
    {
        cy.visit('https://www.nopcommerce.com/en')  //to visit the website 
        cy.get('.userlink').click()
        cy.get('.user-wrapper > :nth-child(1)').click()
        // cy.get('.mobile-menu-back').click()
        

        
    })
    // it('Clicking Button', () =>
    // {
    //     cy.visit('https://www.nopcommerce.com/en')  //to visit the website 
    //     cy.title().should('eq','Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce') //here should be checking whether it is there or not (it will check whethe the name is nopcommerce... or not)
    // })
    

  })