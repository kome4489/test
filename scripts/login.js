function loginSubmit() {
    console.log('login');
    // window.location.href = 'index.html';
    // window.close();
    var id = $(':text[name="id"]').val();
    var password = $(':text[name="password"]').val();
    console.log(id, password);
    if (id === "aaa" && password === "aaa") {
        window.open('about:blank', '_self').close();
        window.open('index.html', '_blank');
    } else {
        alert('login fail');
    }
}