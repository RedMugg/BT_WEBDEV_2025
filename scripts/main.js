// document.getElementsByName("getrouwd").addEventListener("change", function () {
//     toggleRadio();
// });

// function toggleRadio() {
//     console.log(radioButton.value);
//     const fieldsetOneTwo = document.getElementById("fieldsetOneTwo");

//     fieldsetOneTwo.toggleAttribute('disabled');
// }

// Local Storage
window.onload = function () {

    if (storageAvailable("localStorage")) {
        const voorLettersInput = document.getElementById("voorLetters");
        voorLettersInput.addEventListener("change", function() {
            localStorage.setItem(this.id, document.getElementById("voorLetters").value);

        })
        

        let voorLettersVal = localStorage.getItem("voorLetters");
        voorLettersInput.value = voorLettersVal;
    } else {
        // Too bad, no localStorage for us
    }
}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            e.name === "QuotaExceededError" &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}
