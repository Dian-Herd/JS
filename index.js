function getData(url, tampilData){
    let xhr = new XMLHttpRequest();

    xhr.onloadstart = function(){
        document.querySelector('.tbody').innerHTML = `<tr>Loading...</tr>`;
    }
    xhr.onloadend = function() {
        if(xhr.status === 200){
            return tampilData(JSON.parse(xhr.responseText));
        }
    };
    xhr.open("GET", url);
    xhr.send();
}

getData("https://jsonplaceholder.typicode.com/users", data =>{
    let tbody = '';
    data.forEach(d => {
        tbody += `<tr>
            <td>${d.id}</td>
            <td>${d.name}</td>
            <td>${d.username}</td>
            <td>${d.email}</td>
            <td>${d.address.street}, ${d.address.suite}, ${d.address.city}</td>
            <td>${d.company.name}</td>
        </tr>`
    });
    document.querySelector('.tbody').innerHTML = tbody;
});