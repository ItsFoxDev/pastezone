var zone = document.getElementById('zone');

var key = 'pastezone';
var storedValue = localStorage.getItem(key);
function savezone(){
  localStorage.setItem(key, zone.value);
  cLog('Synced Pastezone with local storage','darkgreen');
}
if (storedValue){
  zone.value = storedValue;
}
zone.addEventListener('input', function (){
  savezone();
});

function cLog(m,c){
  console.log("%cFoxJS","color: white; background: " + c + "; padding: 2px 6px; border-radius: 3px; margin-right: 5px;",m);
}

function wordCount() {
 cLog('Starting word count...','darkviolet');
 var text = zone.value;
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
      zone.value='';
      savezone();
    Swal.fire(
      'Success!',
      'Your PasteZone has been cleared.',
      'success'
    );
  }
});
}

function copyZText(){
  /* Selects text */ zone.select();
  /* Copies text */ document.execCommand('copy');
  /* De-selects text */ window.getSelection().removeAllRanges();
  Swal.fire('Success!','Pastezone has been copied to clipboard.','success');
}

function speakZone(){
  let utterance = new SpeechSynthesisUtterance(zone.value);
  speechSynthesis.speak(utterance);
  Swal.fire('Success!','Reading your PasteZone.','success');
}

function exportTXT(){
  const link = document.createElement("a");
  const file = new Blob([zone.value], { type: 'text/plain' });
  link.href = URL.createObjectURL(file);
  link.download = "pastezone.txt";
  link.click();
  URL.revokeObjectURL(link.href);
  Swal.fire('Downloaded!','Your pastezone has been downloaded','success');
}