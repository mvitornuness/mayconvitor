const emailCerto = "adm@outlook.com";
const senhaCerta = "cearathebest";

function validado() {
  const EmailDigitado = document.getElementById("email").value.trim();
  const SenhaDigitada = document.getElementById("senha").value;
  const mensagemErro = document.getElementById("direto");

  if (EmailDigitado === emailCerto && SenhaDigitada === senhaCerta) {
    window.location.href = "arquivo.html";
    return false;
  } else {
    alert("c E-mail ou senha incorretos tente novamente ");
  }
}
