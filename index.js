
document.getElementById('btn-transport').addEventListener('click', () => {
    document.querySelector('.main-container').classList.add('d-none')
    document.querySelector('.transport-container').classList.remove('d-none')
})

const backToMain = () => {
    document.querySelector('.main-container').classList.remove('d-none')
    document.querySelector('.transport-container').classList.add('d-none')
}