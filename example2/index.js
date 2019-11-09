var checkbox = document.getElementById('pets-checkbox');
var selcetionDiv = document.getElementById('pet-selection');
var saveForm  = document.getElementById('save-form');


checkbox.addEventListener('change',function(event){
  if(checkbox.checked == true){
        selcetionDiv.style.display = ' block';
  }else{
    selcetionDiv.style.display = 'none'
  }
})


saveForm.addEventListener('submit', function(event){
     event.preventDefault();
     var nameText = saveForm.elements[0];
     var addressText = saveForm.elements[1];
     var ageText = saveForm.elements[2];
     var havePets = saveForm.elements[3].checked;
     var petText = ' No Pet';


     if(nameText.value == ''){
         alert('Please enter a name');
         return;
     }

     if(addressText.value == ''){
         alert('Please enter an address')
         return;
     }

     if(ageText.value == ''){
         alert('Please enter a Number')
         return;
     }

     if(havePets){
         petText = saveForm.elements[4].value;
     }

     if(petText == 'Dog'){
         alert('Sorry our Dog Capacity is full :(')
         return;
     }

     alert('Booking saved! Info:\n' + nameText.value + '\n' + addressText.value + '\n' + ageText.value + '\n' + petText
     )
})