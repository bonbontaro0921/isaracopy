$(function() {

    $('.question').addClass('down')
    $('.flow-header').addClass('down')
    
    $('.faq-list-item').click(function() {
      var $answer = $(this).find('.answer');
      var $question = $(this).find('.question');
      if($answer.hasClass('open')) { 
        $answer.removeClass('open');
        $answer.slideUp();
        $question.removeClass('up');
        $question.addClass('down');      
        
      } else {
        $answer.addClass('open'); 
        $answer.slideDown();
        $question.removeClass('down');
        $question.addClass('up');  
      }
    });

    $('.flow-list-item').click(function(){
        var $flowBody = $(this).find('.flow-body');
        var $flowHeader = $(this).find('.flow-header');
        if($flowBody.hasClass('open')){
            $flowBody.removeClass('open');
            $flowBody.slideUp();
            $flowHeader.removeClass('up');
            $flowHeader.addClass('down');
        }else{
            $flowBody.addClass('open');
            $flowBody.slideDown();
            $flowHeader.removeClass('down')
            $flowHeader.addClass('up');
        }

    });

    var $pagetop = $('#page-top');

    $pagetop.hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $pagetop.fadeIn();
        }else{
            $pagetop.fadeOut();
        }    
    });
    

    $pagetop.click(function(){
        $('body,html').animate(
            {scrollTop:0},500
        );
        return false;
    });
  });