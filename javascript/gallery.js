const openVideoSection = document.getElementById('openVideoSection');
const openImageSection = document.getElementById('openImageSection');
document.getElementById('openImageSection').addEventListener('click', function() {
    var imageSection = document.getElementById('imageSection');
    var videoSection = document.getElementById('videoSection');

    if (imageSection.classList.contains('hidden')) {
        imageSection.classList.remove('hidden');
        openImageSection.classList.add('hidden');
        videoSection.classList.add('hidden');
        openVideoSection.classList.remove('hidden');
    }
});

document.getElementById('openVideoSection').addEventListener('click', function() {
    var imageSection = document.getElementById('imageSection');
    var videoSection = document.getElementById('videoSection');

   
    if (videoSection.classList.contains('hidden')) {
        videoSection.classList.remove('hidden');
        openVideoSection.classList.add('hidden');
        imageSection.classList.add('hidden');
        openImageSection.classList.remove('hidden');
    }
});

document.getElementById('openVideoSection').classList.remove('hidden');
document.getElementById('imageSection').classList.remove('hidden');
document.getElementById('videoSection').classList.add('hidden');
