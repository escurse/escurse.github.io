const $form = document.getElementById('form');
const $div = document.createElement('div');

$form.onsubmit = (e) => {
    e.preventDefault();
    const $valA = $form['valA'].value;
    const $valB = $form['valB'].value;
    if ($form['op'].value === "add") {
        $div.innerText = parseInt($valA) + parseInt($valB);
    } else if ($form['op'].value === "sub") {
        $div.innerText = parseInt($valA) - parseInt($valB);
    } else if ($form['op'].value === "mul") {
        $div.innerText = parseInt($valA) * parseInt($valB);
    } else if ($form['op'].value === "div") {
        $div.innerText = parseInt($valA) / parseInt($valB);
    } else if ($form['op'].value === "mod") {
        $div.innerText = parseInt($valA) % parseInt($valB);
    }
    $form.append($div);
    $form['valA'].value = "";
    $form['valB'].value = "";
}
