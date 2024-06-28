document.addEventListener('DOMContentLoaded', function () {
    let resultWrapper = document.querySelector("#POPUP711");
    let wheel = document.querySelector(".ladi-spin-lucky-screen");
    let spinWrapper = document.querySelector("#SECTION711");
    let cursor = document.querySelector(".ladi-spin-lucky-start");

    function spin() {
        if (wheel.classList.contains("rotated")) {
            $('#POPUP711').attr('style', 'display: block !important');
        } else {
            wheel.classList.add("super-rotation");
            setTimeout(function () {
                $('#POPUP711').attr('style', 'display: block !important');
                $('#backdrop-popup').attr('style', 'display: block !important; background-color: rgb(0 0 0 / 60%)');
            }, 8000);
            setTimeout(function () {
                spinWrapper.style.display = 'none';
                $('#SECTION654').attr('style', 'display: block !important');
            }, 10000);
            wheel.classList.add("rotated");
        }
    }

    cursor.addEventListener('click', spin);

    resultWrapper.addEventListener('click', function (e) {
            e.preventDefault();
            $('#POPUP711').attr('style', 'display: none !important');
            $('#backdrop-popup').attr('style', 'display: none !important;');
            document.querySelector('#SECTION654').scrollIntoView({behavior: 'smooth', block: 'start'});
        })

});
