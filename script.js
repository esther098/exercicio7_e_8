function validarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return false;
    }else{

   

    alert("Formulário enviado com sucesso!");
    return true; 
    }
  }
