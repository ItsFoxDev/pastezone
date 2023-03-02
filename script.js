function keepState(elem){
  var key = "save-" + elem.id;
  var storedValue = localStorage.getItem(key);
  if (storedValue)
      elem.value = storedValue;
  elem.addEventListener('input', function (){
      cLog('Attempting to save to local storage','darkorange');
      localStorage.setItem(key, elem.value);
      cLog('Saved to local storage','darkgreen');
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
 cLog('Starting word count...','darkviolet');
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
);
cLog('Counted ' + wcount + 'words','darkgreen');
}
function clearZone(){
Swal.fire({
  title: 'Clear PasteZone?',
  text: 'You won\'t be able to revert this!',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#2eb00b',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, clear it!'
}).then((result) => {
  if (result.isConfirmed) {
      document.getElementById('area').value='';
    Swal.fire(
      'Success!',
      'Your PasteZone has been cleared.',
      'success'
    );
  }
});
}

function copyZText(){
  /* Selects text */ document.querySelector('textarea').select();
  /* Copies text */ document.execCommand('copy');
  /* De-selects text */ window.getSelection().removeAllRanges();
  Swal.fire('Success!','Pastezone has been copied to clipboard.','success');
}

function speakZone(){
  let utterance = new SpeechSynthesisUtterance(document.querySelector('textarea').value);
  speechSynthesis.speak(utterance);
  Swal.fire('Success!','Reading your PasteZone.','success');
}
