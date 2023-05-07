/* const heart = document.querySelector('#heart');
heart.addEventListener('click',  () => {
alert("Thank you for calculating me!")
})
*/
const modal = document.querySelectorAll('.modal');
const heartBtn = document.getElementById('heart');
const h1 = document.getElementById('h1');

const span = document.getElementsByClassName('close')[0];

heartBtn.onclick = function() {
    modal.style.display = 'block';
    document.body.style.filter = 'blur(4px)';
    h1.style.filter ='none'; // remove the blur filter from h1 element
}

span.onclick = function () {
    modal.style.display = 'none';
    document.body.style.filter = 'none';
}

window.onclick = function (event) {
    if(event.target == modal) {
        modal.style.display = 'none';
        document.body.style.filter = 'none';
    }
}
