/// <reference types = "Cypress"/>

const { result, eq } = require("cypress/types/lodash")


describe('Get Jobs Test', () => {

    let positionBody = {
        "position": "QA",
        "company": "LegionQAYaroslav",
        "location": "Toronto",
        "seniority": "junior",
        "link": "www.linkedin.com",
        "description": "some text",
        "time": "two hours ago",
        "salary": "100k",
        "date": "2020-06-06T12:00:00"
    }

    it('create job listing test', () => {

        cy.request({
            method: 'POST',
            url: '/create',
            body: positionBody
        }).then((Response) => {
            console.log(Response.body)



        })

    })
})
