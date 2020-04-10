const id = window.location.href.replace('http://127.0.0.1:5500/detail.html?id=','')
 
axios.get(`http://localhost:3000/myContacts`)
.then(response => {
    console.log(response);
    const { name , age } = response.data
    document.getElementById('contactDetail').innerHTML = `
    name : ${name}
    <br>
    age : ${age}
    <br>
    <a href = "./>Kembali</a>
    `;
})
