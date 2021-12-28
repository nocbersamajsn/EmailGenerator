// let copyText = document.querySelector('#copytext');
// dataEmail.querySelector('button').addEventListener('click', function() {

//     let input = copyText.querySelector('input.text');
//     document.execCommand('copy');
//     copyText.classList.add('active');
//     window.getSelection().removeAllRanges();
//     setTimeout(function() {
//         copyText.classList.remove('active');
//     }, 2500);
// });



const textToBeCopied = document.querySelector('.textToBeCopied');
const copyButton = document.querySelector('.copyButton');

textToBeCopied.addEventListener('blur', function() {
  copyButton.classList.remove('active');
  copyButton.innerHTML = "Copy";
})

copyButton.addEventListener('click', function() {
  copyButton.classList.add('active');
  textToBeCopied.focus();
  textToBeCopied.select();
  document.execCommand('copy');
  if (this.innerHTML = "Copy") {
    this.innerHTML = "Copied!";
  }
})