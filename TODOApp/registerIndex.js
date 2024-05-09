const  form = document.forms["form"];
// console.log(form);

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.querySelector(".lastName").value;
    const username = document.querySelector(".username").value;
    const password = document.querySelector(".password").value;
    const email = document.querySelector(".email").value;

    const obj = {
        firstName : firstName,
        lastName : lastName,
        username : username,
        password : password,
        email : email

    }
    async function postJSON(data) {
        try {
            const response = await fetch("http://localhost:9009/api/TodoApp_User/register", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log(result)
            if(result.successful){
            document.querySelector(".Success").textContent ="Register SuccessFul";
            }else{
                console.log(result.response)
                document.querySelector(".Success").textContent =result.response;
            }

        } catch (error) {
            console.error("Error:", error);
        }
    }

    postJSON(obj);
})