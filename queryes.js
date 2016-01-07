(function(aDoc){
 var d=aDoc,
 h=d.head||d.getElementsByTagName('head')[0],
 p='createStyleSheet',
 f=d[p]=d[p]||function(s){var o=d,e=o.createElement('style');if(s){e.href=s;};return h.appendChild(e);},
 o=f();
 f=function(t,n){
  var m=[],n;
  o.addRule(t,'k:k');
  for(var e,i=0,a=d.all,l=n===1?1:a.length+0;i<l;i++){e=a[i];if(e.currentStyle.k==='k'){m[m.length]=e;};};
  o.removeRule(0);
  return m;
 };
 p='querySelector';
 d[p+'All']=function(s){return f(s);};
 d[p]=function(s){return f(s,1)[0]||null;};
}(document));
