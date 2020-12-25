// Import HTML template
$(function(){
    $("#included__main-navigation").load("template/main-navigation.html");
    $("#included__footer").load("template/footer.html");
    $("#included__sub-footer").load("template/sub-footer.html");
    // any blocks
    $("#included__feedback-block").load("template/feedback-block.html");
    $("#included__kpi-block").load("template/kpi-block.html");
    $("#included__news-block").load("template/news-block.html");
    // aside block
    $("#included__aside-search").load("template/aside-search.html");
    $("#included__aside-news").load("template/aside-news.html");
    $("#included__aside-action").load("template/aside-action.html");
    $("#included__aside-btn").load("template/aside-btn.html");
    $("#included__aside-links").load("template/aside-links.html");
    // Pop-up
    $("#included__pop-up").load("template/pop-up.html");
    // Mobile App
    $("#included__mob-app").load("template/mob-app.html");
});
// ---------------------------------------------------------------------------





// ---------------------------------------------------------------------------
// Только для cl-program-layalty.html

// Добавление и удаление расширеного списка баллов
$('.more-point__btn').on('click', function(event){
    $(this).toggleClass('more-point__btn--hover');
    $('.bonus-table--hide-block ').toggleClass('bonus-table--show-block');
});
// ---------------------------------------------------------------------------





// ---------------------------------------------------------------------------
// Только для cl-express-delivery.html

// Добавление и удаление Дополнительной посылки
$('.del-order__parcel-btn').on('click', function(event){
    $('.add-parcel').toggleClass('add-parcel--show-block');
});

$('.add-parcel__delete').on('click', function(event){
    $('.add-parcel').removeClass('add-parcel--show-block');
});

// Появление инпута 3-тя особа
$('#person-3dr').on('change', function() {
    $('.person-3dr__input').toggleClass('person-3dr__hidden', this.value != 'string:100000002');
});

// Появление инпута "Оберіть платника страховки"
$('#declared-cost').on('change', function() {
    $('.insurance-block').toggleClass('insurance-block__hidden', this.value);
});

// Появление инпута "Оберіть платника страховки" для 3-тя особа
$('#declared-cost__3dr').on('change', function() {
    $('.insurance-payer-3dr__input').toggleClass('insurance-payer-3dr__hidden', this.value != 'string:100000002');
});
// ---------------------------------------------------------------------------







// ---------------------------------------------------------------------------
// Только для cl-сourier-form.html

// Добавление и удаление блока при выборе Тип вантажу: "Палети"
$('#type-cargo').bind("change keyup",function() {
    $(this).find(":selected").each(function () {
        $('.only-for-pallets').toggleClass('show-block2');
        $('.only-for-cargo').toggleClass('hide-block2');
    });
});

// Открытие блока добавление Склада
$('.add-warehouse__btn').on('click', function(event){
    $('.add-parcel').toggleClass('add-parcel--show-block');
});

// Кнопка удаления блока Склада
$('.add-parcel__delete').on('click', function(event){
    $('.add-parcel').removeClass('add-parcel--show-block');
});

// Чекбокс Доупакувати вантаж, появление textarea при выборе
$('.add-pack').on('click', function(event){
    $('.add-pack__text-area').toggleClass('show-block');
});

// Забирання вантажу на кожен день, при выборе - появление всех дней нидели
$('.day-vote').on('click', function(event){
    $('.everyday_block').toggleClass('show-it');
});
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// Только для co-faq.html

// Появление инпута ответов на вопросы при выборе Темы
$('.faq__search').on('change', function() {
    $('.topic-001').toggleClass('faq__answer--hide', this.value != 's1');
    $('.topic-002').toggleClass('faq__answer--hide', this.value != 's2');
    $('.topic-003').toggleClass('faq__answer--hide', this.value != 's3');
    $('.topic-004').toggleClass('faq__answer--hide', this.value != 's4');
    $('.topic-005').toggleClass('faq__answer--hide', this.value != 's5');
    $('.topic-006').toggleClass('faq__answer--hide', this.value != 's6');
    $('.topic-007').toggleClass('faq__answer--hide', this.value != 's7');
    $('.topic-008').toggleClass('faq__answer--hide', this.value != 's8');
});

// ---------------------------------------------------------------------------




// ---------------------------------------------------------------------------
// Только для cl-express-delivery.html

$('#time09').hover(
    function(){ $('.schedule').addClass('schedule__time09') },
    function(){ $('.schedule').removeClass('schedule__time09') }
);
$('#time12').hover(
    function(){ $('.schedule').addClass('schedule__time12') },
    function(){ $('.schedule').removeClass('schedule__time12') }
);
$('#time15').hover(
    function(){ $('.schedule').addClass('schedule__time15') },
    function(){ $('.schedule').removeClass('schedule__time15') }
);
$('#time18').hover(
    function(){ $('.schedule').addClass('schedule__time18') },
    function(){ $('.schedule').removeClass('schedule__time18') }
);
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// Автоматическое открытие <Details> при переходе по якорю,
// сейчас используется на нескольких страница, и в будущем думаю понадобится

function MakeArrayOfAllPrefixes(str){
    //console.log("MakeArrayOfAllPrefixes("+str+")");
    var prefixes = [];
    for (var i=1; i<=str.length; i++){
  prefixes.push(str.substr(0,i));
    }
    console.log("MakeArrayOfAllPrefixes("+str+") -> returns [" + prefixes + "]");
    return prefixes;
  }
  
  function SetOpenAttrForIdsAndPrefixes(ids, openAttrBool){
    $('details').attr('open',false); // close all others first
    console.log("SetOpenAttrForIds([" +ids+"], "+openAttrBool+")");
    for (idindex in ids) {
  var id = ids[idindex];
  if (id != ""){
    var prefixes = MakeArrayOfAllPrefixes(id);
    for (prefixidx in prefixes) {
      var prefix = prefixes[prefixidx];
      if(openAttrBool==true) { operationstr="Opening"; } else { operationstr="Closing"};
      console.log(operationstr+" <details id='#"+prefix+"'> with $('#"+prefix+").attr('open',"+openAttrBool+");");
      $('#'+prefix).attr('open',openAttrBool);
    }
  }
    }
  }
  
  function SetOpenAttrForIdsAndPrefixesFromLocationHash(){
    var hashes = $(location).attr('hash').split('#'); 
    SetOpenAttrForIdsAndPrefixes(hashes, true); 
  }
  
  $(document).ready(function(){
    SetOpenAttrForIdsAndPrefixesFromLocationHash();
  
    if ("onhashchange" in window) {// does the browser support the hashchange event?
    window.onhashchange = function () {
       SetOpenAttrForIdsAndPrefixesFromLocationHash();
    }
    }
});
// ---------------------------------------------------------------------------