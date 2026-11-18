function deposite() {
    let depositeValue = document.getElementById('addDeposite').value;
    let depositeDefault = document.getElementById('defaultDeposite').innerText;

    depositeDefault = document.getElementById('defaultDeposite').innerText = parseInt(depositeValue) + parseInt(depositeDefault);

    document.getElementById("Amount").innerText = parseInt(document.getElementById("Amount").innerText) + parseInt(depositeValue);

    // Input Fill Khali korar jonne
    document.getElementById('addDeposite').value = '';

}

function withdrow() {
    let depositeValue = document.getElementById('withdrowDeposite').value;
    let depositeDefault = document.getElementById('defaultWithdrow').innerText;
    let amount = document.getElementById("Amount").innerText;

    // Jodi Jomar thake besi Withdrow dite cay
    if (parseFloat(depositeValue) > parseInt(amount)) {
        alert("পর্যাপ্ত ব্যালেন্স নাই ❌😈💔");
        document.getElementById('withdrowDeposite').value = '';
        return;
    }

    document.getElementById('defaultWithdrow').innerText = parseFloat(depositeDefault) + parseInt(depositeValue);
    document.getElementById('Amount').innerText = parseInt(amount) - parseInt(depositeValue);

    // Input Fill Khali korar jonne
    document.getElementById('withdrowDeposite').value = '';

    // Withdrow SuccesFull Hole
    alert("Withdrow Succesfull! ✅")
}
