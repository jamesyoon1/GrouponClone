function clickTest() {
    //window.alert("you chose :");

    var radios = document.getElementsByName('flexRadioDefault');
    for (var radio of radios)
    {
        if (radio.checked) {
            //window.alert(radio.id);
            if (radio.id == "option2") {
                var name = document.getElementsByName('option2Name');
                window.alert(name.option-description);

            }
        }
    }
}

/*
document.getElementById('submit').onclick = function() {
    window.alert("hello");
    var radios = document.getElementsByName('flexRadioDefault');
    for (var radio of radios)
    {
        if (radio.checked) {
            window.alert(radio.value);
        }
    }
}
*/