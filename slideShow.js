'use strict';
const images = [
    { 'id': '1', 'url':'./imagens/silvestres.jpg' },
    { 'id': '2', 'url':'./imagens/OIP.jpg' },
    { 'id': '3', 'url':'./imagens/panda2.jpg' },
    { 'id': '4', 'url':'./imagens/pinguim.jpg' },
    { 'id': '5', 'url':'./imagens/cabra.jpg' },
    { 'id': '6', 'url':'./imagens/OP.jpg' },
]
const containerItems = document.querySelector('#container-items');
const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}
 
loadImages( images, containerItems );
let items = document.querySelectorAll('.item');
const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}
const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}
document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);