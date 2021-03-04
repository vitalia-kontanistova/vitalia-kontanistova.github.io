  document.addEventListener('DOMContentLoaded', function(){
    let userAgent = navigator.userAgent.toLowerCase();
    
    let Mozila = /firefox/.test(userAgent);
    let Chrome = /chrome/.test(userAgent);
    let Safari = /safari/.test(userAgent);
    let Opera  = /opera/.test(userAgent);
    
    let InternetExplorer = false;
    if((/mozilla/.test(userAgent) && !Mozila && !Chrome && !Safari && !Opera) || /msie/.test(userAgent))
    {
      InternetExplorer = true;
    }
    if(InternetExplorer)
    {
      location.href = "IE.html";
    }
  });



