
function updateClassBasedOnScreenWidth() {
    const contentDiv = document.getElementById('content');
  
    if (window.innerWidth > 600) {
      contentDiv.classList.remove('calculator');
      contentDiv.classList.add('calculator-win');
    } else {
      contentDiv.classList.remove('calculator-win');
      contentDiv.classList.add('calculator');
    }
  }
  
  // 初回実行
  updateClassBasedOnScreenWidth();
  
  // ウィンドウのリサイズ時に実行
  window.addEventListener('resize', updateClassBasedOnScreenWidth);
  
  let currentInput = "";
  let result = 0;
  
  function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
  }
  
  function clearDisplay() {
    currentInput = "";
    result = 0;
    document.getElementById("display").value = currentInput;
  }
  
  function calculateResult() {
    try {
      result = eval(currentInput);
      document.getElementById("display").value = result;
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
    currentInput = result.toString();
  }
  
  function handleInput(event) {
    // ユーザーが直接キーボードで入力できるようにする
    currentInput = event.target.value;
  }
  
  // エンターキーを押したときの処理を追加
  document.getElementById("display").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      calculateResult();
    }
  });
  
  
  function calculate(operation) {
    try {
      switch (operation) {
        case 'sqrt':
          result = Math.sqrt(parseFloat(currentInput));
          break;
        case 'square':
          result = Math.pow(parseFloat(currentInput), 2);
          break;
        case '%':
          result = parseFloat(currentInput) / 100;
          break;
        default:
          throw new Error("Invalid operation");
      }
  
      document.getElementById("display").value = result;
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
    currentInput = result.toString();
  }