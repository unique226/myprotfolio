let q1=document.getElementById('q1');
let q2=document.getElementById('q2');
let q3=document.getElementById('q3');
let q4=document.getElementById('q4')
let q5=document.getElementById('q5');
let q6=document.getElementById('q6');
let q7=document.getElementById('q7');
let error=document.getElementById('error');
let p1=document.getElementById('p1');
//inputs
let username=document.getElementById('username');
let age=document.getElementById('age');
let state=document.getElementById('state');
let school=document.getElementById('school');
let email=document.getElementById('email');
//buttons
let n1=document.getElementById('n1');
let n2=document.getElementById('n2');
let n3=document.getElementById('n3');
let n4=document.getElementById('n4');
let n5=document.getElementById('n5');
//hidding
q7.style.display='none';



n1.addEventListener('click',function(){
    if(username.value.length < 4){
        error.innerHTML='name must be 4 or more';
        setTimeout(()=>{
            error.innerHTML='';
        },1000);
    }
    else{
        q1.style.left='-400px';
        q1.style.transition='2s';
        q2.style.display='block';
        p1.innerHTML='WHATS YOUR AGE?';
        age.style.focus;
    }
})
n2.addEventListener('click',function(){
    if(age.value.length<2){
        error.innerHTML='AGE MINIMUM 10 OR MORE';
          setTimeout(()=>{
            error.innerHTML='';
        },1000);
    }
    else if(age.value.length>2){
        error.innerHTML='AGE IS NOT 100 OR MORE';
          setTimeout(()=>{
            error.innerHTML='';
        },1000);
    }
      else{
        q2.style.left='-400px';
        q2.style.transition='2s';
        q3.style.display='block';
        p1.innerHTML='WHATS YOUR STATE?';
    }

})
n3.addEventListener('click',function(){
    if(state.value==='select'){
        alert('plese select state')
    }
    else{
        q3.style.display='none';
        q4.style.display='block';
    }

})
n4.addEventListener('click',function(){
    if(school.value==='select'){
        alert('PLEASE SELECT SCHOOL TYPE');
    }
    else{
       q4.style.display='none';
       q7.style.display='block';
        
    }
})
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
n5.addEventListener('click',function(){
if (emailPattern.test(email)) {
    alert('Please enter a valid email');
}
    else{
        q6.style.display='block';
        q7.style.display='none';
        q6.innerHTML=`THANKS WE WILL NOTIFY YOU WITH THIS ${email.value} email`;
    }
})



q2.style.display='none';
q3.style.display='none';
q4.style.display='none';
q5.style.display='none';
q6.style.display='none';
  
error.style.marginLeft='100px';
username.style.marginLeft='80px';
age.style.marginLeft='80px';
state.style.marginLeft='80px';
school.style.marginLeft='80px';

function download() {
      alert('processing..')
      setTimeout(() => {
        alert('sorry not yet to download this')
      }, 2000);
    }
