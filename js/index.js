const hambergerIcon = document.querySelector('#hamberger-icon')
const navigation = document.querySelector('#navigation')
const closeBtn = document.querySelector('#navigation .close-btn')

hambergerIcon.addEventListener('click', () => {
    navigation.classList.toggle('open')
})

closeBtn.addEventListener('click', () => {
    navigation.classList.remove('open')
})

