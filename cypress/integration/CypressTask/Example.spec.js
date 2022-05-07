


import { onMainPageWebElements } from '../../support/mainPage/webelements'

describe('Upcoming Events Page Testing', () => {


    beforeEach('Navigate to page to damian-events.coursedog.com ', () => {

        cy.NavigateToPageUpcomingEvents()

    })

    it('Verify Web Elements From header are  visible on the main page', () => {
        onMainPageWebElements.featuredEvents()
        onMainPageWebElements.todaysEvent()
        onMainPageWebElements.datePicker()
        onMainPageWebElements.filtering()

    })

    it('US1', () => {
        onMainPageWebElements.NavigateToNov20th2021()
        onMainPageWebElements.searchBox()
        onMainPageWebElements.filterByOrganization_ModelUN()


    })

    it('US2', () => {
        onMainPageWebElements.NavigateToSep2th2021()
        onMainPageWebElements.featuredEvents()

        //According to acceptance criteria there should be 3 events but there is no futured events shows on these dates
        //Going to test some other dates regarding of user story 2 

    })


    it('US2 Part2', () => {
        onMainPageWebElements.NavigateToSep9th2021()

    })

    //Has connected all the tests to the cypress dashboard with projectId and provided the script in package.json file

    //We could also do some more assertion by using fixtures files (Mostly I would use json file)
})