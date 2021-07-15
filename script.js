

const addbtn=document.getElementById('add');
addbtn.addEventListener('click',()=>{
    addNewNotes();
});

function addNewNotes(){
    const note=document.createElement('div');
    note.classList.add('note'); 
    note.innerHTML=`<div class="notes">
    <div class="tools">
        <button class="edit"><i class="far fa-edit"></i></button>
        <button class="delete"><i class="far fa-trash-alt"></i></button>
    </div>
    <div class="main hidden ">

    </div>
    <textarea name="" id=""></textarea>
</div>`;
const notesEl= note.querySelector('.notes');
const editbtn= note.querySelector('.edit');
const deletebtn= note.querySelector('.delete');

 const main =note.querySelector('.main');
 const textarea=note.querySelector('textarea');

 editbtn.addEventListener("click",()=> {
     main.classList.toggle("hidden");
     textarea.classList.toggle('hidden');
 });
deletebtn.addEventListener('click',()=>{
    note.remove();
});
 textarea.addEventListener('input',(e)=> {
     const {value}=e.target;
     main.innerHTML=marked(value);

 });

document.body. appendChild(note);
}



