var daterangepicker = function () {
  $("#dateInput").daterangepicker(
    {
      autoApply: true,
      locale: {
        format: "YYYY-MM-DD",
        daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
        monthNames: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ],
        customRangeLabel: "사용자 선택",
      },
      ranges: {
        오늘: [moment(), moment()],
        어제: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        이번달: [moment().startOf("month"), moment().endOf("month")],
        전월: [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
        전전월: [
          moment().subtract(2, "month").startOf("month"),
          moment().subtract(2, "month").endOf("month"),
        ],
        "최근 7일": [
          moment().subtract(7, "days"),
          moment().subtract(1, "days"),
        ],
        "최근 30일": [
          moment().subtract(30, "days"),
          moment().subtract(1, "days"),
        ],
        "최근 90일": [
          moment().subtract(90, "days"),
          moment().subtract(1, "days"),
        ],
        "최근 180일": [
          moment().subtract(180, "days"),
          moment().subtract(1, "days"),
        ],
      },
    },
    function (start, end, label) {
      // console.log("Choice Date: " + start.format('YYYYMMDD') + ' ~ ' + end.format('YYYYMMDD'));
      $("input[name=sDate]").val(start.format("YYYYMMDD"));
      $("input[name=eDate]").val(end.format("YYYYMMDD"));
      $("#searchForm").submit();
    }
  );
  $("#dateInput2").daterangepicker(
    {
      autoApply: true,
      locale: {
        format: "YYYY-MM-DD",
        daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
        monthNames: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ],
        customRangeLabel: "사용자 선택",
      },
      ranges: {
        오늘: [moment(), moment()],
        어제: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        이번달: [moment().startOf("month"), moment().endOf("month")],
        전월: [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
        전전월: [
          moment().subtract(2, "month").startOf("month"),
          moment().subtract(2, "month").endOf("month"),
        ],
        "최근 7일": [
          moment().subtract(7, "days"),
          moment().subtract(1, "days"),
        ],
        "최근 30일": [
          moment().subtract(30, "days"),
          moment().subtract(1, "days"),
        ],
        "최근 90일": [
          moment().subtract(90, "days"),
          moment().subtract(1, "days"),
        ],
        "최근 180일": [
          moment().subtract(180, "days"),
          moment().subtract(1, "days"),
        ],
      },
    },
    function (start, end, label) {
      // console.log("Choice Date: " + start.format('YYYYMMDD') + ' ~ ' + end.format('YYYYMMDD'));
      $("input[name=sDate]").val(start.format("YYYYMMDD"));
      $("input[name=eDate]").val(end.format("YYYYMMDD"));
      $("#searchForm").submit();
    }
  );
  /* 제일 오른쪽 부분 없음 */
  $("#dateInput3").daterangepicker(
      {
          autoApply: true,
          locale: {
              format: "YYYY-MM-DD",
              daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
              monthNames: [
                  "01",
                  "02",
                  "03",
                  "04",
                  "05",
                  "06",
                  "07",
                  "08",
                  "09",
                  "10",
                  "11",
                  "12",
              ],
              customRangeLabel: "사용자 선택",
          },
          ranges: false
      },
      function (start, end, label) {
          // console.log("Choice Date: " + start.format('YYYYMMDD') + ' ~ ' + end.format('YYYYMMDD'));
          $("input[name=sDate]").val(start.format("YYYYMMDD"));
          $("input[name=eDate]").val(end.format("YYYYMMDD"));
          $("#searchForm").submit();
      }
  );
};


var tab = function () {
  $(".tabWrap .tabMenu > ul > li").each(function (index) {
    $(this).click(function (e) {
      e.preventDefault();
      $(".tabWrap .tabMenu > ul > li").removeClass("on");
      $(this).closest("li").addClass("on");
      $(".tabCont .box").hide();
      $(".tabCont .box").eq(index).fadeIn(400);
    });
  });
};

