// function toggleMenu() {
    //const navLinks = document.getElementById("navLinks");
   // if (navLinks.style.display === "flex") {
     //   navLinks.style.display = "none";
   // } else {
      //  navLinks.style.display = "flex";
   // }
//}//

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



//Submit form and Payment direction

function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show-menu');
}

function submitForm() {
    const form = document.getElementById('registrationForm');
    if (form.checkValidity()) {
        document.getElementById('paymentInstructions').style.display = 'block';
    } else {
        alert('Please fill out all required fields.');
    }
}

function confirmPayment() {
    // Hide payment instructions and show form submission message
    document.getElementById('paymentInstructions').style.display = 'none';
    document.getElementById('paymentConfirmation').style.display = 'block';

    // Send form data to Google Sheets
    const formData = new FormData(document.getElementById('registrationForm'));
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('https://script.google.com/macros/s/AKfycbw7SteBwMFYFUIJEf6-pGNdP1vay1DyMF8SLa17B24gFnTtaUZeIoutYFtSdd-PrvGb/exec', {
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        alert('Registration submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem with the registration.');
    });
}

//conatct form

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('https://script.google.com/macros/s/AKfycbzk5BBdyfFLgoKHhhcN_WWJyknaTYUnXBG2EbojpjXgh3BFyFPJLtV27zEefu6SJ-zl/exec', { // Replace with your Google Apps Script Web App URL
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(result => {
        alert('Your message has been sent successfully!');
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem with sending your message.');
    });
});

//publications
function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        if (tab.id === tabId) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });
}

function toggleContent(button) {
    const fullText = button.nextElementSibling;
    if (fullText.style.display === 'none' || fullText.style.display === '') {
        fullText.style.display = 'block';
        button.textContent = 'Read less';
    } else {
        fullText.style.display = 'none';
        button.textContent = 'Read more';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-button').click(); // Open the first tab by default
});

//new publications
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}