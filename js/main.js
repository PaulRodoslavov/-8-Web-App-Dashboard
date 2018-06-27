//-------Function to make first letter upper-case----------//

function captLetr(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//-------Loading data with info of usrs using AJAX----------//

$.ajax({
  url: 'https://randomuser.me/api?results=8',
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

    $('#name1').html(captLetr(authors[0].name.first) + " " + captLetr(authors[0].name.last));
    $('#name2').html(captLetr(authors[1].name.first) + " " + captLetr(authors[1].name.last));
    $('#name3').html(captLetr(authors[2].name.first) + " " + captLetr(authors[2].name.last));
    $('#name4').html(captLetr(authors[3].name.first) + " " + captLetr(authors[3].name.last));

    $('#name5').html(captLetr(authors[4].name.first) + " " + captLetr(authors[4].name.last));
    $('#name6').html(captLetr(authors[5].name.first) + " " + captLetr(authors[5].name.last));
    $('#name7').html(captLetr(authors[6].name.first) + " " + captLetr(authors[6].name.last));
    $('#name8').html(captLetr(authors[7].name.first) + " " + captLetr(authors[7].name.last));

    $('#email1').html(authors[0].email);
    $('#email2').html(authors[1].email);
    $('#email3').html(authors[2].email);
    $('#email4').html(authors[3].email);

//-------Autocomplete search fild----------//

    let result = data.results.map(function(result){
      return captLetr(result.name.first) + " " + captLetr(result.name.last);
    })

    let $container = $('<div class="autocompleteList"></div>');
    function autocomplete(input, arr) {
      let currentFocus;
      input.keyup( (el) => {
         let autocompleteItems, autocompleteInner, val = input.val();
         closeAllLists();
         if (!val) { return false;}

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
    autocomplete($('#messageUser-search'), result);
  }
});

//-------Closing Alert window----------/

  $('#cross').on('click', function(){
    $('#alert').hide();
  });

//-------Looking for active navigation icons----------/

  window.onscroll = function() {
	posLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
	posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  if (posTop >= 0 && posTop <= 442){
    $('#navigation__dashbord').addClass(' navigation-active');
    } else {
    $('#navigation__dashbord').removeClass(' navigation-active');
  }

  if (posTop >= 443 && posTop <= 825){
    $('#navigation__membr').addClass(' navigation-active');
  } else {
    $('#navigation__membr').removeClass(' navigation-active');
  }

  if (posTop >= 825 && posTop <= 1148){
    $('#navigation__visits').addClass(' navigation-active');
  } else {
    $('#navigation__visits').removeClass(' navigation-active');
  }

  if (posTop >= 1149 && posTop <= 1700){
    $('#navigation__settings').addClass(' navigation-active');
    } else {
    $('#navigation__settings').removeClass(' navigation-active');
  }
}

$(".headTraffic__nav > .headTraffic__nav--items").click(function(){
  $(".active-nav-items").removeClass("active-nav-items");
  $(this).addClass(" active-nav-items");
});

//---------------Saving and canceling settings---------------//

$('.settings__saveCancel--save').click(()=>{
  let emailCheckbox = document.getElementById('email-checkbox').checked;
  let profileCheckbox = document.getElementById('profile-checkbox').checked;
  let timezoneCheckbox = $('#timezone').find(":selected").text()

  localStorage.setItem('emailCheckbox', emailCheckbox);
  localStorage.setItem('profileCheckbox', profileCheckbox);
  localStorage.setItem('timezoneCheckbox', timezoneCheckbox);

})
function setCheckbox($elem, id){
  if (localStorage.getItem($elem) == "true"){
    id.prop('checked', true);
  } else {
    id.prop('checked', false);
  }
};
setCheckbox('emailCheckbox', $('#email-checkbox'));
setCheckbox('profileCheckbox', $('#profile-checkbox'));

if (localStorage.getItem('timezoneCheckbox') != null){
  $('#timezone').find(":selected").text(localStorage.getItem('timezoneCheckbox'));
}

$('.settings__saveCancel--cancel').click(() => {
  localStorage.clear();
});

//----------------------Pop Up Notification--------------------------//

$('#head__user--bell').click( () => {
  $('#popUp').css('display', 'flex');
})
$('#popUp').on('click', (el)=> {
  if(el.target.className == "popUp" || el.target.className == "popUp__description--cross"){
    $('#popUp').hide();
  }
});

//----------------------Message after submission form--------------------------//

$("#messageUser__button" ).submit(function( event ) {
  alert( "Message was sent");
  $('#messageUser-search').val('');
  $('.messageUser__message').val('');
});
