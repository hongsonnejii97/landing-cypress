describe('Landing Page Test', () => {
  beforeEach(() => {
    // Thay 'yourpage.html' bằng đường dẫn tới trang của bạn
    cy.visit('./public/dietpro-vn-index4/index.html') 
  })

  it('Contains specific content', () => {

    cy.wait(1000)
    
    // Check data
    cy.get('[data-cy="kh"]').contains('Áp dụng cho 99 khách hàng đăng ký đầu tiên').should('exist')
    cy.wait(1000)

    cy.get('[data-cy="price"]').contains('590.000đ').should('exist')
    cy.wait(1000)

    cy.window().then((win) => {
      win.jQuery('html, body').animate({
        scrollTop: win.jQuery('#SECTION18').offset().top
      }, 5000)
    })
    cy.wait(5000)

    cy.window().then((win) => {
      win.jQuery('html, body').animate({
        scrollTop: win.jQuery('#SECTION1').offset().top
      }, 5000)
    })
    cy.wait(5000)

  })

  it('Test form', () => {

    cy.wait(1000)
    cy.get('[data-cy="buyNow"]').click()
    
    cy.wait(1000)
    cy.get('[data-cy="name"]').type('Lead test')

    cy.wait(1000)
    cy.get('[data-cy="phone"]').type('0968s595678')

    cy.wait(1000)
    cy.get('[data-cy="submit"]').click()

    cy.wait(2000)
    cy.get('[data-cy="phone"]').clear().type('09685956748')

    cy.wait(1000)
    cy.get('[data-cy="submit"]').click()

    cy.wait(3000)
    cy.go('back')

  })

  it('test on mobile', () => {

    cy.viewport(430, 932)
    cy.reload()
    cy.wait(3000)

    cy.window().then((win) => {
      win.jQuery('html, body').animate({
        scrollTop: win.jQuery('#SECTION18').offset().top
      }, 5000)
    })
    cy.wait(5000)

    cy.window().then((win) => {
      win.jQuery('html, body').animate({
        scrollTop: win.jQuery('#SECTION1').offset().top
      }, 5000)
    })
    cy.wait(5000)

    // test form
    cy.get('[data-cy="buyNow"]').click()
    
    cy.wait(1000)
    cy.get('[data-cy="name"]').type('Lead test')

    cy.wait(1000)
    cy.get('[data-cy="phone"]').type('0968s595678')

    cy.wait(1000)
    cy.get('[data-cy="submit"]').click()

    cy.wait(2000)
    cy.get('[data-cy="phone"]').clear().type('09685956748')

    cy.wait(1000)
    cy.get('[data-cy="submit"]').click()

    cy.wait(3000)
    cy.go('back')

    cy.window().then((win) => {
      win.jQuery('html, body').animate({
        scrollTop: win.jQuery('#SECTION1').offset().top
      }, 5000)
    })

  })

})
