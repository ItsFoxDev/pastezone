function keepState(elem)
{
  var key = "save-" + elem.id;

  var storedValue = localStorage.getItem(key);

  if (storedValue)
      elem.value = storedValue;

  elem.addEventListener('input', function (){
      localStorage.setItem(key, elem.value);
  });
}




const saves = document.querySelectorAll('.save');
Array.from(saves).forEach((element, index) => {
  keepState(element);
});

function wordCount() {
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
  'success'
)
}