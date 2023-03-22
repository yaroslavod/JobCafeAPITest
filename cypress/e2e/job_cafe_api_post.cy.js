/// <reference types = "Cypress"/>
import { data } from '..//fixtures/params.json'


describe('Get Jobs Test', () => {

    let positionBody = {
        "position": "QA9",
        "company": "LegionQAYaroslav9",
        "location": "Tel Aviv-Yafo, Israel9",
        "seniority": "junior",
        "link": "www.linkedin.com",
        "description": "some text",
        "time": "two hours ago",
        "salary": "100k",
        "date": "2013-06-06T12:00:00"
    }

    let adminKey = 'adminadmin'
    let id;

    it('create job listing test', () => {

        cy.request({
            method: 'POST',
            url: '/create',
            body: positionBody,
            qs: { key: adminKey }
        }).then((Response) => {
            console.log(Response.body)
            id = Response.body.id
            expect(Response.status).eq(201)
            expect(Response.body.company).eq('LegionQAYaroslav9')



        })

    })

    it('create job listing test from fixture', () => {

        data.forEach(element => {
// vzytie data iz fixture i podstavlenie ix
            cy.request({
                method: 'POST',
                url: '/create',
                body: element,
                qs: { key: adminKey }
            }).then((Response) => {
                console.log(Response.body)
                id = Response.body.id
                expect(Response.status).eq(201)
                expect(Response.body.company).eq(element.company)
                cy.deletePositionById(id)


            })
        })

    })

    afterEach(() => {
        cy.deletePositionById(id)
    })

})
