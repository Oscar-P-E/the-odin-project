const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina',
    'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here

function chooseName() {
  let randName = names[Math.floor(Math.random() * names.length)];
  return randName;
}

para.textContent = chooseName();

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
