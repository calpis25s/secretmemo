const memo=document.getElementById('memo');
const button=document.getElementById('submit');


button.addEventListener('click', ()=>{
    const element = document.getElementById('memos');
    const now = new Date();
    const newmemo=memo.value;
    if(memo.value!==''){
        element.insertAdjacentHTML('afterend', '<p id="child-p2">・'+newmemo+'('+now.toLocaleTimeString("en-US")+')</p>');
        memo.value = '';
    }

});