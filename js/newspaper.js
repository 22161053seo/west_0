var popup = document.querySelector('section');
var openBtn = document.getElementById('openBtn');
var closeBtn = document.getElementById('closeBtn');

openBtn.onclick = function() {
    popup.style.display = 'block';
}

closeBtn.onclick = function() {
    popup.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}
