'use strict';

$("#fullname").text(localStorage.getItem("fullname"));
$("#position").text(localStorage.getItem("position"));
$("#city").text(localStorage.getItem("city"));
$.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function (data) {
        let res = data.results;
        console.log(res);
        res.forEach(d => {
            let user = document.createElement("div");
            user.classList.add("user");
            let img = document.createElement("img");
            img.setAttribute("src", d.picture.large);
            img.classList.add("img-fluid");
            user.append(img);

            let fullname = document.createElement("div");
            fullname.classList.add("fullname");
            fullname.innerHTML = d.name.title + " " + d.name.first + " " + d.name.last;
            user.append(fullname);

            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.innerHTML = d.cell;
            user.append(cell);

            let email = document.createElement("div");
            email.classList.add("email");
            email.innerHTML = d.email;
            user.append(email);

            $("#users").append(user);
        })
    }
});