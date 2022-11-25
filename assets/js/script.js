let message = "The kingdom of colchis, thanks you for your interest, we will get back to you as soon as possible.";


document.getElementById('formContact')
        .addEventListener("submit", function (e) {
            e.preventDefault();
            alert(message)
        });