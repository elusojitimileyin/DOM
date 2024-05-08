// const wrapper = document.getElementById("wrapper");
// console.log(wrapper);
// const title = document.getElementsByClassName("title");
// console.log(title);
// console.log(Array.isArray(Array.from(title)));

// let head = document.getElementsByTagName("header");
// console.log(head)

// const  bookList = document.querySelectorAll("#book-list" )
// console.log(bookList.textContent)

// const  bookListOne = document.querySelectorAll("#book-list ul Li.name" );
// console.log(bookListOne[1].textContent);
// console.log(bookListOne)
// bookListOne.forEach(book => {
//    book.textContent += "(test)"
//    console.log(book.textContent)
// })
//  const add_book = document.getElementById("add-book");
//  console.log(add_book)
// const add_bookOne = document.getElementById("add-book");
// console.log(add_bookOne.textContent);
// console.log(add_bookOne.lastElementChild.textContent);
// console.log(add_bookOne.parentElement);
// console.log(add_bookOne.previousElementSibling);
// console.log(add_book.previousSibling);

const bookList = document.querySelector("#book-list ul")
console.log(bookList)
bookList.addEventListener("click", (e)=>{
 // console.log(e)
 let className = e.target.className
 // if(Object.is(className, "delete")) {
 if(className === "delete") {
  // console.log(className)
  let li = e.target.parentNode
  bookList.removeChild(li)
  // li.parentElement.removeChild(li)
  // console.log(className)
 }
})
const searchBook = document.forms["search-books"]
const listOfBooks= document.querySelectorAll("#book-list li .name")
// console.log(searchBook);
// console.log(listOfBooks);

searchBook.addEventListener("keyup", function (e) {
 let inputText = e.target.value.toLowerCase()
 // console.log(inputText)
 listOfBooks.forEach((book) => {
  let title = book.textContent.toLowerCase()
  // console.log(title)
  let isInclude = title.includes(inputText)
  let parentNode = book.parentNode
  console.log(parentNode)
  if (isInclude) {
   parentNode.style.display = "block"
  } else {
   parentNode.style.display = "none"
  }

// const searchBook = document.forms["search-books"];
// const listOfBooks = document.querySelectorAll("#book-list li .name")
// console.log(searchBook)
//
// searchBook.addEventListener("Keyup", function (e){
//  let inputText = e.target.value.toLowerCase()
//
//  listOfBooks.forEach((book)=>{
//   let title = book.textContent.toLowerCase()
//   let isIncludeInputText = title.includes()
//  })

 })

})
