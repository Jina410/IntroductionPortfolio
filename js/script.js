

$(function () {
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
})