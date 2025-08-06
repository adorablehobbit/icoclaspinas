const formId = document.getElementById("contact-us-form-id");

formId.addEventListener("submit", function(actualForm){
    actualForm.preventDefault();
    const formData = new FormData(formId);

    fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSevpmeVOs888riopXPMZ5d6Y1xUe4Y0sjx2Q21o0I60zgM2jQ/formResponse", {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then(() => {
        document.getElementById('statusMessage').style.display = 'block';
        this.reset();
    });
});