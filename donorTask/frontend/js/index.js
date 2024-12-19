async function getDonors() {
    const res=await fetch("http://localhost:3000/getdonors");
    const data=await res.json();
    str=``;
    data.map((dt)=>{
        str+=`
                <tr>
                    <td align="center"><input type="text" value=${dt.name} disabled="true" name="name" id="name-${dt._id}"></td>
                    <td align="center"><input type="text" value=${dt.age} disabled="true" name="age" id="age-${dt._id}"></td>
                    <td align="center"><input type="date" value=${dt.dob} disabled="true" name="dob" id="dob-${dt._id}"></td>
                    <td align="center"><input type="text" value=${dt.place} disabled="true" name="place" id="place-${dt._id}"></td>
                    <td align="center"><input type="text" value=${dt.phone} disabled="true" name="phone" id="phone-${dt._id}"></td>
                    <td align="center">
                        <select id="blood_group-${dt._id}" name="blood_group" disabled="true">
                            <option value=${dt.blood_group}>${dt.blood_group}</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </td>
                    <td class="buttons">   
                        <button class="actions" id="edit" onclick="handleEdit('${dt._id}')" >EDIT</button>
                        <button class="actions" id="save" onclick="handleSave('${dt._id}')">SAVE</button>
                        <button class="actions" id="delete" onclick="handleDelete('${dt._id}')">DELETE</button>
                    </td>
                </tr>
        `
    });
 
    document.getElementById("main").innerHTML=str
}

getDonors();

async function handleEdit(id){
    document.getElementById(`name-${id}`).disabled=false;
    document.getElementById(`age-${id}`).disabled=false;
    document.getElementById(`dob-${id}`).disabled=false;
    document.getElementById(`place-${id}`).disabled=false;
    document.getElementById(`phone-${id}`).disabled=false;
    document.getElementById(`blood_group-${id}`).disabled=false;
}

async function handleSave(id) {
    const name= document.getElementById(`name-${id}`).value;
    const age=document.getElementById(`age-${id}`).value;
    const dob=document.getElementById(`dob-${id}`).value;
    const place=document.getElementById(`place-${id}`).value;
    const phone=document.getElementById(`phone-${id}`).value;
    const blood_group=document.getElementById(`blood_group-${id}`).value;
    const data={id,name,age,dob,place,phone,blood_group};
    const jsonData=JSON.stringify(data);
    const res=await fetch("http://localhost:3000/update",{
        "method":"PUT",
        "Content-Type":"text/json",
        "body":jsonData
    });
    const result=await res.text();
    if(result=="success"){
        alert("Updated Successfully!!!");
        getDonors();
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
        getDonors();
    }
    else{
        alert("Deletion Failed")
    }
} 