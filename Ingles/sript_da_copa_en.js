function mostratimes(){
    var t = document.getElementById("mtimes");
    
    t.style.display="block";
   
   }
   
   function fechamenu(){
       
       menuzin.classList.toggle('expandir');
       main.style.filter = "brightness(100%)";
       sera = false;
   }
   function mostratimesmob(){
       var mj = document.getElementById("menujogos");
       var mt = document.getElementById("menutimes");
       var mc = document.getElementById("menucamps");
       var mi = document.getElementById("menuidioma");
       
       if(mt.style.display == "none"){
           mc.style.display = "none";
           mj.style.display = "none";
           mi.style.display = "none";
           mt.style.display = "block";  
       } else {
           mt.style.display = "none";
       }
       
   }
   function mostrajogos(){
       var j = document.getElementById("mjogos");
       var tj = document.getElementById("textojogo");
      
       j.style.display = "block";
       j.style.marginTop = "12px";
       tj.style.marginTop = "13px";
   }
   function mostrajogosmob(){
       var mc = document.getElementById("menucamps");
       var mt = document.getElementById("menutimes");
       var mj = document.getElementById("menujogos");
       var mi = document.getElementById("menuidioma");
   
       if(mj.style.display == "none"){
           mc.style.display = "none";
           mt.style.display = "none";
           mi.style.display = "none";
           mj.style.display = "block";  
       } else {
           mj.style.display = "none";
       }   
   }
   function mostracamps(){
       var c = document.getElementById("mcamps");
       var tc = document.getElementById("textocamps");
       
       c.style.display="block";
       c.style.marginTop="12px";
       tc.style.marginTop ="13px";
   }
   function mostracampsmob(){
       var mc = document.getElementById("menucamps");
       var mt = document.getElementById("menutimes");
       var mj = document.getElementById("menujogos");
       var mi = document.getElementById("menuidioma");
   
       if(mc.style.display == "none"){
           mt.style.display = "none";
           mj.style.display = "none";
           mi.style.display = "none";
           mc.style.display = "block";
       } else {
           mc.style.display = "none";
       }
   }
   function mostraidiomas(){
       var i = document.getElementById("midiomas");
       var ti = document.getElementById("textoidioma")
       
       i.style.display="block";
       i.style.marginTop="7px";
       ti.style.marginTop="7px";
   }
   function mostraidiomasmob(){
       var mc = document.getElementById("menucamps");
       var mt = document.getElementById("menutimes");
       var mj = document.getElementById("menujogos");
       var mi = document.getElementById("menuidioma");
       if(mi.style.display == "none"){
           mt.style.display = "none";
           mj.style.display = "none";
           mc.style.display = "none";
           mi.style.display = "block";
       } else {
           mi.style.display = "none";
       }
   }
   var sera = false;
   var menuzin = document.querySelector('.mobile');
   var btnExp = document.querySelector('#btn-exp');
   var main = document.getElementById('normal');
   var logo = document.getElementById('logo');
   btnExp.addEventListener('click',function(){
       menuzin.classList.toggle('expandir');
      
       if(sera){
           main.style.filter = "brightness(20%)";
       } else {
           main.style.filter = "brightness(100%)";     
       }
   })
   
   function menumobile(){
       var menuitens = document.getElementsByClassName('mobcoisas');
       var icons = document.getElementsByClassName('timesicon');
       
       if(!sera){
           
           for(let i = 0; i<menuitens.length; i++){
           menuitens[i].style.display = "flex";
           menuitens[i].style.flex = "1";
           menuitens[i].style.padding = "10px";
           
           }
           for(let i = 0; i<icons.length; i++){
               icons[i].style.paddingLeft = "5px";
               }
           sera = true;
       } else {
           for(let i = 0; i<menuitens; i++){
               menuitens[i].style.display = "none";
           }
          
           sera = false;
       }
   }
   
   function somecoisa(){
    var t = document.getElementById("mtimes");
    var j = document.getElementById("mjogos");
    var c = document.getElementById("mcamps");
    var i = document.getElementById("midiomas");
    var tj = document.getElementById("textojogo");
    var tc = document.getElementById("textocamps");
    var ti = document.getElementById("textoidioma");
    ti.style.marginTop="0px";
    tj.style.marginTop="0px";
    tc.style.marginTop="0px";
    t.style.display="none";
    j.style.display="none";
    c.style.display="none";
    i.style.display="none";
   }