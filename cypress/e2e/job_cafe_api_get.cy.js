/// <reference types = "Cypress"/>



describe('Get Jobs Test', () => {

  it('get all jobs', () => {
    // powlet zapros po ykazannomy url i proveryaem otvet
    cy.request('/').then((Response) => {
      console.log(Response),
        expect(Response.status).eq(200),
        expect(Response.statusText).eq("OK")
    })
  })

  it('verify jobs results list', () => {
    // powlet zapros po ykazannomy url i proveryaem otvet
    cy.request('/').then((Response) => {
      console.log(Response.body.content),
      expect(Response.body.content).not.empty
       
    })
  })

  it('jobs listing has all the details', () => {
    // powlet zapros po ykazannomy url i proveryaem otvet
    cy.request('/').then((Response) => {
      console.log(Response.body.content),
      expect(Response.body.content[0]).have.property("id"),
      expect(Response.body.content[0].id).not.null,
      expect(Response.body.content[0].id).eq("63b44b6b74f47208c44470d1")
       
    })
  })

  it('Assignment1', () => {
    // powlet zapros po ykazannomy url i proveryaem otvet
    cy.request('/').then((Response) => {
      var result = Response.body.content[1]
      console.log(result)
      expect(result).have.property("id")
      expect(result.id).eq("63b44a8174f47208c44470b3")

      expect(result).have.property("location")
      expect(result.location).eq("Edmonton, AB")

      expect(result).have.property("position")
      expect(result.position).eq("Project Manager IV - Enbridge")

      expect(result).have.property("link")
      expect(result.link).contain("http")
       
    })
  })

  it('search by location', () => {
    // powlet zapros po ykazannomy url i proveryaem otvet
    cy.request('/?location=Toronto').then((Response) => {
      let resultsList = Response.body.content
      console.log(resultsList)
      expect(Response.status).eq(200)

      for(let i=0; i<resultsList.lenght; i++){
        expect(resultsList[i].location).eq('Tel Aviv-Yafo, Israel')
      }
       


    })
  })



})