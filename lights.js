
// on reload, pull data from microcontroller

class Light {
  constructor() {
    this.settingSel = "false";
    this.power = "off";
    this.brightness = 128;
    this.actionPwr = "off";
    this.actionSel = "";
    this.solidColor = "";
  }
}


window.light01 = new Light();
window.light02 = new Light();
window.light03 = new Light();
window.light04 = new Light();
light01.actionSel = "balls";
console.log(light01);
console.log(light01.actionSel);

// selected class aka button 01 -- find the parents index
$('.01').click(function() {
  var parentIndex = $(this).parent().parent().index();
  light01.actionSel = parentIndex
  console.log(light01.actionSel);
});

$('.02').click(function() {
  var parentIndex = $(this).parent().parent().index();
  light02.actionSel = parentIndex
  console.log(light02.actionSel);
});

$('.03').click(function() {
  var parentIndex = $(this).parent().parent().index();
  light03.actionSel = parentIndex
  console.log(light03.actionSel);
});

$('.04').click(function() {
  var parentIndex = $(this).parent().parent().index();
  light04.actionSel = parentIndex
  console.log(light04.actionSel);
});

$('.action-button').click(function() {
  if (light01.settingSel == "true" && $(this).prop("checked") == true ) {
    light01.actionPwr = "on"
  } else {
    light01.actionPwr = "off"
  }
  if (light02.settingSel == "true" && $(this).prop("checked") == true ) {
    light02.actionPwr = "on"
  } else {
    light02.actionPwr = "off"
  }
  if (light03.settingSel == "true" && $(this).prop("checked") == true ) {
    light03.actionPwr = "on"
  } else {
    light03.actionPwr = "off"
  }
  if (light04.settingSel == "true" && $(this).prop("checked") == true ) {
    light04.actionPwr = "on"
  } else {
    light04.actionPwr = "off"
  }
  console.log(light01);
  console.log(light02);
  console.log(light03);
  console.log(light04);
});

$('.power-button').click(function() {
  if (light01.settingSel == "true" && $(this).prop("checked") == true ) {
    light01.power = "on"
  } else {
    light01.power = "off"
  }
  if (light02.settingSel == "true" && $(this).prop("checked") == true ) {
    light02.power = "on"
  } else {
    light02.power = "off"
  }
  if (light03.settingSel == "true" && $(this).prop("checked") == true ) {
    light03.power = "on"
  } else {
    light03.power = "off"
  }
  if (light04.settingSel == "true" && $(this).prop("checked") == true ) {
    light04.power = "on"
  } else {
    light04.power = "off"
  }
  console.log(light01);
  console.log(light02);
  console.log(light03);
  console.log(light04);
});


$('.brightness-slider').on("input", function() {
  var brightness = $('.brightness-slider')[0].value;
  if (light01.settingSel == "true") {
    light01.brightness = brightness;
  }
  if (light02.settingSel == "true") {
    light02.brightness = brightness;
  }
  if (light03.settingSel == "true") {
    light03.brightness = brightness;
  }
  if (light04.settingSel == "true") {
    light04.brightness = brightness;
  }
  console.log(light01);
  console.log(light02);
  console.log(light03);
  console.log(light04);
});

$(function() {
  $('#color-block').on('colorchange', function(e) {
    var color = $(this).wheelColorPicker('value');
    var alpha = $(this).wheelColorPicker('color').a;
    var selector = document.getElementsByClassName("jQWCP-wWheelCursor")[0];
    var acursor = document.getElementsByClassName("jQWCP-wAlphaCursor")[0];
    var scursor = document.getElementsByClassName("jQWCP-wSatCursor")[0];
    var wcursor = document.getElementsByClassName("jQWCP-wValCursor")[0];

    selector.style.backgroundColor = color;
    scursor.style.backgroundColor = color;
    wcursor.style.backgroundColor = color;
    acursor.style.backgroundColor = color;

    if (light01.settingSel == "true") {
      light01.solidColor = color;
    }
    if (light02.settingSel == "true") {
      light02.solidColor = color;
    }
    if (light03.settingSel == "true") {
      light03.solidColor = color;
    }
    if (light04.settingSel == "true") {
      light04.solidColor = color;
    }
    console.log(light01.solidColor);
    console.log(light02.solidColor);
    console.log(light03.solidColor);
    console.log(light04.solidColor);

    // console.log(color);

    // ---- send data from color ------ //
    // document.getElementById("global-color").innerHTML = color;
    // global_color_val = color.substring(1, 7);

    // send_color_request();

    // ---- send data from color ------ //

    $('.color-preview-circle').css("border-color",color);
    $('.color-preview-box').css('background-color', color);
    $('.color-preview-text').text(color);
    $('.color-preview-alpha').text(Math.round(alpha * 100) + '%');
  });
});

$(function() {
  $('#color-input').on('sliderup', function() {
    $('#event-slider').val('Released');
  });
  $('#color-input').on('sliderdown', function() {
    $('#event-slider').val('Pressed');
  });
  $('#color-input').on('focus', function() {
    $('#event-input').val('Focused');
  });
  $('#color-input').on('keypress', function() {
    $('#event-input').val('Key Pressed');
  });
  $('#color-input').on('blur', function() {
    $('#event-input').val('Blurred');
  });
  $('#color-input').on('change', function() {
    $('#event-input').val('Changed');
  });
  $('#color-input').on('colorchange', function() {
    $('#event-color').val($(this).wheelColorPicker('getValue', 'rgb'));
  });
});
