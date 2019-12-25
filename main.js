var textWrapper = document.querySelector('.title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.title .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 70*i
  });


  var textWrapper = document.querySelector('.homepage-blurb .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
    .add({
      delay: 1000
    }).add({
      targets: '.homepage-blurb .letter',
      rotateY: [-90, 0],
      duration: 1300,
      delay: (el, i) => 45 * i
    });

    var textWrapper = document.querySelector('.work .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
      .add({
        delay: 1000
      }).add({
        targets: '.work .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i
      });

      var textWrapper = document.querySelector('.projects .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({loop: false})
        .add({
          delay: 1300
        }).add({
          targets: '.projects .letter',
          rotateY: [-90, 0],
          duration: 1600,
          delay: (el, i) => 45 * i
        });

        var textWrapper = document.querySelector('.education .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
          .add({
            delay: 1600
          }).add({
            targets: '.education .letter',
            rotateY: [-90, 0],
            duration: 1900,
            delay: (el, i) => 45 * i
          });

          var textWrapper = document.querySelector('.bio .letters');
          textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

          anime.timeline({loop: false})
            .add({
              delay: 1900
            }).add({
              targets: '.bio .letter',
              rotateY: [-90, 0],
              duration: 2200,
              delay: (el, i) => 45 * i
            });
