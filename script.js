var anim = new Array();
var IN = new Array();
for(i=0; i<5; i++){
anim[i] = document.getElementById("aD"+i),
pfx = ["webkit", "moz", "MS", "o", ""], IN[i] = true;
}

PrefixedEvent(anim, "AnimationStart", AnimationListener);
PrefixedEvent(anim, "AnimationIteration", AnimationListener);
PrefixedEvent(anim, "AnimationEnd", AnimationListener);

function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p]+type, callback, false);
    }
}

function playAnim(id) {
  if(IN[id]){
    if(anim[id].classList.contains("fadeOut")){
    anim[id].classList.remove("fadeOut");}
    if(!anim[id].classList.contains("fadeIn")){
anim[id].classList.add("fadeIn");}
}else{
  if(anim[id].classList.contains("fadeIn")){
  anim[id].classList.remove("fadeIn");}
  if(!anim[id].classList.contains("fadeOut")){
anim[id].classList.add("fadeOut");}
}
IN[id] = !IN[id];
}
