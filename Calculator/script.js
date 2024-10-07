let string = " " ;                                           //we are taking it for the input box (initially it will be blank)
let buttons = document.querySelectorAll('.button');          //Selecting all the button classes
Array.from(buttons).forEach((button) => {                    //Creating an array from the buttons and for each button we are creating an array function.
    button.addEventListener('click', (e) =>{   
        if(e.target.innerHTML=='=')
        {
            string = eval(string);
            document.querySelector('.input').value = string;
        }

        else if(e.target.innerHTML=='AC')
        {
            string = " ";
            document.querySelector('.input').value = string;
        }

        else if(e.target.innerHTML=='x')
        {
            string = string.slice(0, -1);
            document.querySelector('.input').value = string;
        }

        else if(e.target.innerHTML=='+/-')
        {
            string = -string;
            document.querySelector('.input').value = string;
        }

        else if(e.target.innerHTML=='.')
        {
            if(string == " ")
            {
                s='0.';
                string = string + s;
                document.querySelector('.input').value = string;

            }

            else if(string != " ")
            {
                s='.';
                string = string + s;
                document.querySelector('.input').value = string;
            }
            
        }
        

        else
        {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('.input').value = string;

        }
        
    })
})


