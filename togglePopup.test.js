const togglePopup = require('./togglePopup')

test('changes popup to active', () => {
    expect(.getElementById("popup-1").classList.toggle()).toEqual(.getElementById("popup-1").classList.toggle("active"))
})