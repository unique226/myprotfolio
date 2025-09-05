let about=document.getElementById('about');
    let projects=document.getElementById('projects');
    let p1=document.getElementById('p1');
    let form1=document.getElementById('form1');
    let namee=document.getElementById('namee');
    let send=document.getElementById('send');
    let condact=document.getElementById('condact');
    let messagess=document.getElementById('messagess')

    about.addEventListener('click',function(){
       window.scrollTo({
        
        top:250,
        behavior:"smooth"
        
       });
    });
    projects.addEventListener('click',function(){
        window.scrollTo({
            top:710,
            behavior:"smooth"
        })
    })

    send.addEventListener('click',function(e){
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(namee.value)){
            alert('check email')
        }
        else if(messagess.value.length<10){
            alert('messages must be 10 or more')
        }
        else{
         e.preventDefault();
         form1.action='https://formspree.io/f/xqabozyk';
         form1.method='POST';
         form1.submit();
        }
    })
    condact.addEventListener('click',function(){
        window.scrollTo({
            top:900,
            behavior:"smooth"
        })
    })
    const button=document.createElement('button');
    button.innerHTML='GO TO TOP';
    button.style.color='blue',button.style.marginTop='20px';
    button.style.background='transparent';
    button.style.boxShadow='0 0 2px white,0 0 10px blue',button.style.border='0';
    button.style.height='50px',button.style.width='99%';

    document.body.appendChild(button);
    button.addEventListener('click',function(){
        window.scrollTo({
            top:0,behavior:"smooth"
        })
    })