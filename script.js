const hotspot=document.querySelector('.hotspot');
const tooltip=document.getElementById('tooltip');
const image=document.getElementById('catImage');


hotspot.onclick=(e)=>{
    e.stopPropagation();
    tooltip.innerText=hotspot.dataset.info;
    const rect=hotspot.getBoundingClientRect();

    tooltip.style.top=(rect.top+window.scrollY-tooltip.offsetHeight-10)+'px';
    tooltip.style.left=(rect.left+window.scrollX-tooltip.offsetWidth/2+rect.width/2)+'px';
    tooltip.style.display='block';
};
document.body.onclick=()=>{
    tooltip.style.display='none';
};
tooltip.onclick=(e)=>{
    e.stopPropagation();

};




