import "../css/style.scss";
import {PHOTOS} from "./photos";
import $ from "jquery";

const gallery = $("#gallery");
const links = $("#links");


function renderGallery(){
    
    gallery.innerHTML='';
    links.innerHTML='';
    let galleryHtml = gallery.html();
    let linksHtml = links.html();
    for(let i =0 ; i < PHOTOS.length ; i++){
        galleryHtml += `
        <div id="photo-${i}">
            <img src="../src/photo/${PHOTOS[i]}">
            </div>
        `;
        linksHtml += `
        <a href="#photo-${i}">${i+1}</a>
        `
    }

    links.html(linksHtml);
    gallery.html(galleryHtml);
    
};

$( document ).ready(renderGallery);


