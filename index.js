document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector(".btn");
    const displayContainer = document.querySelector('.display-container');

    button.addEventListener('click', function (event) {
        const form = document.querySelector('.form-input');
        if (form.checkValidity()) {
            event.preventDefault();
            output();
        }
    });

    function output() {
        const input1 = document.getElementsByClassName("input-same")[0];
        const input2 = document.getElementsByClassName("input-same")[1];

        const entry = document.createElement('div');
        entry.classList.add('entry');

        const display = document.createElement('p');
        const newData = `Serial No: ${input1.value}, Model No: ${input2.value}`;
        display.innerText = newData;

        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = '<i class="fa fa-close"></i> Cancel';
        cancelButton.classList.add('btn-cancel');

        cancelButton.addEventListener('click', function () {
            displayContainer.removeChild(entry);
            showToast("Data deleted successfully");
        });

        entry.appendChild(display);
        entry.appendChild(cancelButton);
        displayContainer.appendChild(entry);

        input1.value = '';
        input2.value = '';

        showToast("Data added successfully");
    }

    function showToast(message) {
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerText = message;

        document.body.appendChild(toast);

        setTimeout(() => {
            document.body.removeChild(toast);
        }, 5000); // Toast disappears after 3 seconds
    }
});