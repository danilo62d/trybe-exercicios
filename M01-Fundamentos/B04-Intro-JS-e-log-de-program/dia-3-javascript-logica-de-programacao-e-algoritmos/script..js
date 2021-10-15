let asterisco = '*';
let espaco = ' ';
let n = 5;
let mensagem = '';
for (i = n; i > 0; i--) {
  for (j = i - 1; j > 0; j--) {
    mensagem += espaco;
  }
  for (j = n - i + 1; j > 0; j--) {
    mensagem += asterisco;
  }
  console.log(mensagem);
  mensagem = '';
}
