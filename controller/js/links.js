function wpp(){
    window.open("https://wa.me/5519998057515?text=Ol%C3%A1+Gustavo%2C+tudo+bem%3F", "_blank");
}

function email(){
    var email = "gustavom.lennert@gmail.com";
    var assunto = "Contato - Portfólio";
    var corpo = "Olá Gustavo, tudo bem?";

    var link = "mailto:" + email + "?subject=" + encodeURIComponent(assunto) + "&body=" + encodeURIComponent(corpo);

    // Redirecionar para o cliente de email
    window.open(link, "_blank");
}

function linkedin(){
    window.open("https://www.linkedin.com/in/gustavo-martin-lennert/", "_blank");
}
