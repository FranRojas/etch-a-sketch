const container =  document.querySelector('.container');
let userSelection;
console.log('base', userSelection);

let btn = document.querySelector('.btn')
    btn.addEventListener('click',resetLayout)



    function resetLayout() {
        //prompt('ingrese numero')
        if(container.firstChild){
            container.removeChild(container.firstChild);
            resetLayout();
        } else {
            userSelection = parseInt(prompt('ingrese numero'))
            createLayout(userSelection)
        }
      
    }
   let createLayout = (userSelection) => {
        let h = `${(500 / userSelection)}px`;
            for (let i = 0;i <userSelection; i++){
                    let row = document.createElement('div')
                    row.classList.add('row');
                    container.appendChild(row);
                    row.textContent = i;
                        for (let j = 0; j <userSelection;  j++){
                            let box = document.createElement('div');
                            box.classList.add('box');
                            box.style.height = h;
                            box.style.width =h;
                            box.textContent = j;
                            row.appendChild(box);
                            box.addEventListener("mouseover", function( event ) {
                                // highlight the mouseover target
                                event.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                                }
                            )
                    }
                    
            }

   }
   createLayout(userSelection = 16)