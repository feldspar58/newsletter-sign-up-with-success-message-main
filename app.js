document.addEventListener("DOMContentLoaded", function () {
    const checkBoxes = document.querySelectorAll('.custom-checkbox');
    const inputBox = document.querySelector('input[type=email]')
    const emailError = document.querySelector('#email');
    const error = document.querySelector('#name-error')
    const successBtn = document.querySelector('.btn');
    const dismissBtn = document.querySelector('.btn2');
    const bold = document.querySelector('.bold');
    const success = document.querySelector('.success');
    const cont = document.querySelector('.container');


   

    checkBoxes.forEach(function(checkBox) {
        checkBox.addEventListener('click', function() {
            if (this.classList.contains('checked')) {
                this.classList.remove('checked');
            } else {
                this.classList.add('checked');
            }
            console.log(`Checkbox ${this.id} checked: ${this.classList.contains('checked')}`);
        });
    });

    successBtn.addEventListener('click', function() {
        console.log('Success button clicked');
        const newEmail = inputBox.value
        const style = document.createElement('style');

        if (emailError.value === "") {
            error.style.display = 'flex';
            emailError.style.border = '2px solid var(--Tomato)';
            style.textContent = `
            .input-error::placeholder {
                color:  var(--Tomato);
            }
        `;

        document.head.append(style);
           
        } else {
            success.style.display = 'flex';
            cont.style.display = 'none';
             error.style.display = 'none';
            emailError.style.border = '2px solid var(--Dark-Slate-Grey)';
            style.textContent = `
            .input-error::placeholder {
                color: initial;
            }
        `;
        document.head.append(style);

            console.log('Switched to success view');
            bold.textContent = newEmail
        }
        
    });

    dismissBtn.addEventListener('click', function() {
        console.log('Dismiss button clicked');
        if (cont.style.display === 'flex') {
            success.style.display = 'flex';
            cont.style.display = 'none';
        } else {
            cont.style.display = 'flex';
            success.style.display = 'none';
        }
    });
});
