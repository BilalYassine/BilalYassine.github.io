// Work Page
var textWrapper = document.querySelector('.title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.title .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  });

var textWrapper = document.querySelector('.backhome .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    delay: 400
  }).add({
    targets: '.backhome .letter',
    rotateY: [-90, 0],
    duration: 750,
    delay: (el, i) => 45 * i
  });

  var textWrapper = document.querySelector('.backprojects .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
    .add({
      delay: 400
    }).add({
      targets: '.backprojects .letter',
      rotateY: [-90, 0],
      duration: 750,
      delay: (el, i) => 45 * i
    });

    var textWrapper = document.querySelector('.backeducation .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
      .add({
        delay: 400
      }).add({
        targets: '.backeducation .letter',
        rotateY: [-90, 0],
        duration: 750,
        delay: (el, i) => 45 * i
      });

      var textWrapper = document.querySelector('.backbio .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({loop: false})
        .add({
          delay: 400
        }).add({
          targets: '.backbio .letter',
          rotateY: [-90, 0],
          duration: 750,
          delay: (el, i) => 45 * i
        });

        var textWrapper = document.querySelector('.blockh2 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
          .add({
            delay: 400
          }).add({
            targets: '.blockh2 .letter',
            rotateY: [-90, 0],
            duration: 750,
            delay: (el, i) => 35 * i
          });

          var textWrapper = document.querySelector('.blockp .words');
          textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

          anime.timeline({loop: false})
            .add({
              delay: 1500
            }).add({
              targets: '.blockp .word',
              rotateY: [-90, 0],
              duration: 50,
              delay: (el, i) => 4 * i
            });

            var textWrapper = document.querySelector('.blockpp .words');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            anime.timeline({loop: false})
              .add({
                delay: 3800
              }).add({
                targets: '.blockpp .word',
                rotateY: [-90, 0],
                duration: 50,
                delay: (el, i) => 4 * i
              });
