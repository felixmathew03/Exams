let photo;
document.getElementById("add").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const salary=parseInt(document.getElementById("salary").value);
    const designation=document.getElementById("designation").value;
    fetch("http://localhost:3000/api/addemp",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,email,salary,designation,photo})
    }).then(async(res)=>{
        const result=await res.json();
        if(res.status==201){
            alert(result.msg);
            window.location.href="../index.html"
        }
        else{
            alert(result.msg);
        }
        
    }).catch((error)=>{
        console.log(error);
    });
})

document.getElementById("photo").addEventListener("change",async(e)=>{
    photo=await convertToBase64(document.getElementById("photo").files[0]);
    document.getElementById("prf").innerHTML=`<img src="${photo}"   alt="">`
})
function convertToBase64(file) {
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror= (error)=>{
            reject(error)
        }
    })
}