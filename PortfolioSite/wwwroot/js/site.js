/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from being submitted normally


    const data = {
        'name': document.getElementById('name').value,
        'email': document.getElementById('email').value,
        'comment': document.getElementById('comment').value,
    };

    console.log(data);

    // Send the form data using POST request
    fetch('https://muradovmailsender.azurewebsites.net/api/sendemail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    //    .then(response => response.json())
    //    .then(result => {
    //        // Handle the response here (e.g., display a success message)
    //        console.log('Form submitted successfully:', result);
    //    })
    //    .catch(error => {
    //        // Handle any errors here (e.g., display an error message)
    //        console.error('Error submitting form:', error);
    //    });
});
