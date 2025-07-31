function showResult(e) {
  // alert("Form Submitted");
  e.preventDefault();
  //   let name = document.getElementById("Name").value;
  //   let email = document.getElementById("Email").value;
  //   let date = document.getElementById("Date").value;
  //   let bio = document.getElementById("Bio").value;
  //   let Country = document.getElementById("country").value;
  //     let check= document.getElementById("check").checked? "Yes":"No";

  //   // console.log(name,name2)
  //   let btn = document.getElementById("name");
  //   btn.textContent = name;
  //   let a = document.getElementById("email");
  //   a.textContent = email;
  //   let b = document.getElementById("date");
  //   b.textContent = date;
  //   let c = document.getElementById("bio");
  //   c.textContent = bio;
  //   let d = document.getElementById("Country");
  //   d.textContent = Country;
  //   let f=document.getElementById("Check");
  //   f.textContent=check

  let isValid = true;
  let name = document.getElementById("Name").value;
  let nameErr = document.getElementById("error-name");
  if (name.length < 3) {
    nameErr.textContent = "Name must be at least 3 characters";
    nameErr.style.color = "Red";
    nameErr.style.display="block";
    isValid = false;
  } else nameErr.style.display = "none";

  let email = document.getElementById("Email").value;
  let emailErr = document.getElementById("error-email");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    emailErr.textContent = "Provide valid Email";
    emailErr.style.color = "Red";
    emailErr.style.display = "block";
    isValid = false;
  } else emailErr.style.display = "none";

  let date = document.getElementById("Date").value;
  let dateErr = document.getElementById("error-date");
  let selected = new Date(date);
  let today = new Date();
  selected.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  let yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  if (!date || selected >= yesterday) {
    dateErr.textContent = "Choose a valid Date";
    dateErr.style.color = "Red";
    dateErr.style.display = "block";
    isValid = false;
  } else {
    dateErr.textContent = "";
    dateErr.style.display = "none";
  }
  if (isValid) {
    alert("Form Submitted");
  }
}