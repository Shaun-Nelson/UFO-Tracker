
cardContainer = $("#cardContainer")
console.log(cardContainer)

var contactSubmit = document.getElementById("contactSubmit");
contactSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    var firstName = $("#fristName").val();
    var lastName = $("#lastName").val();
    var emailAddress = $("#exampleInputEmail1").val();
    localStorage.setItem("firstname", firstName);
    localStorage.setItem("lastname", lastName);
    localStorage.setItem("emailAddress", emailAddress);

    document.getElementById('fristName').value='';
    document.getElementById('lastName').value='';
    document.getElementById('exampleInputEmail1').value='';
    
    var FN = localStorage.getItem("firstname");
    var LN = localStorage.getItem("lastname");
    var EM = localStorage.getItem("emailAddress");
    console.log(FN,LN,EM)

    displayCustomer(FN,LN,EM);
});

var displayCustomer = function (firstname,lastname,emailAddress) {
    var card = $("<div>")
    card.addClass("card text-bg-secondary mb-3")
    card.css('max-width', '18rem')

    var cardBody = $("<div>")
    cardBody.addClass("card-body")

    var name = $("<h5>")
    name.addClass("card-title")
    name.text(firstname+" "+lastname)

    var email = $("<p>")
    email.addClass("card-text")
    email.text(emailAddress)

    cardBody.append(name)
    cardBody.append(email)
    card.append(cardBody)
    cardContainer.append(card)
}

// var creatCards = function () {
//     for(var i=0; i<10; i++) {
//         var card = $("<div>")
//         card.addClass("card text-bg-secondary mb-3")
//         card.css('max-width', '18rem')

//         var cardBody = $("<div>")
//         cardBody.addClass("card-body")

//         var name = $("<h5>")
//         name.addClass("card-title")

//         var email = $("<p>")
//         email.addClass("card-text")

//         cardBody.append(name)
//         cardBody.append(email)
//         card.append(cardBody)
//         cardContainer.append(card)
//     }
// }

// creatCards();