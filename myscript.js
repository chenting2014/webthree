function youku(){
   var huandeng=document.getElementById("myhuan");
    var pictures=document.getElementById("picture").getElementsByTagName("li");
        var numbers=document.getElementById("number").getElementsByTagName("li");
        var leftarrays=document.getElementById("leftarray");
        var rightarrays=document.getElementById("rightarray");
        var index=0; 
        var len=pictures.length;
          function show(n){
          for(var x=0;x<len;x++){
            numbers[x].className="";
                pictures[x].style.display="none";
            }
            pictures[index].style.display=""; 
            numbers[index].className="selected";
            leftarray.style.display="none";
            rightarray.style.display="none";
            index=(index==len-1?0:index+1);

           }
           show(index);
           var autostart=setInterval(show,2000);
           function getcurindex(){
           for(var h=0;h<len;h++)
  
             if(numbers[h].className=="selected")
             return h;
           }
           function movement(flag){
              index=getcurindex();
              if(!flag){
                index++;
                if(index>(len-1))
                  {index=0;}
              }
             else{
                index--;
                if(index<0)
                  {index=len-1;}
              }
             show(index);
            }
           for(var i=0;i<len;i++){
              var num_item=numbers[i];
              
              num_item.onclick=function(){
                   
                   for(var m=0;m<len;m++){
                    if(this.innerText==numbers[m].innerText)
                      {index=m;
                       break;
                   }
                   }
                   for(var j=0;j<len;j++){
                    pictures[j].style.display="none";
                    numbers[j].className="";
                   }
                   pictures[index].style.display="";
                   numbers[index].className="selected";
              }

            }
            huandeng.onmouseover=function(){
              clearInterval(autostart);
              
                leftarray.style.display="";
                 rightarray.style.display="";
            }
           huandeng.onmouseout=function(){
              autostart=setInterval(show,2000);
               leftarray.style.display="none";
                 rightarray.style.display="none";

            }
            leftarray.onclick=function(){movement(true);}
            rightarray.onclick=function(){movement(false);}

}
window.onload=youku;