var checkAll = function () {
  $(document).on(
    "click",
    ".allCheckArea input.allCheckbox",
    function () {
      var valueCheck = $(this).prop("checked");
      if (valueCheck === true) {
        $(this)
          .closest(".checkBox")
          .find("input[type=checkbox]")
          .prop("checked", true);
      } else if (valueCheck === false) {
        $(this)
          .closest(".checkBox")
          .find("input[type=checkbox]")
          .prop("checked", false);
      }
    }
  );
    /* input .checkBox */
    $(document).on(
    "click",
    "input.allCheckbox",
    function () {
      var valueCheck = $(this).prop("checked");
      if (valueCheck === true) {
        $(this)
          .closest(".checkBox")
          .find("input[type=checkbox]")
          .prop("checked", true);
      } else if (valueCheck === false) {
        $(this)
          .closest(".checkBox")
          .find("input[type=checkbox]")
          .prop("checked", false);
      }
    }
  );

  /*체크박스 all check 되면 allCheckBox checked*/
  $(document).on(
    "click",
    ".allCheckArea input[type=checkbox]",
    function () {
        if($(this).closest(".allCheckArea").find(".checkbox").length  == $(this).closest(".allCheckArea").find(".checkbox:checked").length) {
            $(this).parent().find(".allCheckbox").prop("checked", true);
        } else {
            $(this).parent().find(".allCheckbox").prop("checked", false);
        }
    }
  );
 };



var checkAll_inTable = function () {
  $(document).on("click", ".tableBox input.allCheckbox", function () {
    var valueCheck = $(this).prop("checked");
    if (valueCheck === true) {
      $(this)
        .closest("table")
        .find("tbody input[type=checkbox]")
        .prop("checked", true);
    } else if (valueCheck === false) {
      $(this)
        .closest("table")
        .find("tbody input[type=checkbox]")
        .prop("checked", false);
    }
  });
  $(document).on("click", "table td input[type=checkbox]", function () {
    var selectName = $(this);
    var deselectAll = $(this).closest("table tbody td").find("input").length;
    var selectCount = 0;
    $(this)
      .closest("table")
      .find('input[name="' + selectName + '"]')
      .each(function () {
        var deselectCount = $(this).prop("checked");
        if (deselectCount === true) {
          selectCount += 1;
        }
      });
    if (selectCount === 0) {
      $(this).closest("table").find(".allCheckbox").prop("checked", false);
    } else if (selectCount === deselectAll) {
      $(this).closest("table").find(".allCheckbox").prop("checked", true);
    } else if (selectCount !== deselectAll) {
      $(this).closest("table").find(".allCheckbox").prop("checked", false);
    }
  });
};



/* divTable checkbox allCheck */
var checkAll_divTable = function () {

  var theadCheckbox = $(".tableWrap thead input[type=checkbox]");
  var tbodyCheckbox = $(".tableWrap tbody input[type=checkbox]");

  /* thead에 있는 checkbox가 클릭된 경우 tbody에서 같은 name값을 가지는 checkbox의 valude값을 thead의 checkbox와 동일하게 변경 */
  $(theadCheckbox).on('click', function () {

      var checkName = $(this).attr('name'); 
      var checkValue = $(this).prop("checked"); 
      
      if (checkValue == true ) {
          tbodyCheckbox.each(function(index, key) {
            
            if ($(key).attr('name') == checkName ){
              $(key).prop("checked", true);
              console.log($(key).attr('name'));
            }
          });

          $(this)
            .closest(".tableWrap")
            .find("tbody input[type=checkbox]")
            .attr(checkName)
            .prop("checked", true);
            
      } else {
          tbodyCheckbox.each(function(index, key) {
            
            if ($(key).attr('name') == checkName ){
              $(key).prop("checked", false);
            }
          });
          $(this)
            .closest(".tableWrap")
            .find("tbody input[type=checkbox]")
            .attr(checkName)
            .prop("checked", false);
      }
  });
};


var manage_media = function () {
  $(".manage_media > div").each(function () {
    $(this)
      .find(".btn-del")
      .click(function () {
        $(this).parent().hide(300);
      });
  });
};

