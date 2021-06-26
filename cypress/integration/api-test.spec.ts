describe('Test reqres API', () => {

    var name = 'Test'
    var job = "Engineer"
    var id = 2

    it('verify get all users', () => {
        cy.request({
            'method': 'GET',
            'url': '?page=1',
        }).then((response) => {
            //cy.log(JSON.stringify(response.body))
            expect(response.status).to.be.eq(200)
            expect(response.body.page).to.be.eq(1)
            expect(response.body.data.length).to.be.eq(6)
        })
    })

    it('verify create new user', () => {
        var name = 'Test'
        var job = "Engineer"
        cy.request({
            'method': 'POST',
            'url': '/',
            'body': {
                'name': name,
                'job': job 
            }
        }).then((response) => {
            //cy.log(JSON.stringify(response.body))
            expect(response.status).to.be.eq(201)
            expect(response.body.name).to.be.eq(name)
            expect(response.body.job).to.be.eq(job)
        })
    })

    it('verify update user details', () => {
        cy.request({
            'method': 'PUT',
            'url': '/' + id,
            'body': {
                'name': name,
                'job': job
            }
        }).then((response) => {
            //cy.log(JSON.stringify(response.body))
            expect(response.status).to.be.eq(200)
            expect(response.body.name).to.be.eq(name)
            expect(response.body.job).to.be.eq(job)
        })
    })

    it('verify get user details', () => {
        cy.request({
            'method': 'GET',
            'url': '/' + id,
        }).then((response) => {
            //cy.log(JSON.stringify(response.body))
            expect(response.status).to.be.eq(200)
            expect(response.body.data.id).to.be.eq(id)
        })
    })

    it('verify delete user', () => {
        cy.request({
            'method': 'DELETE',
            'url': '/' + id,
        }).then((response) => {
            expect(response.status).to.be.eq(204)
        })
    })

})