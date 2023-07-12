function insert(num) {
    document.form.textview.value += num;
  }
  
  function clearScreen() {
    document.form.textview.value = "";
  }
  
  function calculate() {
    var expression = document.form.textview.value;
    if (expression) {
      try {
        document.form.textview.value = eval(expression);
      } catch (error) {
        document.form.textview.value = "Erro";
      }
    }
  }
  