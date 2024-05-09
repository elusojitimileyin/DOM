const  form = document.forms["form"];
// console.log(form);

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const username = document.querySelector(".username").value;
    const password = document.querySelector(".password").value;

    const obj = {

        username : username,
        password : password

    }
    async function postJSON(data) {
        try {
            const response = await fetch("http://localhost:9009/api/TodoApp_User/register", {
                method: "PATCH", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            alert("Success:");
        } catch (error) {
            console.error("Error:", error);
        }
    }

    postJSON(obj);
})