(function($){
	$(function(){

        // Phone nav click function
        $('.filter-tab-trigger ul li').click(function () {
            $('.filter-tab-trigger ul li').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.small-card-tab-wrap .small-card-tab-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        if($(window).width() > 767){
        $('.search').click(function(){
            $('body').addClass('searchShown')
        })

        $('.search-close').click(function(){
            $('body').removeClass('searchShown')
        })
        }
        $('.sub-menu').parent('li').addClass('hasSubnav')

        $('.phone-nav').click(function(){
            $('.nav-wrap').slideToggle(550)
            $('body').toggleClass('navShown')
        })

        if($(window).width() < 992){
            $('.search-bar input[type="search"]').attr("placeholder", "Search for programmes...");
        }
        if($(window).width() < 992){
            $('li.hasSubnav').each(function(){
            var $this = $(this);
            
            $this.find('a').click(function(){
                $('.sub-menu').slideUp()
                $('li.hasSubnav').removeClass('sub-nav-active');
                
                if($this.find('.sub-menu:visible').length){
                    $('.sub-menu').slideUp()
                    $('li.hasSubnav').removeClass('sub-nav-active');
                }else{
                    $('.sub-menu').slideUp()
                    $this.find('.sub-menu').slideDown(500);
                    $('li.hasSubnav').removeClass('sub-nav-active');
                    $this.addClass('sub-nav-active')
                }
                
                
            })
            
        })
        }
        if($(window).width() < 768){
            $('.search').click(function(){
                $('body').toggleClass('searchShown')
            })
        }

        if($(window).width() > 991){
           

            $(".sub-nav-tab-trigger").hide();
            $(".sub-nav-tab-trigger").eq(0).show();
            $("li.hasSubnav > a").eq(0).addClass("active");
            $("li.hasSubnav > a").click(function(e) {
                e.preventDefault();
                $("li.hasSubnav > a").removeClass("active");
                $(this).addClass("active");
                $(".sub-nav-tab-trigger").hide()
                var activeTab = $(this).attr("rel");
                $("#" + activeTab).fadeIn()
            });


        }

        if($(window).width() < 992){
            $('.filter-tab-trigger').each(function(){
                var $$this = $(this),
                    showValue1 = $('.filter-tab-trigger em dfn'),
                    showValue2 = $('.filter-tab-trigger em sup');
                console.log('test')
                $$this.find('.filter-active').click(function(){
                    $$this.find('ul').slideToggle();
                })

                $('.filter-tab-trigger ul li a').click(function(){

                 var textValue1 = $(this).find('dfn').text(),
                    textValue2 = $(this).find('sup').text();
                    $$this.find('ul').slideUp();
                    showValue1.text(textValue1)
                    showValue2.text(textValue2)
                })

            })
        }

        // Phone nav click function
        $('.programmes-info-tab-trigger ul li').click(function () {
            $('.programmes-info-tab-trigger ul li').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.programmes-info-tab-item-wrap .programmes-info-tab-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        if($(window).width() < 992){
            $('.programmes-info-tab-trigger').each(function(){
                var $$this = $(this),
                    showValue1 = $('.programmes-info-tab-trigger em dfn'),
                    showValue2 = $('.programmes-info-tab-trigger em sup');
                console.log('test')
                $$this.find('.programmes-active').click(function(){
                    $$this.find('ul').slideToggle();
                })

                $('.programmes-info-tab-trigger ul li a').click(function(){

                    var textValue1 = $(this).find('dfn').text(),
                        textValue2 = $(this).find('sup').text();
                    $$this.find('ul').slideUp();
                    showValue1.text(textValue1)
                    showValue2.text(textValue2)
                })

            })
        }
	})// End ready function.
   
})(jQuery)

