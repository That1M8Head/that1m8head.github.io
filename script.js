// @license magnet:?xt=urn:btih:723febf9f6185544f57f0660a41489c7d6b4931b&dn=wtfpl.txt WTFPL
window.onload = function() {
    birthDate = new Date("2001-09-28");
    difference = Date.now() - birthDate.getTime();
    ageDate = new Date(difference); 
    calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    document.getElementById("age").innerText = calculatedAge;
};
// @license-end
