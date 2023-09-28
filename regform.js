const form = document.getElementById('registrationForm');
        const displayData = document.getElementById('displayData');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const userData = `
                <h2>Registration Details:</h2>
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Password:</strong> ${password}</p>
            `;

            displayData.innerHTML = userData;
        });