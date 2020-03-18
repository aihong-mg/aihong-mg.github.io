$(document).ready(function() {
    var b = 0;
    var a;
    var d = $("#font-desp");
    $("#comb .cob").hover(function() {
        $(this).addClass("on").siblings().removeClass("on");
        a = $(this).index() - 2
    },
    function() {
        $("#comb .cob").removeClass("on")
    });
    $("#comb .cob").click(function(f) {
        a = $(this).index() - 2;
        e(a);
        $(this).addClass("current").siblings().removeClass("current")
    });
    
    var c = $("#description>ul");
    function e(f) {
        switch (f) {
        case(0):
            d.html("将服务灵活地部署在容器之上，利用Bmob提供的API实现应用的<b>高可用和灵活扩展</b>。");
            d.css("color", "#109fd8");
            c.eq(0).show().siblings("ul").hide();
            break;
        case (2):
            d.html("轻松上传存储各类型文件，提供非结构化数据的<b>CDN加速、云存储、云处理服务。</b>");
            d.css("color", "#35a85d");
            c.eq(1).show().siblings("ul").hide();
            break;
        case (3):
            d.html("通过<b>云推送</b>，你可以随时随地向应用程序的用户推送通知或消息，与用户保持积极互动，提升用户留存率，活跃度以及用户体验度。");
            d.css("color", "#b75a9f");
            c.eq(2).show().siblings("ul").hide();
            break;
        case (5):
            d.html("可视化的云端NoSQL数据表设计，支持多达10种数据类型，简单，自由地根据业务需求完成数据库配置，<b>轻松实现云与端的数据交互</b>。");
            d.css("color", "#228bf9");
            c.eq(3).show().siblings("ul").hide();
            break;
        case (7):
            d.html("<b>无需第三方申请审核</b>，不论个人开发者还是企业都可快速接入移动支付功能。接入渠道现支持支付宝支付和微信支付。");
            d.css("color", "#7d7db9");
            c.eq(4).show().siblings("ul").hide();
            break;
        case (8):
            d.html("Bmob短信验证码API使用三网通106通道，一键接入API接口，即可使用。");
            d.css("color", "#e7734a");
            c.eq(5).show().siblings("ul").hide();
            break;
        case (10):
            d.html("为开发者提供IM、客服、实时音视频等通讯功能。开发者不必搭建服务端硬件环境就可以将<b>即时通讯</b>、实时网络功能快速集成至应用中。");
            d.css("color", "#ea4f58");
            c.eq(6).show().siblings("ul").hide();
            break;
        case (12):
            d.html("你可在Web<b>直接用node.js编写逻辑代码</b>，然后部署运行在Bmob服务器，客户端接收云端返回的数据，灵活实现各种业务需求。");
            d.css("color", "#e7a802");
            c.eq(7).show().siblings("ul").hide();
            break;
        case (13):
            d.html("<b>定时任务</b>就相当一个定时器，以一定的间隔时间完成指定的任务处理。比如每天6点更新用户积分排行榜。");
            d.css("color", "#139cce");
            c.eq(8).show().siblings("ul").hide();
            break;
        case (15):
            d.html("只需一句简单的代码，即可让您的产品拥有基于<b>地理位置</b>的服务。");
            d.css("color", "#359e5a");
            c.eq(9).show().siblings("ul").hide();
            break
        }
    }
    $("#description dt").each(function(f, g) {
        var h = -60 * f;
        $(this).css("background-position", "left " + h + "px")
    })
    var $a;
    $("#comb2 a").click(function(f) {
        $(this).addClass("current").siblings().removeClass("current")
        $a=$(this).index();
        fun($a);
        
    });
    function fun(e) {
        switch (e) {
        case(0):
            d.html("可视化的云端NoSQL数据表设计，支持多达10种数据类型，简单，自由地根据业务需求完成数据库配置，<b>轻松实现云与端的数据交互</b>。");
            d.css("color", "#228bf9");
            c.eq(3).show().siblings("ul").hide();
            break;
        case (1):
            d.html("将服务灵活地部署在容器之上，利用Bmob提供的API实现应用的<b>高可用和灵活扩展</b>");
            d.css("color", "#109fd8");
            c.eq(0).show().siblings("ul").hide();
            break;
        case (2):
            d.html("Bmob短信验证码API使用三网通106通道，一键接入API接口，即可使用。");
            d.css("color", "#e7734a");
            c.eq(4).show().siblings("ul").hide();
            break;
        case (3):
            d.html("你可在Web<b>直接用node.js编写逻辑代码</b>，然后部署运行在Bmob服务器，客户端接收云端返回的数据，灵活实现各种业务需求。");
            d.css("color", "#e7a802");
            c.eq(6).show().siblings("ul").hide();
            break;
            
        }
    }

});
$(window).scroll(function() {
    var a = $(this).scrollTop();
    if (a > 50 && a < 530) {
        $(".bgscroll").addClass('gun');
        if (a > 170) {
            $(".bgscroll").addClass('gunbottom');
        } else {
            $(".bgscroll").removeClass('gunbottom');
        }
    } else {
        $(".bgscroll").removeClass('gun');
    }



})