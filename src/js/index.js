/*
* @Author: liyue2018
* @Date:   2018-06-06 18:27:12
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-06 23:04:13
*/

window.onload = function () {

    // 头部搜索块的js效果
    headerEffect();

    // 倒计时特效
    timeCountDown();

}

//chrome 和 ie11 兼容性问题
//获取页面滚动出去的距离

function getScroll() {
   return {
       scrollTop:document.documentElement.scrollTop || document.body.scrollTop,
       scrollLeft:document.documentElement.scrollLeft || document.body.scrollLeft
   }
}

// 设置元素之间的内容 兼容性问题
function setInnerText(element,content) {
   // 判断element是否支持innerText
   if(typeof element.innerText === 'string') {
       return element.innerText = content;
   } else {
       return element.textContent = content;
   }
}

// 头部搜索块的js效果
function headerEffect() {
    // 获取当前banner的高度
    var jd_banner = document.querySelector('.jd_banner');
    var jd_bannerHeight = jd_banner.offsetHeight;
    var jd_search = document.querySelector('.jd_search');
    // 获取当前屏幕滚动时，banner滚动出屏幕的距离
    window.onscroll = function () {
        var offsetTop = getScroll().scrollTop;
        var opacity = 0;

        if (offsetTop < jd_bannerHeight) {
            // 计算比例值，获取透明度，设置背景颜色的样式
             opacity = offsetTop / jd_bannerHeight;
             // 设置jd_search样式
             jd_search.style.backgroundColor = 'rgba(233,35,34,' + opacity + ' )';
        } else {
            jd_search.style.backgroundColor = 'rgba(233,35,34,1)';
        }
    }
}

// 倒计时

function timeCountDown () {
    // 获取用于展示时间的span
    var spans = document.querySelectorAll('.jd_sk_time span');
    // 设置初始的倒计时间，以秒作单位
    var totalTime = 3700;
    // 开启定时器
    var timerId = setInterval(function () {
        totalTime --;
        if (totalTime <= 0) {
            clearInterval(timerId);
        }
        // 获取时分秒
        var hour = Math.floor(totalTime / 3600);
        var minute = Math.floor(totalTime % 3600 / 60);
        var second = Math.floor(totalTime % 60);
        // 赋值
        setInnerText(spans[0], Math.floor(hour / 10))
        setInnerText(spans[1], Math.floor(hour % 10))
        setInnerText(spans[2], Math.floor(minute / 10));
        setInnerText(spans[3], Math.floor(minute % 10));
        setInnerText(spans[4], Math.floor(second / 10));
        setInnerText(spans[5], Math.floor(second % 10));
    }, 1000);
}
