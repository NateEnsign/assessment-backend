const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById('fortuneButton')

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

fortuneBtn.addEventListener('click', getFortune)



/////////


const booksContainer = document.querySelector('#books-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/books`

const booksCallback = ({ data: books }) => displayBooks(books)
const errCallback = err => console.log(err)

const getAllBooks = () => axios.get(baseURL).then(booksCallback).catch(errCallback)
const createBook = body => axios.post(baseURL, body).then(booksCallback).catch(errCallback)
const deleteBook = id => axios.delete(`${baseURL}/${id}`).then(booksCallback).catch(errCallback)
const updateBook = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(booksCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let price = document.querySelector('#price')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        price: price.value, 
        imageURL: imageURL.value
    }

    createBook(bodyObj)

    title.value = ''
    price.value = ''
    imageURL.value = ''
}

function createBookCard(book) {
    const bookCard = document.createElement('div')
    bookCard.classList.add('book-card')

    bookCard.innerHTML = `<img alt='book cover image' src=${book.imageURL} class="book-cover-image"/>
    <p class="title">${book.title}</p>
    <div class="btns-container">
        <button onclick="updateBook(${book.id}, 'minus')">-</button>
        <p class="book-price">$${book.price}</p>
        <button onclick="updateBook(${book.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteBook(${book.id})">delete</button>
    `


    booksContainer.appendChild(bookCard)
}

function displayBooks(arr) {
    booksContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createBookCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllBooks()




