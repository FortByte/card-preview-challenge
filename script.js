let codName=document.getElementById('cdName');
let codNum=document.getElementById('cdNum');
let month=document.getElementById('month');
let year=document.getElementById('year');
let cvc=document.getElementById('cvc');
let confr=document.getElementById('confr');
let contu=document.getElementById('contu');
let form=document.querySelector('.form');
let next=document.querySelector('#next');
let sm1=document.getElementById('sm1');
let smNum=document.getElementById('forNum');
let sm2=document.getElementById('sm2');
let sm3=document.getElementById('sm3');
let sm4=document.getElementById('sm4');
let inp=document.getElementsByTagName('input');
let smal=document.getElementsByTagName('small')


confr.onclick=function(){
    
    if(codName.value==""){
        sm1.style.display="block"
        codName.style.borderColor="red"
    }
    else if(codNum.value=='' ){
    
        smNum.style.display="block"
        codNum.style.borderColor="red"
    }
    else if(month.value==''){
        
        sm2.style.display="block"
        month.style.borderColor="red"
    }
    else if(year.value==''){
        
        sm4.style.display="block"
        year.style.borderColor="red"
    }
    else if(cvc.value==''){
        
        sm3.style.display="block"
        cvc.style.borderColor="red"
    }
    else{
        next.style.display="block";
        form.style.display="none";
        
    }
}
contu.onclick=function(){
    location.reload()
}

