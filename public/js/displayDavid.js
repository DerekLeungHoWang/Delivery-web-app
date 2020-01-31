// INDEX PAGE
// image fade in
function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}
$(document).ready(function(){
        showImages('#cascade1');
        showImages('#cascade2');
        showImages('#cascade3');
});

$(window).scroll(function() {
        showImages('#cascade1');
        showImages('#cascade2');
        showImages('#cascade3');
});


//index button click to move to restaurants div
$("#exploreButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".category").offset().top},
        'slow');
});



//REVIEWS

// var notesTemplate = Handlebars.compile(
//     `
//     {{#each notes}}
//     <div class="note">
//         <span class="input"><textarea data-id="{{ id }}">{{ content }}</textarea></span>

//         <button class="remove btn btn-xs" data-id="{{ id }}"><i class = "fa fa-trash" aria-hidden="true"></i></button>
//         </div>
//         {{/each}}
//     `
// );

// $(()=>{

//     axios.get('/api/notes/')
//         .then((res)=>{
//             console.log(res.data, 'X')
//             reloadNotes(res.data)
//         }).catch((err)=>{
//             console.log(err)
//         });

//     $('#add').submit((e)=>{
//         e.preventDefault(); 
//         console.log('add pressed')

//         var val = $('textarea[name=note]').val();
//         console.log(val)
//         if (val===''){
//             return;
//         }
//         $('textarea[name=note]').val('');
//         axios.post('/api/notes/', {
//             note: val
//         }).then((res)=>{
//             console.log(res.data)
//             reloadNotes(res.data);
//         }).catch((err)=>{
//             console.log(err)
//         })
//     });

// });
