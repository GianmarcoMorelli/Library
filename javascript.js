let myLibrary = [];

function Book(title, author, numberOfPages,read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
  this.info = function(){
    return `${title} by ${author}, ${numberOfPages} pages, ${read}`;
  }
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function displayBooks(bookList){
    let len = bookList.length;
    let i = 0;
    for(i = 0; i < len - 1; i++){
      const board = document.getElementsByClassName('blah');
      board[0].remove();
    }

    for(i = 0; i < len; i++){
      console.log(bookList[i]);
      
      const board = document.createElement('div');
      const paragraph = document.createElement('p');
      const deleteButton = document.createElement('button');
      const mainContainer = document.getElementsByClassName('container');
      const updateStatusButton = document.createElement('button');

      
      board.className = 'blah';
      board.setAttribute('id',`div${i}`);
      paragraph.className = 'p-div';
      paragraph.setAttribute('id',`p${i}`);
      deleteButton.className = 'deleteButton';
      deleteButton.setAttribute('id',`del${i}`);
      deleteButton.setAttribute('onclick', `deleteButtonAction(${i})`); // passing the "i" to the function in order to delete the right div
      updateStatusButton.className = 'updateStatusButton';
      updateStatusButton.setAttribute('id',`upd${i}`);
      updateStatusButton.setAttribute('onclick', `updateStatusAction(${i})`); // passing the "i" to the function in order to update the right div
      
      paragraph.innerHTML = `${bookList[i].title} by ${bookList[i].author}, ${bookList[i].numberOfPages} pages, read: ${bookList[i].read}`;
      deleteButton.innerHTML = 'DELETE BOOK';
      updateStatusButton.innerHTML = 'UPDATE READ STATUS';
      
      mainContainer[0].appendChild(board);
      board.appendChild(paragraph);
      board.appendChild(deleteButton);
      board.appendChild(updateStatusButton);
    }
}

function buttonPressed(){
  let newTitle;
  let newAuthor;
  let newNumberOfPages;
  let newRead;
  let newBookTmp;

  newTitle = prompt("What is the Title? ");
  newAuthor = prompt("What is the Author? ");
  newNumberOfPages = prompt("What is the Number of Pages? ");
  newRead = prompt("Have you read the book? (yes/no) ");

  newBookTmp = new Book(newTitle,newAuthor,newNumberOfPages,newRead);
  addBookToLibrary(newBookTmp);
  displayBooks(myLibrary);
};

function updateParagraphIndex(inputNum){
  let len = myLibrary.length;
  let i = inputNum;
  for(i = inputNum; i < len; i++){
    let elemToUpdate = document.getElementById(`p${i + 1}`);
    let elemToUpdate2 = document.getElementById(`upd${i + 1}`);
    let elemToUpdate3 = document.getElementById(`div${i + 1}`);
    let elemToUpdate4 = document.getElementById(`del${i + 1}`);
    elemToUpdate.setAttribute('id',`p${i}`);
    elemToUpdate2.setAttribute('id',`upd${i}`);
    elemToUpdate2.setAttribute('onclick',`updateStatusAction(${i})`);
    elemToUpdate3.setAttribute('id',`div${i}`);
    elemToUpdate4.setAttribute('id',`del${i}`);
    elemToUpdate4.setAttribute('onclick',`deleteButtonAction(${i})`);
  }
}

function deleteButtonAction(num){
  const divToDel = document.getElementById(`div${num}`);
  divToDel.remove();
  myLibrary.splice(num,1);
  updateParagraphIndex(num);
};

function updateStatusAction(num){
  let currentStatus = myLibrary[num].read;
  if(currentStatus === 'yes'){
    document.getElementById(`p${num}`).innerHTML = `${myLibrary[num].title} by ${myLibrary[num].author}, ${myLibrary[num].numberOfPages} pages, read: no`;
    myLibrary[num].read = 'no';
  }else{
    document.getElementById(`p${num}`).innerHTML = `${myLibrary[num].title} by ${myLibrary[num].author}, ${myLibrary[num].numberOfPages} pages, read: yes`;
    myLibrary[num].read = 'yes';
  }
}



