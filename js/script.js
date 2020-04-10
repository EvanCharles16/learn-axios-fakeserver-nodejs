let data = [];
axios.get('http://localhost:3000/myContacts')
    .then(response => {
        console.log(response);
        const listHTML = document.querySelector('#contacts>ol')
        data = response.data;

        data.forEach(item => {
            const { name, age , id } = item;
            const itemHTML = 
            `
            <li onclick = "hapus(${id});">
            Name : ${name}
            <br>
            Age : ${age} Years Old 
                <a href = "./detail.html?id=${id}">Detail</a>
                <button onclick = "ubah(${id})">Edit</button>
                <button onclick = "hapus(${id})">Remove</button>
            </li>
            `;
            listHTML.innerHTML += itemHTML;
        });
    })
    .catch(pesanError => {
        console.error(pesanError);
    })

document.getElementById('addContacts').addEventListener('submit', function (event) {
    // event.preventDefault(); //Biar tidak mengulang lagi (refresh)

    const name = document.getElementsByName('name')[0].value;
    const age = document.getElementsByName('age')[0].value;

    axios.post('http://localhost:3000/myContacts', {
            name,
            age
        })
        .then(response => {
            console.log(response);
            window.alert('Berhasil menambah data');
        })
        .catch(pesanError => {
            console.error(pesanError);
        })
})

const hapus = id => {
    axios.delete(`http://localhost:3000/myContacts/${id}`)
}

const ubah = id => {
    const contact = data.find(item => {
        return item.id === id
    })

    if (contact){
        const name = window.prompt('Name', contact.name);
        const age = window.prompt('Age',contact.age);
        
        axios.put(`http://localhost:3000/myContacts/${id}`, {
            name,
            age
        })
    }
}