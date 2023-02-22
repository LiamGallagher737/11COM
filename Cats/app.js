const catArm = document.querySelector('#cat-arm');

catArm.style.left = '-600px';

new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    autoScrolling: true,
    navigation: true,
    onLeave: function (section, origin, destination, direction, trigger) {
        let down = destination === 'down';

        catArm.style.transition = 'left 0.2s';
        catArm.style.left = '-150px';
        catArm.style.rotate = down ? '20deg' : '-20deg';

        setTimeout(function () {
            catArm.style.transition = '0.5s';
            catArm.style.rotate = down ? '-40deg' : '40deg';

            setTimeout(function () {
                catArm.style.transition = 'left 0.8s';
                catArm.style.left = '-600px';
            }, 500);

        }, 100);
    }
});