var foldBtn = function () {
  var foldBtn = $(".checkboxWrap.depth2 .allCheck .btn-fold");
  foldBtn.each(function () {
    $(this).on("click", function () {
      $(this).parent().next("ul").toggleClass("folding");
      $(this).toggleClass("fold-close");
    });
  });
};

// 팝업 브라우저 가운데 나타나기
var popupLoad = function() {

    $(".btnCampaign1").click(function(event) { //팝업 Open 버튼 클릭 시

        $(".popup_wrap").css("display", "block"); //팝업창 display block
        $("html").css("overflow", "hidden"); //html 스크롤바 없애기

        $(".popup_wrap").css({
            "top": (($(window).height() - $(".popup_wrap").outerHeight()) / 2 + $(window).scrollTop()) + "px",
            "left": (($(window).width() - $(".popup_wrap").outerWidth()) / 2 + $(window).scrollLeft()) + "px"
            //팝업창을 가운데로 띄우기 위해 현재 화면의 가운데 값과 스크롤 값을 계산하여 팝업창 CSS 설정
        });

    });
};

 /* ////// tracking 메뉴 /////// */
 /* dashboard - tabBoxBtn & tabBoxlist 일,주,월 탭 클릭시 효과 */
var tabBoxBtn = function () {
    var tabBoxBtn = $(".tracking_dashboard .sec_chartArea .tab_date li");
    var tabBoxList = $(".tracking_dashboard .sec_chartArea .chartArea > div");
    tabBoxBtn.each(function () {
        $(this).on("click", function () {
            $(tabBoxBtn).removeClass("on");
            var index = $(this).addClass("on").index();
            $(".show").removeClass("show");
            $(tabBoxList).eq(index).addClass("show")
        });
    });
};

 /* dashboard iClockBtn hover 시계아이콘 오버시 말풍선 */
var iClockBtn = function () {
    var iClockBtn = $(".tracking_dashboard i.i_clock");
       iClockBtn.each(function () {
        //i_mark 마우스 오버 & 마우스 아웃시 말풍선 효과
        $(this).on('mouseover', function () {
            $(this).siblings(".i_clock_hover").css('display', 'block');
        }).on('mouseout', function () {
            $('.i_clock_hover').css('display', 'none');
        })
    });
};

 /* tracking_setting_createApp i_mark 오버시 말풍선 */
var iMarkBtn = function () {
    var iMarkBtn = $(".tracking_setting_createApp i.i_mark");
       iMarkBtn.each(function () {
        //i_mark 마우스 오버 & 마우스 아웃시 말풍선 효과
        $(this).on('mouseover', function () {
            $(this).siblings(".i_mark_hover").css('display', 'block');
        }).on('mouseout', function () {
            $('.i_mark_hover').css('display', 'none');
        })
    });
};


/* dashboard - selectBox toggle & toggleIcon Toggle  앱셀렉트 클릭시*/
var selectBoxToggle = function () {
  var selectBoxToggle = $(".tracking_dashboard .sec_infoApp .info_select");
  var selectBoxToggleList = $(".tracking_dashboard .sec_infoApp .info_select .info_select_list");
    selectBoxToggle.each(function () {
        $(this).on("click", function () {
          //selectBoxToggle up&down Toggle
          $(this).toggleClass("on");
          //selectBoxToggleList slideToggle
          $(selectBoxToggleList).slideToggle();
      });

      // 영역 밖 클릭시 메뉴 닫힘
      $(document).on("click", function (event) {
          var selectBoxToggleOutside = $(selectBoxToggle);
          if (selectBoxToggleOutside !== event.target && !selectBoxToggleOutside.has(event.target).length) {
              $(selectBoxToggleList).slideUp();
              $(selectBoxToggle).removeClass("on");
          }
      });
  });
};


$(function () {
  daterangepicker();
  tab();
  checkAll();
  checkAll_inTable();
  // checkAll_divTable();
  manage_media();
  foldBtn();
  popupLoad();
  tabBoxBtn();
  iClockBtn();
  iMarkBtn();
  selectBoxToggle();
});

