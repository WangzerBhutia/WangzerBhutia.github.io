
async function glow(){
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    for( let checkbox of checkboxes){
        await new Promise(r => setTimeout(r, 2000));
        if(checkbox.checked === true) checkbox.checked = false;
        else checkbox.checked = true;
    }
}   

let interval = setInterval(glow,4000);


