async function getEmployees() {
    const res=await fetch("http://localhost:3000/api/getemployees");
    if(res.status==200){
        const employees=await res.json();
        let str="";
        employees.map((employ)=>{
            str+=`
            <div class="content">
            
                    <div class="img">
                        <img src="http://localhost:3000/api/image/${employ.photo.filename}"  alt="${employ.name}">
                    </div>
                    <div class="details">
                        <div class="details">
                            <h1>${employ.name}</h1>
                            <div class="emcontainer">
                            <p>${employ.email}</p>
                                <h3>${employ.designation.toUpperCase()}</h3>
                                <h2>Rs.${employ.salary}/-</h2>
                            </div>
                            <div class="buttons">
                                <a href="./pages/edit.html?id=${employ._id}"><button>Edit</button></a>
                                <button onclick="deleteEmploy('${employ._id}')">Delete</button>
                            </div>
                        </div>
                    </div>

                </div>
            `
        });
        document.getElementById("contents").innerHTML=str;
    }else{
        alert("error")
    }
    
}
getEmployees();

async function deleteEmploy(id) {
    const res=await fetch(`http://localhost:3000/api/deleteemploy/${id}`,
        {method:"DELETE"}
    )
    const result=await res.json();
    alert(result.msg)
    getEmployees();
}