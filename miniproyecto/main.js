let todo = document.querySelector("#todo");
    let botoncito = document.querySelector("#AcceptConditions");
    botoncito.addEventListener("click", function () {
      todo.classList.toggle("dark");
    });