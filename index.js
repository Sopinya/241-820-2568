function submitForm(event) {

    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    if (firstName && lastName) {

        alert("ข้อมูลถูกต้อง ✅");

        // เด้งไปหน้า phpMyAdmin
        window.location.href = "http://localhost/phpmyadmin";

    } else {

        alert("กรุณากรอกข้อมูลให้ครบ ❌");

    }
}