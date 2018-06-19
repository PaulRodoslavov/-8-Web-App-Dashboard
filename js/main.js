function createNode(element){
  return document.createElement(element);
}
function append(parent, el){
  return parent.appendChild(el);
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
let photo = document.getElementById('photo');
let email = document. getElementById('email');
let photos = document.getElementsByClassName('photos');

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api?results=8';

fetch(url)
  .then((resp) => resp.json())
  .then(function(data){
    let authors = data.results;
    $('#photo1').attr('src', authors[0].picture.medium);
    $('#photo2').attr('src', authors[1].picture.medium);
    $('#photo3').attr('src', authors[2].picture.medium);
    $('#photo4').attr('src', authors[3].picture.medium);

    $('#photo5').attr('src', authors[4].picture.medium);
    $('#photo6').attr('src', authors[5].picture.medium);
    $('#photo7').attr('src', authors[6].picture.medium);
    $('#photo8').attr('src', authors[7].picture.medium);

    $('#name1').html(capitalizeFirstLetter(authors[0].name.first) + " " + capitalizeFirstLetter(authors[0].name.last));
    $('#name2').html(capitalizeFirstLetter(authors[1].name.first) + " " + capitalizeFirstLetter(authors[1].name.last));
    $('#name3').html(capitalizeFirstLetter(authors[2].name.first) + " " + capitalizeFirstLetter(authors[2].name.last));
    $('#name4').html(capitalizeFirstLetter(authors[3].name.first) + " " + capitalizeFirstLetter(authors[3].name.last));

    $('#name5').html(capitalizeFirstLetter(authors[4].name.first) + " " + capitalizeFirstLetter(authors[4].name.last));
    $('#name6').html(capitalizeFirstLetter(authors[5].name.first) + " " + capitalizeFirstLetter(authors[5].name.last));
    $('#name7').html(capitalizeFirstLetter(authors[6].name.first) + " " + capitalizeFirstLetter(authors[6].name.last));
    $('#name8').html(capitalizeFirstLetter(authors[7].name.first) + " " + capitalizeFirstLetter(authors[7].name.last));

    $('#email1').html(authors[0].email);
    $('#email2').html(authors[1].email);
    $('#email3').html(authors[2].email);
    $('#email4').html(authors[3].email);


    console.log(authors[0].email);



  });
