document.getElementById('add').addEventListener('click', function() {
  var paragraph = document.getElementById('text');
  paragraph.textContent = 'Sample text';
});

document.getElementById('delete').addEventListener('click', function() {
  var paragraph = document.getElementById('text');
  paragraph.textContent = '';
});
