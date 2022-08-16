fetch('https://reqres.in/api/users')

.then(response => response.json())
.then(json => 
{
    console.log(json.data);
    const containers = json.data.map(el => 
    { return `
        <div class="card_container">
        <div class="name_container"> 
            ${el.first_name}
            ${el.last_name}
        </div> 
        <img src="${el.avatar}">
        <p class="email_head">Email:</p>
        <p class="email">${el.email}</p>  
        </div> `
    });

    console.log(containers);
    document.querySelector('.grid_container').innerHTML = containers.join('');
})