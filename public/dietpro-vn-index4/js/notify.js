let data = [{
    "title": "Tiến Dũng 09353625xx",
    "content": "Đã đặt thành công 4 sản phẩm",
    "time": "1 phút trước"
}, {
    "title": "Mai Hà 09089017xx",
    "content": "Đã đặt hàng thành công",
    "time": "5 phút trước"
}, {
    "title": "Kiều Anh 034489020xx ",
    "content": "Đã đặt thành công 5 sản phẩm",
    "time": "2 phút trước"
}, {
    "title": "Anh Tú 090357612xx",
    "content": "Đã xác nhận đặt hàng",
    "time": "3 phút trước"
}, {
    "title": "Trần Hồng 091258905xx",
    "content": "Đã đặt hàng thành công",
    "time": "4 phút trước"
}, {
    "title": "Bùi Ngọc 09638957xx",
    "content": "Đã đặt hàng thành công",
    "time": "2 phút trước"
}, {
    "title": "Đức Minh 034489020xx ",
    "content": "Đã đặt thành công 5 sản phẩm",
    "time": "2 phút trước"
}, {
    "title": "Thanh Lâm 090357612xx",
    "content": "Đã xác nhận đặt hàng",
    "time": "3 phút trước"
}, {
    "title": "Huyền Thanh 091258905xx",
    "content": "Đã đặt hàng thành công",
    "time": "4 phút trước"
}, {
    "title": "Phan Hải 09638957xx",
    "content": "Đã đặt hàng thành công",
    "time": "2 phút trước"
}, {
    "title": "Duy Hùng 09353625xx",
    "content": "Đã đặt thành công 4 sản phẩm",
    "time": "1 phút trước"
}, {
    "title": "Khánh Linh 09089017xx",
    "content": "Đã đặt hàng thành công",
    "time": "5 phút trước"
}];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('DOMContentLoaded', function () {
    let notify = document.getElementById('NOTIFY490');
    setInterval(function () {
            showNotify(notify);
        }, 10000
    );
});


function showNotify(notify) {
    let n = getRandomInt(0, data.length - 1);
    let current = data[n];
    notify.querySelector('.ladi-notify-title').innerHTML = current.title;
    notify.querySelector('.ladi-notify-time').innerHTML = current.time;
    notify.querySelector('.ladi-notify-content').innerHTML = current.content;
    notify.style.opacity = '1';
    notify.style.top = '10px';
    setTimeout(function () {
        notify.style.opacity = '0';
        notify.style.top = '-162px';
    }, 4500);
}