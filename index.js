function submitData(userName, userEmail){
    const body = {
        name: userName,
        email: userEmail
    }
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    }
    return fetch("http://localhost:3000/users", config)
    .then(resp => resp.json())
    .then(obj => {
        document.getElementsByTagName("body")[0].append(obj.id);
    })
    .catch((error)=>{
        document.getElementsByTagName("body")[0].append(error.message);
    })
}