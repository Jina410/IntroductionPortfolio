

$(function () {
  //header
  $(window).scroll(function () {
    let st = $(window).scrollTop();
    if (st > 1000) {
      $("header").css("opacity", "0");
    } else {
      $("header").css("opacity", "1");
    }
  })

  //해당 #으로 갈시 사이드메뉴 on
  $(document).ready(function () {
    const sections = $(".menu a").map(function () {
      return $($(this).attr("href"));
    });

    $(window).on("scroll", function () {
      let scrollPos = $(window).scrollTop() + $(window).height() / 2;

      sections.each(function (index, section) {
        let top = $(section).offset().top;
        let bottom = top + $(section).outerHeight();

        if (scrollPos >= top && scrollPos < bottom) {
          $(".menu .dia").removeClass("on");
          $(".menu a").eq(index).find(".dia").addClass("on");
          return false;
        }
      });
    });
  });

  //저는 이런사람입니다 aboutme 해당 스크롤에 오면 .photo.rotate @profileRotate재생
  $(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop(); //스크롤 세로top값 취득

    let wh = $(window).height(); //요소의 높이

    let tOffset = $("#profile").offset().top; //#profile의 top위치
    let tHeight = $("#profile").outerHeight(); //#profile의 border,margin을 포함한 높이

    if (scrollTop + wh > tOffset + 100 && scrollTop < tOffset + tHeight - 100) {
      //스크롤세로top값+요소의 높이 > #profile && 스크롤세로top값 < #profile + #profile 높이
      //화면에 아래쪽위치가 #profile보다 크다 && 화면의 위쪽위치가 #profile의 맨아래보다 위에 있다
      //화면(브라우저)이 #profile겹치는 구간이 있는 동안
      let $photo = $('.photo');

      if (!$photo.hasClass("rotate")) { // .photo에 rotate가 없으면 true
        $photo.addClass("rotate");

        $photo.on("animationend", function () { // css 애니메이션(.rotate)이 끝났을 때
          $photo.removeClass("rotate").addClass("infinite");
        });
      }
    } else {
      $('.photo').removeClass('rotate');
      $('.photo').removeClass('infinite');
    }
  })

  //저 이런것좀 합니다 skills
  $('#skills .skill-list .skill').click(function () {
    let index = $(this).index();

    $('#skills .skill-list .skill h1, #skills .skill-list .skill .skillpro').removeClass("on");
    $(this).children().addClass("on");

    $('#skills .view').removeClass("on");
    $('#skills .view').eq(index).addClass("on");
  })

  //작업물 webProject .arrow
  $('#works .project-wrap .arrow').click(function () {
    let wrap = $("#works .project-wrap");
    if (wrap.find(".project-item").is(":animated")) return false;

    let first = wrap.find(".project-item").first();
    first.animate({ marginLeft: "-100%" }, 400, function () {
      first.css('marginLeft', '0');
      wrap.append(first);
    });

    $('#works .project-wrap .project-item .more-text p').addClass('hide');
  });

  //작업물 webProject ,more-text
  $('#works .project-wrap .project-item .more-text div').click(function () {
    let index = $(this).index();
    $('#works .project-wrap .project-item .more-text p').eq(index).toggleClass('hide');
  })

  //etc 슬라이드
  const imgSlide = document.querySelector("#works .etc .etc-box-wrap");

  const clone = imgSlide.cloneNode(true);
  document.querySelector("#works .wrap").appendChild(clone);
  document.querySelector("#works .etc .etc-box-wrap").offsetWidth + "px";

  imgSlide.classList.add("origin");
  clone.classList.add("clone");

  $(function () {
    $("#works .wrap").on("mouseenter", function () {
      $("#works .etc .etc-box-wrap").css("animation-play-state", "paused");
    });

    $("#works .wrap").on("mouseleave", function () {
      $("#works .etc .etc-box-wrap").css("animation-play-state", "running");
    });
  });

})