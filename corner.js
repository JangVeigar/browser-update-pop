window.onload = function a() {
	
    var tbody = document.getElementsByTagName('body')[0];
	
    //创建节点
    var bu = document.createElement('div');

    //节点样式
    bu.setAttribute(
        'style',
        'position: fixed; z-index: 111111; color: #000; background-color: #fff8ea; font: 18px Calibri, Helvetica, sans-serif; box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); animation: bufly 1s ease-out 0s; text-align: left; width: 300px; top: 50px; right: 50px; left: auto; border: 1px solid #A29330;'
    );

    //文件下载链接
    var filename = '';

    /* 您的网页浏览器已过期。*/
    var bumainmsgcontent =
        '\u60a8\u7684\u7f51\u9875\u6d4f\u89c8\u5668\u5df2\u8fc7\u671f\u3002';
    /* 更新您的浏览器，以便在该网站上获得更安全、更快速和最好的体验。*/
    var bumoremsgcontent =
        '\u66f4\u65b0\u60a8\u7684\u6d4f\u89c8\u5668\uff0c\u4ee5\u4fbf\u5728\u8be5\u7f51\u7ad9\u4e0a\u83b7\u5f97\u66f4\u5b89\u5168\u3001\u66f4\u5feb\u901f\u548c\u6700\u597d\u7684\u4f53\u9a8c\u3002';
    /* 更新浏览器 */
    var buulcontent = '\u66f4\u65b0\u6d4f\u89c8\u5668';
    /* 忽略 */
    var buigcontent = '\u5ffd\u7565';
	
    /* Code By JangVeigar*/
	
    var content =
        "<div class='bu-pad' role='status' aria-live='polite'> <b class='bu-mainmsg'>" +
        bumainmsgcontent +
        "</b> <span class='bu-moremsg'> " +
        bumoremsgcontent +
        " </span> <span class='bu-buttons'> <a id='buul' href='" +
        filename +
        "' target='_blank' rel='noopener'>" +
        buulcontent +
        "</a> <a id='buig' role='button' tabindex='0'>" +
        buigcontent +
        '</a> </span> </div> <style> .bu { position: absolute; position: fixed; z-index: 111111; width: 100%; top: 0px; left: 0px; border-bottom: 1px solid #A29330; text-align: center; color: #000; background-color: #fff8ea; font: 18px Calibri, Helvetica, sans-serif; box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); animation: bufly 1s ease-out 0s; } .bu-pad { padding: 9px; line-height: 1.7em; }.bu-buttons { display: block; text-align: center; } #buig, #buul{ color: #fff; text-decoration: none; cursor: pointer; box-shadow: 0 0 2px rgba(0, 0, 0, 0.4); padding: 1px 10px; border-radius: 4px; font-weight: normal; background: #5ab400; white-space: nowrap; margin: 0 2px; display: inline-block; } #buig { background-color: #edbc68; } @media only screen and (max-width: 700px) { .bu div { padding: 5px 12px 5px 9px; line-height: 1.3em; } } @keyframes bufly { from { opacity: 0; transform: translateY(-50px) } to { opacity: 1; transform: translateY(0px) } } .bu-fadeout { transition: visibility 0s 8.5s, opacity 8s ease-out .5s; } .bu-buttons,.bu-mainmsg, .bu-moremsg { display: block; }</style>';
    /*内容填充到节点中去 */
    bu.innerHTML = content;

    tbody.appendChild(bu);

    /*遮罩层*/ 
    let btn = document.querySelector('#buig');
    let box = document.querySelector('.bu-pad');
    let shade = document.createElement('div');
    let body = document.body;
    shade.style.height = '100vh';
    shade.style.width = '100%';
    shade.style.position = 'fixed';
    shade.style.top = '0';
    shade.style.left = '0';
    shade.style.zIndex = '111110';
    shade.style.background = 'rgba(95,99,104, .2)';

    body.appendChild(shade);
    btn.addEventListener('click', () => {
        box.parentNode.style.display = 'none';
        shade.style.display = 'none';
        setTimeout(() => {
            box.parentNode.style.display = 'block';
            shade.style.display = 'block';
        }, 5000);
    });
};