var plus = document.querySelectorAll(".plus");
var love = document.getElementsByClassName("fa-heart");
var minus = document.querySelectorAll(".minus");
var qte = document.querySelectorAll(".qte");
var trash = document.querySelectorAll(".trash");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    qte[i].innerHTML++;
    totale();
  });
}

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (qte[i].innerText > 0) {
      qte[i].innerText--;
      totale();
    }
  });
}

for (let i = 0; i < trash.length; i++) {
  trash[i].addEventListener("click", function () {
    trash[i].parentElement.parentElement.remove();
  });
}
for (let i = 0; i < love.length; i++) {
    love[i].addEventListener("click", function () {
      if (love[i].style.color !== "red") {
        love[i].style.color = "red";
      } else {
        love[i].style.color = "white";
      }
    });
  }


  function totale() {
    let prix = document.querySelectorAll(".price");
    let qtes = document.querySelectorAll(".qte");
    let totalprice = 0;
    for (let i = 0; i < prix.length; i++) {
      totalprice = totalprice + Number(qtes[i].innerHTML) * Number(prix[i].innerHTML);
    }
    document.getElementById("total").innerHTML = totalprice;
  }