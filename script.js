console.log('Hello!');
const start = document.querySelector('#start');
const parent = document.querySelector('#parent');
const grandparent = document.querySelector('#grandparent');
start.addEventListener('click', () => {
   alert('start clicked');
 })
parent.addEventListener('click', () => {
   alert('parent clicked');
 })
grandparent.addEventListener('click', () => {
   alert('grandparent clicked');
 })
document.addEventListener('click', () => {
   alert('document clicked');
 })
window.addEventListener('click', () => {
   alert('window clicked');
 })