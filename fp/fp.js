let x = window.location.search;

x = x.split("&");

let y = [];

if (x.length > 1) {
  x.forEach((d) => {
    let m = d.replaceAll("%22", "");
    m = m.replaceAll("%20", " ");
    m = m.replaceAll("?", "");
    y.push(m);
  });
}

if (x.length <= 1) {
  document.getElementById("form1").style.display = "flex";
  document.getElementById("form1").style.flexDirection = "column";
  document.getElementById("form1").style.gap = "3";
} else {
  document.querySelector("#p-title").innerHTML = y[2];
  document.querySelector("#p-class").innerHTML = y[3];
  document.querySelector("#p-name").innerHTML = y[0];
  document.querySelector("#p-to").innerHTML = y[1];
}

function generate() {
  const title = document.getElementById("title").value;
  const submittedby = document.getElementById("submittedby").value;
  const submittedto = document.getElementById("submittedto").value;
  const class1 = document.getElementById("class").value;
  const url = `${window.location.href}?"${submittedby}"&"${submittedto}"&"${title}"&"${class1}"`;
  window.location.href = url;
}

function print1() {
  const p = document.getElementById("print").innerHTML;
  document.body.innerHTML = p;
  window.print();
  window.location.reload();
}
