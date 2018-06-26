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



$.ajax({
  url: 'https://randomuser.me/api?results=8',
  async: false,
  dataType: 'json',
  success: function(data) {
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

// let name1 = $('#name1'),
//     name2 = $('#name2').text(),
//     name3 = $('#name3').text(),
//     name4 = $('#name4').text(),
//     name5 = $('#name5').text(),
//     name6 = $('#name6').text(),
//     name7 = $('#name7').text(),
//     name8 = $('#name8').text();
  }
});

  $('#cross').on('click', function(){
    $('#alert').hide();
  });

  window.onscroll = function() {
	posLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
	posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	// console.log('x=' + posLeft + '\ny=' + posTop);

  if (posTop >= 0 && posTop <= 340){
    $('#navigation__dashbord').addClass(' navigation-active');
    } else {
    $('#navigation__dashbord').removeClass(' navigation-active');
  }
  //
  // if (posTop >= 670 && posTop <= 1086){
  //   $('#navigation__membr').addClass(' navigation-active');
  // } else {
  //   $('#navigation__membr').removeClass(' navigation-active');
  // }

  if (posTop >= 670 && posTop <= 1086){
    $('#navigation__visits').addClass(' navigation-active');
  } else {
    $('#navigation__visits').removeClass(' navigation-active');
  }

  if (posTop >= 1087 && posTop <= 1186){
    $('#navigation__settings').addClass(' navigation-active');
    } else {
    $('#navigation__settings').removeClass(' navigation-active');
  }
}

//------------------------------//

$(".headTraffic__nav > .headTraffic__nav--items").click(function(){
  $(".active-nav-items").removeClass("active-nav-items");
  $(this).addClass(" active-nav-items");
});

//------------------------------//

$('.settings__saveCancel--save').click(()=>{
  let emailCheckbox = document.getElementById('email-checkbox').checked;
  let profileCheckbox = document.getElementById('profile-checkbox').checked;
  let timezoneCheckbox = $('#timezone').find(":selected").text()

  sessionStorage.setItem('emailCheckbox', emailCheckbox);
  sessionStorage.setItem('profileCheckbox', profileCheckbox);
  sessionStorage.setItem('timezoneCheckbox', timezoneCheckbox);
  console.log(sessionStorage.getItem('timezoneCheckbox'));
})
function setCheckbox($elem, id){
  if (sessionStorage.getItem($elem) == "true"){
    id.prop('checked', true);
  } else {
    id.prop('checked', false);
  }
};
setCheckbox('emailCheckbox', $('#email-checkbox'));
setCheckbox('profileCheckbox', $('#profile-checkbox'));

if (sessionStorage.getItem('timezoneCheckbox') != null){
  $('#timezone').find(":selected").text(sessionStorage.getItem('timezoneCheckbox'));
}

//----------------------------------------------------------------//

$('.settings__saveCancel--cancel').click(() => {
  sessionStorage.clear();
  // console.log(typeof(sessionStorage.getItem('timezoneCheckbox')));
});

//----------------------------------------------------------------//

let name1 = $('#name1').text(),
    name2 = $('#name2').text(),
    name3 = $('#name3').text(),
    name4 = $('#name4').text(),
    name5 = $('#name5').text(),
    name6 = $('#name6').text(),
    name7 = $('#name7').text(),
    name8 = $('#name8').text();
let $container = $('<div class="autocompleteList"></div>')
let arr = [name1, name2, name3, name4, name5, name6, name7, name8];

function autocomplete(input, arr) {
  let currentFocus;
  input.keyup( (el) => {
     let autocompleteItems, autocompleteInner, val = input.val();
     closeAllLists();
     if (!val) { return false;}
     currentFocus = -1;

     autocompleteItems = $("<div class='autocomplete-items' id='autocomplete-list'>");
     $('.messageUser > form').append(autocompleteItems);

     for (let i = 0; i < arr.length; i++) {
       if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
         autocompleteInner = $('<div class="autocomplete-names"></div>');
         autocompleteInner.html("<span class='bold'>" + arr[i].substr(0, val.length) + "</span>");
         autocompleteInner.append(arr[i].substr(val.length));
         autocompleteItems.append(autocompleteInner);
          autocompleteItems.on('click', (e) => {
            input.val(e.target.innerText);
          });
       }
     }
  });
  function closeAllLists(el) {
      let x = $(".autocomplete-items");
      for (let i = 0; i < x.length; i++) {
        if (el != x[i] && el != input) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  $(document).on("click", (e) => {
    closeAllLists(e.target);
  });
}

autocomplete($('#messageUser-search'), arr);
