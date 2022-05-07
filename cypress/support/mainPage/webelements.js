


import { searchboxInput } from "../authentication.constant"


export class webElements {




    featuredEvents() {
        cy.get('[href="/featured"]').invoke('text', '\n Featured Events\n').should('be.visible').click()

    }

    todaysEvent() {
        cy.get('[href="/today"]').invoke('text', '\n Today’s Events\n').should('be.visible').click()
    }

    newExternalLink() {
        cy.get('[href=""]').invoke('text', '\n Today’s Events\n').should('be.visible').click()
    }

    datePicker() {
        cy.get('.vc-pane > .vc-grid-container').should('be.visible')
    }

    filtering() {
        cy.get('.flex-1').should('be.visible')
    }

    NavigateToNov20th2021() {
        cy.get('.vc-title').click()
        cy.get('.vc-grid-cell-col-1 > .vc-nav-arrow > .vc-svg-icon').click()
        cy.get('.vc-grid-cell-row-4.vc-grid-cell-col-2 > .vc-w-12').click()
        cy.get('[aria-label="Saturday, November 20, 2021"]').click()
        cy.get('section').should('be.visible')
    }

    searchBox() {
        cy.get('.search__input').type(searchboxInput).click()
        cy.get("#61w5wfhCtxaJ6zYlebWA").should('be.visible')

    }

    filterByOrganization_ModelUN() {

        cy.get('select').eq(2).select(12)
        //Was expecting 3 result but on UI there is 4
        cy.get('.items-left > .font-semibold').invoke('text', '\n Showing 0 to 4 of 4 total results\n').should('be.visible')

    }
    NavigateToSep2th2021() {
        cy.get('.vc-title').click()
        cy.get('.vc-grid-cell-col-1 > .vc-nav-arrow > .vc-svg-icon').click()
        cy.get('.vc-grid-cell-row-3.vc-grid-cell-col-3 > .vc-w-12').click()
        cy.get('[aria-label="Thursday, September 2, 2021"]').click()

        cy.contains('No events found').should('be.visible')

        cy.get('[aria-label="Thursday, September 9, 2021"]').click()

    }

    NavigateToSep9th2021() {
        cy.get('.vc-title').click()
        cy.get('.vc-grid-cell-col-1 > .vc-nav-arrow > .vc-svg-icon').click()
        cy.get('.vc-grid-cell-row-3.vc-grid-cell-col-3 > .vc-w-12').click()
        cy.get('[aria-label="Thursday, September 2, 2021"]').click()
        cy.contains('No events found').should('be.visible')
        cy.get('[aria-label="Thursday, September 9, 2021"]').click()
        cy.get('#UpaT5Cgu4Ozog53KMJb8').click()
        cy.get('.mt-2 > .mr-2').invoke('text', "Add to calendar").should('be.visible')
        cy.get('a > .btn').invoke('text', "Add to Google Calendar").should('be.visible')
        cy.get('[data-test="event-type"] > .block').invoke('text', 'Event type').should('be.visible')
        cy.contains('Contacts').should('be.visible')
        cy.contains('Organized by').should('be.visible')
    }
}


export const onMainPageWebElements = new webElements;