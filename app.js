const Note = document.querySelector('#add')
const main  = document.querySelector('body');
const getlocalstorage = JSON.parse(localStorage.getItem('notes')) 
if(getlocalstorage){
    getlocalstorage.forEach(((item)=>{
        NoteEvent(item)
    }))
}


Note.addEventListener('click', ()=>{
    NoteEvent()
} )



function NoteEvent(valuenote = '') {
 
    const element = document.createElement('div')
           element.classList.add('article')
           element.classList.add('note')
           element.innerHTML = ` <div >
           <div class="notes">
               <div class="tools">
                   <button class="edit"><i class="fas fa-edit"></i></button>
                   <button class="delete"><i class="fas fa-trash-alt"></i></button>
               </div>
               <div class="mainbtn ${valuenote ? '' : 'hidden'} ">
               <p class="paragraph "></p>
               </div>
               <textarea class="text ${valuenote ? 'hidden' : ''}"></textarea>
           </div>
       </div>`

       const textarea = element.querySelector('textarea')
       const p = element.querySelector('.paragraph')
      const Delete = element.querySelector('.delete')
      const mainbtn = element.querySelector('.mainbtn')
      const editBtn = element.querySelector('.edit')
       textarea.value = valuenote
       p.innerHTML = marked( valuenote);
  
     

         textarea.addEventListener('input', ((e)=>{
               const value = e.target.value
               p.innerHTML = marked(value);
               
               updateLS()
         }))
         
         
    editBtn.addEventListener("click", () => {
        mainbtn.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
    });
          Delete.addEventListener('click',((e)=>{
            // const parent = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
            //  main.removeChild(parent)
             element.remove();
            updateLS()

          }))
    
       main.appendChild(element)


      
}








function updateLS() {
    const notesText = document.querySelectorAll("textarea");

    const notes = [];

    notesText.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}



const colorOne =document.querySelector('.color-one')
const colortwo = document.querySelector('.color-two')
const lihtblue = '--lightblue'
const blue = '--blue'
colorOne.addEventListener('input',(color)=> document.documentElement.style.setProperty(lihtblue, color.target.value) )  
colortwo.addEventListener('input',(color)=> document.documentElement.style.setProperty(blue, color.target.value) )  





// localStorage.clear()










// add.addEventListener('click', clickbtn)

// function clickbtn() {
//     const element = document.createElement('article')
//        const  id = new Date().getTime()
//        element.classList.add('article')
//        const attri = document.createAttribute('data-id')
//        attri.value = id
//        element.setAttributeNode(attri)
//        element.innerHTML = ` <div class="note">
//        <div class="notes">
//            <div class="tools">
//                <button class="edit"><i class="fas fa-edit"></i></button>
//                <button class="delete"><i class="fas fa-trash-alt"></i></button>
//            </div>
//            <div class="main hidden">
//            <p class="paragraph"></p>
//            </div>
//            <textarea class="text"></textarea>
//        </div>
//    </div>`
  
//    x.appendChild(element)
//    const  text = document.querySelectorAll('.text')
//    const Delete = document.querySelectorAll('.delete')
//     text.forEach((item)=> item.addEventListener('change', yap))
//     Delete.forEach((item)=> item.addEventListener('click',  deleteBTN))
    


   
// }




// function yap (e) {
//     const paragraph = e.target.parentElement.querySelector('.paragraph')
//     const id = e.target.parentElement.parentElement.parentElement.getAttribute('data-id')
//     const valuetext  = e.target.value
//     paragraph.innerHTML = valuetext
//     const notesText = document.querySelector("textarea").value
//    LocalStorage(id,valuetext)
   
  
    
// }
// function deleteBTN (e) {
//     const parent = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
//    x.removeChild(parent)


// }




