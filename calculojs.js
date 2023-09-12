const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const operacao = document.getElementById("operacao");
    const resultado = document.getElementById("resultado");
    function calcular() {
      const n1 = parseFloat(num1.value);
      const n2 = parseFloat(num2.value);
      const op = operacao.value;
      let resultadoCalculo;
      switch (op) {
        case "+":
          resultadoCalculo = n1 + n2;
          break;
        case "-":
          resultadoCalculo = n1 - n2;
          break;
        case "*":
          resultadoCalculo = n1 * n2;
          break;
        case "/":
          resultadoCalculo = n1 / n2;
          break;
      }
      resultado.innerHTML = resultadoCalculo;
    }
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      calcular();
    });