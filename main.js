var textWrapper = document.querySelector('.title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    delay: 100
  }).add({
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
      delay: 1100
    }).add({
      targets: '.homepage-blurb .letter',
      rotateY: [-90, 0],
      duration: 1400,
      delay: (el, i) => 45 * i
    });

    var textWrapper = document.querySelector('.work .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
      .add({
        delay: 1100
      }).add({
        targets: '.work .letter',
        rotateY: [-90, 0],
        duration: 1400,
        delay: (el, i) => 45 * i
      });

      var textWrapper = document.querySelector('.projects .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({loop: false})
        .add({
          delay: 1400
        }).add({
          targets: '.projects .letter',
          rotateY: [-90, 0],
          duration: 1700,
          delay: (el, i) => 45 * i
        });

        var textWrapper = document.querySelector('.education .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
          .add({
            delay: 1700
          }).add({
            targets: '.education .letter',
            rotateY: [-90, 0],
            duration: 2000,
            delay: (el, i) => 45 * i
          });

          var textWrapper = document.querySelector('.bio .letters');
          textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

          anime.timeline({loop: false})
            .add({
              delay: 2000
            }).add({
              targets: '.bio .letter',
              rotateY: [-90, 0],
              duration: 2300,
              delay: (el, i) => 45 * i
            });
