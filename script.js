function keepState(elem)
{
  var key = "save-" + elem.id;

  var storedValue = localStorage.getItem(key);

  if (storedValue)
      elem.value = storedValue;

  elem.addEventListener('input', function (){
      cLog('Attempting to save to local storage',darkorange);
      localStorage.setItem(key, elem.value);
      cLog('Saved to local storage',darkgreen);
  });
}

function cLog(m,c){
  console.log("%cFoxJS","color: white; background: " + c + "; padding: 2px 6px; border-radius: 3px; margin-right: 5px;",m);
}


const saves = document.querySelectorAll('.save');
Array.from(saves).forEach((element, index) => {
  keepState(element);
});

function wordCount() {
 cLog('Starting word count...',darkviolet);
 var text = document.getElementById("area").value;
 var wcount = 0;
 var split = text.split(' ');
 for (var i = 0; i < split.length; i++) {
  if (split[i] != "") {
   wcount ++;
  }
 }
 Swal.fire(
  'Word count',
  'Your text has ' + wcount + ' words.',
  'info'
)
cLog('Counted ' + wcount + 'words',darkgreen);
}
