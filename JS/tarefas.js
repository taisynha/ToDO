function createCloseButton(li) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("Excluir");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = () => span.parentElement.style.display = "none";
}

document.querySelectorAll('li').forEach(createCloseButton);

document.querySelector('ul').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI')
        e.target.classList.toggle('checked');
});

function add() {
    let li = document.createElement('LI');
    let input_value = document.form_main.task.value;
    let input_text = document.createTextNode(input_value);

    li.appendChild(input_text);
    document.querySelector('ul').appendChild(li);
    document.form_main.task.value = "";

    createCloseButton(li);
}
var text = document.getElementById('text');
    var button = document.getElementById('button');

    email.addEventListener('focus',()=>{
        email.style.borderColor = "#4A5F6A";
    });
    email.addEventListener('blur',()=>{
        email.style.borderColor = "#ccc";
    });