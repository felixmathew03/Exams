const url=window.location.href;
const urlParams=new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");
let photo
async function getEmploy() {
    
    const res=await fetch(`http://localhost:3000/api/getemploy/${id}`)
    const employ=await res.json();
    photo=employ.photo;
    document.getElementById("frm").innerHTML=`
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name"  value="${employ.name}">
            </div>

            <div class="form-group">
                <label for="salary">Salary</label>
                <input type="number" id="salary" name="salary"  value="${employ.salary}">
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email"  value="${employ.email}">
            </div>

            <div class="form-group">
                <label for="designation">Designation</label>
                <select id="designation" name="designation"  >
                    <option value="${employ.designation}">${employ.designation}</option>
                    <option value="manager">Manager</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="hr">HR</option>
                    <option value="sales">Sales</option>
                </select>
            </div>

            <div class="form-group">
                <label for="photo">Upload Photo</label>
                <input type="file" id="photo" name="photo" onchange="pic()" >
            </div>

            <div class="profile" >
                 <img src="${photo}" class="proimg" id="proimg" alt="">
            </div>

            <div class="form-group">
                <input type="submit" value="Submit">
            </div>
    `
}
getEmploy()

document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    try {
        const name=document.getElementById("name").value;
        const email=document.getElementById("email").value;
        const salary=parseInt(document.getElementById("salary").value);
        const designation=document.getElementById("designation").value;
    const res=await fetch(`http://localhost:3000/api/editemploy/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,email,salary,designation,photo})
    })
    if(res.status==201){
        alert("Updated")
        window.location.href="../index.html"
    }else{
        alert("error")
    }
    } catch (error) {
        console.log(error);
        
    }
})

async function pic(){
    console.log(document.getElementById("photo").files[0]);
    photo=await convertToBase64(document.getElementById("photo").files[0]);
    document.getElementById("proimg").src=photo;
}
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