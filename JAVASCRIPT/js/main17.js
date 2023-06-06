document.getElementById('viewData').addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var phone = document.getElementById('phone').value;

  document.getElementById('nameData').textContent = name;
  document.getElementById('surnameData').textContent = surname;
  document.getElementById('phoneData').textContent = phone;
});
