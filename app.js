window.addEventListener('load', () => {
    let text = document.querySelector('#input-form-text');
    let form = document.querySelector('form');
    let container = document.querySelector('.container');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
        if (text.value == '') { alert('Please Enter Task')}
        else {
            let task = text.value;
            // task class 
            let tasks = document.createElement('div');
            tasks.classList.add('task');
            container.appendChild(tasks);

            // content class 
            let content = document.createElement('div');
            content.classList.add('content');
            tasks.appendChild(content);

            // input tag 
            let input_text = document.createElement('input');
            input_text.classList.add('input-text');
            input_text.type = 'text';
            input_text.value = task;
            input_text.setAttribute('readonly', true)
            content.appendChild(input_text);

            // btn class 
            let btn = document.createElement('div');
            btn.classList.add('btn');
            tasks.appendChild(btn)

            // button under btn class
            let clear = document.createElement('button');
            clear.setAttribute('id', 'done');
            clear.innerHTML = `<i class="fa-solid fa-check"></i>`;

            let edit = document.createElement('button');
            edit.setAttribute('id', 'edit');
            edit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

            let del = document.createElement('button');
            del.setAttribute('id', 'del');
            del.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

            btn.appendChild(clear);
            btn.appendChild(edit);
            btn.appendChild(del);

            // event on button 
            clear.addEventListener('click', () => {
              if(input_text.style.textDecoration == 'none'){
                input_text.style.textDecoration = 'line-through';
                tasks.style.backgroundColor = '#938f8f';}
              else{
                input_text.style.textDecoration = 'none';
                tasks.style.backgroundColor = '#fff';
              }
            })

            edit.addEventListener('click', () => {
                if (input_text.style.textDecoration != 'line-through' && tasks.style.backgroundColor != '#938f8f') {
                    input_text.removeAttribute('readonly');
                    input_text.style.color = 'red';
                    input_text.focus();
                }
                else {
                    input_text.setAttribute('readonly', true);
                    input_text.style.color = 'black';
                }
            })
            del.addEventListener('click', () => {
                    container.removeChild(tasks)
                })
            text.value = '';
        }
    })


})