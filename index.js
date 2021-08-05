console.log('Hi')

let message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault()
 let inputField = document.querySelector('input')
 let movie = document.createElement('li')
 let movieTitle = document.createElement('span')
 movieTitle.addEventListener('click', crossOffMovie)

 movieTitle.textContent = inputField.value
 movie.appendChild(movieTitle)

 let deleteBtn = document.createElement('button')
 deleteBtn.textContent = 'X'
 movie.appendChild(deleteBtn)
 deleteBtn.addEventListener('click', deleteMovie)

 let ul = document.querySelector('ul')
 ul.appendChild(movie)
 inputField.value = ''
 
}

function deleteMovie(event){
   event.target.parentNode.remove()
    message.textContent = 'Movie Deleted'
    // revealMessage()
}

function crossOffMovie(event){
 event.target.classList.toggle('checked');
 if(event.target.classList.contains('checked')){
    message.textContent = 'Watched'
 }else{
    message.textContent = 'Added back'
 }
}

document.querySelector('form').addEventListener('submit', addMovie)

