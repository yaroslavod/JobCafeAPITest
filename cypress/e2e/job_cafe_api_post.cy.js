/// <reference types = "Cypress"/>



describe('Get Jobs Test', () => {

    let positionBody = {
        "position": "QA",
        "company": "LegionQAYaroslav",
        "location": "Tel Aviv-Yafo, Israel",
        "seniority": "junior",
        "link": "www.linkedin.com",
        "description": "some text",
        "time": "two hours ago",
        "salary": "100k",
        "date": "2020-06-06T12:00:00"
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
            expect(Response.body.company).eq('LegionQAYaroslav')



        })

    })

    afterEach(() => {
        cy.deletePositionById(id)
    })

})
