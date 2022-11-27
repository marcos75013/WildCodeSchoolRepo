let message = "message received successfully. We will contact you quickly";

document.getElementById('formContact')
        .addEventListener("submit", function (e) {
            console.log(e);
            e.preventDefault();
            alert(message)
        });