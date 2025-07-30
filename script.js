function showResult(e){
    // alert("Form Submitted");
    e.preventDefault();
    let name = document.getElementById("Name").value;
    let email= document.getElementById("Email").value;
    let date= document.getElementById("Date").value;
    let bio= document.getElementById("Bio").value;
    let Country= document.getElementById("country").value;
    // console.log(name,name2)
    let btn= document.getElementById("name");
    btn.textContent=name
    let a= document.getElementById("email");
    a.textContent=email
    let b= document.getElementById("date");
    b.textContent=date
    let c= document.getElementById("bio");
    c.textContent=bio
    let d=document.getElementById("Country");
    d.textContent=Country
}