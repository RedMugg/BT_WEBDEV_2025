function toggleRadio() {
    const fieldsetOneTwo = document.getElementById("fieldsetOneTwo");
    const radioTest = document.getElementsByName("getrouwd");

    if (radioTest.value = "j") {
        fieldsetOneTwo.toggleAttribute('disabled');

    } else if (radioTest.value = "n") {
        fieldsetOneTwo.toggleAttribute('disabled');
    }

}