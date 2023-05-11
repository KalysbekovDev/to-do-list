const btn = document.querySelector('.add-btn')
const input = document.querySelector('.text-input')
const ul = document.querySelector('.list')
const body = document.querySelector('body')
const error = document.querySelector('.error-text')

error.style.color = 'orange'
error.style.fontWeight = 'bold'

// const check = document.querySelector('.check')
function addTask(){
    let newList = `<li class="list-group-item d-flex justify-content-between aligh-items-center">
    <span>
    <input class="check" type="checkbox">
        ${input.value}
    </span>
        <button class="delete-btn btn btn-danger">delete</button>
    </li>`
    if (input.value.trim().length > 20){
        error.innerHTML = '20 символдон ашык жазбаныз!'
    }else if (input.value.trim() === ''){
        input.style.border = '3px solid red'
    }else {
        ul.innerHTML += newList
        input.style.border = ''
        error.innerHTML = ''
        input.value = ''
    }
    
}
btn.addEventListener('click', () => addTask())

input.addEventListener('keydown', (e) =>{
    if (e.key === 'Enter') addTask()
})
ul.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.classList.contains('delete-btn')) {
        const conf = confirm('ТЫ УВЕРЕН?')
        if (conf) e.target.parentNode.remove()
    }
    if (e.target.classList.contains('check')){
        e.target.classList.toggle('line')
    }
})
const l = confirm()
