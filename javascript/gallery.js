
document.getElementById('switchCheckbox').addEventListener('change', function() {
    var imageSection = document.getElementById('imageSection');
     var videoSection = document.getElementById('videoSection');
    if (this.checked) {
        videoSection.classList.remove('hidden');
        imageSection.classList.add('hidden');
    } else {
        imageSection.classList.remove('hidden');
        videoSection.classList.add('hidden');
        
    }
  });
  
