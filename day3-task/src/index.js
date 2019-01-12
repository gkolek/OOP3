// działa 100%
// var accordion = document.querySelectorAll('.accordion');
// console.warn(accordion);

// for (var i = 0; i < accordion.length; i++) {
//     console.log[i]
//     accordion[i].addEventListener('click', function (e) {
//         for (var j = 0; j < accordion.length; j++) {
//             if (e.currentTarget != accordion[j]) {
//                 accordion[j].classList.remove('is-open');
//             }
//         }
//         this.classList.toggle('is-open');
//     });
// }

//### nie zamyka!!!
// var accordion = document.querySelectorAll('.accordion');
// console.warn(accordion);

// for (var i = 0; i < accordion.length; i++) {
//     console.log[i]
//     accordion[i].addEventListener('click', function () {
//         for (var j = 0; j < accordion.length; j++) {
//             if (accordion[i] != accordion[j]) {
//                 accordion[j].classList.remove('is-open');
//             }
//         }
//         this.classList.toggle('is-open');
//     });
// }


var accordionFactory = function (accordionGroup) {
    var accordionGroupElements = accordionGroup.querySelectorAll('.accordion');

    var init = function () {
        attachEvents();
    }

    var toggle = function (currentAccordion) {
        for (var j = 0; j < accordionGroupElements.length; j++) {
            if (currentAccordion != accordionGroupElements[j]) {
                accordionGroupElements[j].classList.remove('is-open');
            }
        }

        currentAccordion.classList.toggle('is-open');
    }

    var attachEvents = function () {
        for (var i = 0; i < accordionGroupElements.length; i++) {
            accordionGroupElements[i].addEventListener('click', function (e) {
                toggle(e.currentTarget);
            });
        }
    }

    return {
        init: init
    }
};

var accGroup = accordionFactory(document.querySelectorAll('.accordion-group')[0])
accGroup.init();

var accGroup1 = accordionFactory(document.querySelectorAll('.accordion-group')[1])
accGroup1.init();

