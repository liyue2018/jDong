/*
* @Author: liyue2018
* @Date:   2018-06-08 11:17:32
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-08 15:40:14
*/

window.onload = function () {
    // 获取左侧栏
    var ct_cLeft= document.querySelector('.ct_cLeft');
    // 获取左侧栏的高度
    var leftHeight = ct_cLeft.offsetHeight;
    var ct_list = ct_cLeft.querySelector('ul:first-of-type');
    var ct_listHeight = ct_list.offsetHeight;

    // 设置静止状态下的最大值top
    var maxTop = 0;
    // 静止状态下的最小top值
    var minTop = leftHeight - ct_listHeight;

    // 滑动状态下设置最大top值
    var maxBounceTop = maxTop + 100;
    // 滑动状态下设置最小top值
    var minBounceTop = minTop - 100;
    // 定义全局变量
    var startY, moveY, distanceY;
    startY = 0;
    moveY = 0;
    distanceY = 0;
    // 记录当前滑到的距离
    var currentY = 0;

    // 注册手指触屏事件
    ct_list.addEventListener('touchstart', function(e) {
        startY = e.targetTouches[0].clientY;
    });
    // 注册滑动事件
    ct_list.addEventListener('touchmove', function(e) {
        moveY = e.targetTouches[0].clientY;
        // 计算滑动的距离
        distanceY = moveY - startY;
        // 判断是否超出滑动距离
        if (currentY + distanceY > maxBounceTop || currentY + distanceY < minBounceTop) {
            return;
        }
        // 先将可能存在的过渡效果清除
        ct_list.style.transition = 'none';
        // 实现偏移操作 应该在之前滑动距离的基础之上再滑动
        ct_list.style.top = (currentY + distanceY) + 'px';
    });
    ct_list.addEventListener('touchend', function(e) {
        // 记录当前滑动的距离是否在静止状态下和滑动状态下的top之间
        if (currentY + distanceY < minTop) {
            currentY = minTop;
            ct_list.style.transition = 'top 0.5s';
            ct_list.style.top = minTop + 'px';
        } else if (currentY + distanceY > minTop) {
            currentY = maxTop;
            ct_list.style.transition = 'top 0.5s';
            ct_list.style.top = maxTop + 'px';
        }
        else {
           // 记录当前滑动的距离
           currentY += distanceY;
        }
    })
}


