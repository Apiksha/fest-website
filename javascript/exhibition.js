function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // alert('Copied to clipboard: ' + text);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}
function register() {
    window.open('https://forms.gle/xi5G1bE28Su2HTt2A', '_blank');
}