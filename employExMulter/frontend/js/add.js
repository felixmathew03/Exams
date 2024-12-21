let photo;
document.getElementById("add").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const data=new FormData(e.target);
    console.log(data);
    
    fetch("http://localhost:3000/api/upload",{
        method:"POST",
        body:data
    }).then(async(res)=>{
        const result=await res.json()
        alert(result.msg)
        window.location.href="../index.html"
    }).catch((error)=>{
        console.log(error);
    })
})

