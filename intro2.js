const ret2= document.querySelector(".tworo");
const ret5= document.querySelector(".fivero");
const rete= document.querySelector(".Exit");
ret2.addEventListener("click",function two()
{
    window.location.href="Rock,paper and scissor 2.html";
}
);
ret5.addEventListener("click",function five()
{
    window.location.href="Rock,paper and Scissor.html";
}
);
rete.addEventListener("click",function exit()
{
    const newWindow = window.open("", "_self");
  newWindow.document.write("<html><head><title>Closing...</title></head><body onload=\"window.close()\"></body></html>");
  newWindow.document.close();
}
);
