document.getElementsById(`my_button`)
.addEventListener(`click`,
() => {document.getElementsById(`demo`)
    .innerHTML = new Date();
});