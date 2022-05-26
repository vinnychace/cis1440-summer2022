
function start() {
    let theButton = document.querySelector('#btnGetTotal'); //document.getElementById('btnGetTotal');
    theButton.addEventListener('click', calculateTotal);
}//end function

function calculateTotal() {
    let totalOutput = document.querySelector('#total');
    let flavor = document.querySelector('#flavor').value;


    let cherries = document.querySelector ('#cherries').checked;
    let sprinkles = document.querySelector ('#sprinkles').checked;
    let syrup = document.querySelector ('#syrup').checked;    

    let total = 1.25;

    if(cherries) {
        total += 0.25;
    }

    if(sprinkles) {
        total += 0.50;
    }

    if(syrup) {
        total += 0.25;
    }

    //output to span
    totalOutput.innerHTML = "Total:     $" + total;

} // end calculateTotal

window.addEventListener('load', start); //window.onload = start; //equivalent