const btn = document.getElementById('myform') 

btn.addEventListener('submit', () => {
    const name= document.getElementById('name').value;
    //const subject= document.getElementById('subject').value;
    const phone= document.getElementById('phone').value;
    const email= document.getElementById('email').value;
    //const message= document.getElementById('message').value;
    alert(" Name : "+name+ "\n Phone : "+phone+ "\n Email : "+email+ "\n Form submitted successfully")
})