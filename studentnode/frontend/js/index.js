async function getstudents() {
    const res=await fetch("http://localhost:3000/getstudents");
    const data=await res.json();
    str=``;
    data.map((dt)=>{
        str+=`
        <div class="content">
            <h3>Student</h3>
            <table class="table1">
                <tr>
                    <th><label for="name">Name</label></th>
                    <td>:</td>
                    <td align="center"><input type="text" value=${dt.name} disabled="true" name="name" id="name-${dt._id}"></td>
                </tr>
                <tr>
                    <th><label for="rno">Roll No.</label></th>
                    <td>:</td>
                    <td align="center"><input type="text" value=${dt.rollno} disabled="true" name="rollno" id="rno-${dt._id}"></td>
                </tr>
                <tr>
                    <th><label for="class">Class</label></th>
                    <td>:</td>
                    <td align="center"><input type="text" value=${dt.class} disabled="true" name="class" id="class-${dt._id}"></td>
                </tr>
                <tr>
                    <th><label for="class">Percentage (%)</label></th>
                    <td>:</td>
                    <td align="center"><input type="text" value=${dt.percentage} disabled="true" name="percentage" id="percentage-${dt._id}"></td>
                </tr>
               
                <tr>
                    <td colspan="3" align="center" >   
                        <button id="edit" onclick="handleEdit('${dt._id}')" >EDIT</button>
                        <button id="save" onclick="handleSave('${dt._id}')">SAVE</button>
                        <button id="delete" onclick="handleDelete('${dt._id}')">DELETE</button>
                    </td>
                </tr>
            </table>

        </div>   
        `
    });
 
    document.getElementById("main").innerHTML=str
}

getstudents();

async function handleEdit(id){
    document.getElementById(`name-${id}`).disabled=false;
    document.getElementById(`rno-${id}`).disabled=false;
    document.getElementById(`class-${id}`).disabled=false;
    document.getElementById(`percentage-${id}`).disabled=false;
}

async function handleSave(id) {
    let name= document.getElementById(`name-${id}`).value;
    let rno=document.getElementById(`rno-${id}`).value;
    let clss=document.getElementById(`class-${id}`).value;
    let percent=document.getElementById(`percentage-${id}`).value;
    let data={id,name,rno,clss,percent};
    const jsonData=JSON.stringify(data);
    const res=await fetch("http://localhost:3000/update",{
        "method":"PUT",
        "Content-Type":"text/json",
        "body":jsonData
    });
    const result=await res.text();
    if(result=="success"){
        alert("Updated Successfully!!!");
        getstudents();
    }
    else{
        alert("Updation Failed")
    }
}

async function handleDelete(id) {
    const res = await fetch("http://localhost:3000/delete",{
        method:"DELETE",
        headers:{"Content-Type":"text/plain"},
        "body":id
    })
    const data=await res.text();
    if(data=="success"){
        alert("Deleted Successfully!!!");
        getstudents();
    }
    else{
        alert("Deletion Failed")
    }
} 