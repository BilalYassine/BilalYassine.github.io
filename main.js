var textWrapper = document.querySelector('.title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Homepage
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
      delay: 1250
    }).add({
      targets: '.homepage-blurb .letter',
      rotateY: [-90, 0],
      duration: 1550,
      delay: (el, i) => 45 * i
    });

    var textWrapper = document.querySelector('.work .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
      .add({
        delay: 1250
      }).add({
        targets: '.work .letter',
        rotateY: [-90, 0],
        duration: 1550,
        delay: (el, i) => 45 * i
      });

      var textWrapper = document.querySelector('.projects .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({loop: false})
        .add({
          delay: 1550
        }).add({
          targets: '.projects .letter',
          rotateY: [-90, 0],
          duration: 1850,
          delay: (el, i) => 45 * i
        });

        var textWrapper = document.querySelector('.education .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
          .add({
            delay: 1850
          }).add({
            targets: '.education .letter',
            rotateY: [-90, 0],
            duration: 2150,
            delay: (el, i) => 45 * i
          });

          var textWrapper = document.querySelector('.bio .letters');
          textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

          anime.timeline({loop: false})
            .add({
              delay: 2150
            }).add({
              targets: '.bio .letter',
              rotateY: [-90, 0],
              duration: 2450,
              delay: (el, i) => 45 * i
            });
