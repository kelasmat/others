$(document).ready(function () {
    setInterval(function () {
        if (!$("#mycontent:visible").length) {
            window.location.href = "https://www.penapedia.com/"
        }
    }, 3000)
});
window.onload = function () {
    var _0x9c47x1 = document.getElementById("mycontent");
    _0x9c47x1.setAttribute("href", "https://www.penapedia.com/");
    _0x9c47x1.setAttribute("rel", "dofollow");
    _0x9c47x1.setAttribute("title", "Pena Pedia");
    _0x9c47x1.setAttribute("style", "display: inline-block!important; font-size: inherit!important; color: #0be6af!important; visibility: visible!important;z-index:99!important; opacity: 1!important;");
    _0x9c47x1.innerHTML = "Pena Pedia"
};
$(function () {
    $("#main-menu").each(function () {
        var _0x9c47x2 = $(this).find(".LinkList ul > li").children("a"),
            _0x9c47x3 = _0x9c47x2.length;
        for (var _0x9c47x4 = 0; _0x9c47x4 < _0x9c47x3; _0x9c47x4++) {
            var _0x9c47x5 = _0x9c47x2.eq(_0x9c47x4),
                _0x9c47x6 = _0x9c47x5.text();
            if (_0x9c47x6.charAt(0) !== "_") {
                var _0x9c47x7 = _0x9c47x2.eq(_0x9c47x4 + 1),
                    _0x9c47x8 = _0x9c47x7.text();
                if (_0x9c47x8.charAt(0) === "_") {
                    var _0x9c47x9 = _0x9c47x5.parent();
                    _0x9c47x9.append('<ul class="sub-menu m-sub"/>')
                }
            };
            if (_0x9c47x6.charAt(0) === "_") {
                _0x9c47x5.text(_0x9c47x6.replace("_", ""));
                _0x9c47x5.parent().appendTo(_0x9c47x9.children(".sub-menu"))
            }
        };
        for (var _0x9c47x4 = 0; _0x9c47x4 < _0x9c47x3; _0x9c47x4++) {
            var _0x9c47xa = _0x9c47x2.eq(_0x9c47x4),
                _0x9c47xb = _0x9c47xa.text();
            if (_0x9c47xb.charAt(0) !== "_") {
                var _0x9c47xc = _0x9c47x2.eq(_0x9c47x4 + 1),
                    _0x9c47xd = _0x9c47xc.text();
                if (_0x9c47xd.charAt(0) === "_") {
                    var _0x9c47xe = _0x9c47xa.parent();
                    _0x9c47xe.append('<ul class="sub-menu2 m-sub"/>')
                }
            };
            if (_0x9c47xb.charAt(0) === "_") {
                _0x9c47xa.text(_0x9c47xb.replace("_", ""));
                _0x9c47xa.parent().appendTo(_0x9c47xe.children(".sub-menu2"))
            }
        };
        $("#main-menu ul li ul").parent("li").addClass("has-sub");
        $("#main-menu .widget").addClass("show-menu")
    });
    $("#main-menu-nav").clone().appendTo(".mobile-menu");
    $(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>');
    $(".mobile-menu ul > li a").each(function () {
        var _0x9c47xf = $(this),
            _0x9c47x10 = _0x9c47xf.attr("href").trim(),
            _0x9c47x11 = _0x9c47x10.toLowerCase(),
            _0x9c47x12 = _0x9c47x10.split("/"),
            _0x9c47x13 = _0x9c47x12[0];
        if (_0x9c47x11.match("mega-menu")) {
            _0x9c47xf.attr("href", "/search/label/" + _0x9c47x13 + "\?&max-results=" + postPerPage)
        }
    });
    $(".slide-menu-toggle").on("click", function () {
        $("body").toggleClass("nav-active")
    });
    $(".mobile-menu ul li .submenu-toggle").on("click", function (_0x9c47xf) {
        if ($(this).parent().hasClass("has-sub")) {
            _0x9c47xf.preventDefault();
            if (!$(this).parent().hasClass("show")) {
                $(this).parent().addClass("show").children(".m-sub").slideToggle(170)
            } else {
                $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170)
            }
        }
    });
    $(".show-search").on("click", function () {
        $("body").toggleClass("search-active")
    });
    $(".Label a, a.b-label").attr("href", function (_0x9c47xf, _0x9c47x14) {
        return _0x9c47x14.replace(_0x9c47x14, _0x9c47x14 + "\?&max-results=" + postPerPage)
    });
    $(".avatar-image-container img").attr("src", function (_0x9c47xf, _0x9c47x4) {
        _0x9c47x4 = _0x9c47x4.replace("/s35-c/", "/s45-c/");
        _0x9c47x4 = _0x9c47x4.replace("//img1.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png");
        return _0x9c47x4
    });
    $(".emoji-toggle").on("click", function () {
        $("#emoji-box").slideToggle(170)
    });
    $(".comment-content").each(function () {
        var _0x9c47x15 = $(this);
        _0x9c47x15.replaceText("\(y\)", "<span class='sora-moji mj-0'/>");
        _0x9c47x15.replaceText(":\)", "<span class='sora-moji mj-1'/>");
        _0x9c47x15.replaceText(":\(", "<span class='sora-moji mj-2'/>");
        _0x9c47x15.replaceText("hihi", "<span class='sora-moji mj-3'/>");
        _0x9c47x15.replaceText(":-\)", "<span class='sora-moji mj-4'/>");
        _0x9c47x15.replaceText(":D", "<span class='sora-moji mj-5'/>");
        _0x9c47x15.replaceText("=D", "<span class='sora-moji mj-6'/>");
        _0x9c47x15.replaceText(":-d", "<span class='sora-moji mj-7'/>");
        _0x9c47x15.replaceText(";\(", "<span class='sora-moji mj-8'/>");
        _0x9c47x15.replaceText(";-\(", "<span class='sora-moji mj-9'/>");
        _0x9c47x15.replaceText("@-\)", "<span class='sora-moji mj-10'/>");
        _0x9c47x15.replaceText(":P", "<span class='sora-moji mj-11'/>");
        _0x9c47x15.replaceText(":o", "<span class='sora-moji mj-12'/>");
        _0x9c47x15.replaceText(":>\)", "<span class='sora-moji mj-13'/>");
        _0x9c47x15.replaceText("\(o\)", "<span class='sora-moji mj-14'/>");
        _0x9c47x15.replaceText(":p", "<span class='sora-moji mj-15'/>");
        _0x9c47x15.replaceText("\(p\)", "<span class='sora-moji mj-16'/>");
        _0x9c47x15.replaceText(":-s", "<span class='sora-moji mj-17'/>");
        _0x9c47x15.replaceText("\(m\)", "<span class='sora-moji mj-18'/>");
        _0x9c47x15.replaceText("8-\)", "<span class='sora-moji mj-19'/>");
        _0x9c47x15.replaceText(":-t", "<span class='sora-moji mj-20'/>");
        _0x9c47x15.replaceText(":-b", "<span class='sora-moji mj-21'/>");
        _0x9c47x15.replaceText("b-\(", "<span class='sora-moji mj-22'/>");
        _0x9c47x15.replaceText(":-#", "<span class='sora-moji mj-23'/>");
        _0x9c47x15.replaceText("=p~", "<span class='sora-moji mj-24'/>");
        _0x9c47x15.replaceText("x-\)", "<span class='sora-moji mj-25'/>");
        _0x9c47x15.replaceText("\(k\)", "<span class='sora-moji mj-26'/>")
    });
    $(".author-description a").each(function () {
        $(this).attr("target", "_blank")
    });
    $(".post-nav").each(function () {
        var _0x9c47x16 = $("a.prev-post-link").attr("href"),
            _0x9c47x17 = $("a.next-post-link").attr("href");
        $.ajax({
            url: _0x9c47x16,
            type: "get",
            success: function (_0x9c47x18) {
                var _0x9c47x19 = $(_0x9c47x18).find(".blog-post h1.post-title").text();
                $(".post-prev a .post-nav-inner p").text(_0x9c47x19)
            }
        });
        $.ajax({
            url: _0x9c47x17,
            type: "get",
            success: function (_0x9c47x1a) {
                var _0x9c47x19 = $(_0x9c47x1a).find(".blog-post h1.post-title").text();
                $(".post-next a .post-nav-inner p").text(_0x9c47x19)
            }
        })
    });
    $(".post-body strike").each(function () {
        var _0x9c47xf = $(this),
            _0x9c47x11 = _0x9c47xf.text();
        if (_0x9c47x11.match("left-sidebar")) {
            _0x9c47xf.replaceWith("<style>.item #main-wrapper\{float:right\}.item #sidebar-wrapper\{float:left\}</style>")
        };
        if (_0x9c47x11.match("right-sidebar")) {
            _0x9c47xf.replaceWith("<style>.item #main-wrapper\{float:left\}.item #sidebar-wrapper\{float:right\}</style>")
        };
        if (_0x9c47x11.match("full-width")) {
            _0x9c47xf.replaceWith("<style>.item #main-wrapper\{width:100%\}.item #sidebar-wrapper\{display:none\}</style>")
        }
    });
    $("#main-wrapper, #sidebar-wrapper").each(function () {
        if (fixedSidebar == true) {
            $(this).theiaStickySidebar({
                additionalMarginTop: 50,
                additionalMarginBottom: 30
            })
        }
    });
    $(".back-top").each(function () {
        var _0x9c47xf = $(this);
        $(window).on("scroll", function () {
            $(this).scrollTop() >= 100 ? _0x9c47xf.fadeIn(250) : _0x9c47xf.fadeOut(250)
        }), _0x9c47xf.click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 500)
        })
    });
    $("#main-menu #main-menu-nav li").each(function () {
        var _0x9c47x1b = $(this),
            _0x9c47x10 = _0x9c47x1b.find("a").attr("href").trim(),
            _0x9c47xf = _0x9c47x1b,
            _0x9c47x11 = _0x9c47x10.toLowerCase(),
            _0x9c47x12 = _0x9c47x10.split("/"),
            _0x9c47x13 = _0x9c47x12[0];
        _0x9c47x30(_0x9c47xf, _0x9c47x11, 4, _0x9c47x13)
    });
    $("#slider-section .widget-content").each(function () {
        var _0x9c47xf = $(this),
            _0x9c47x10 = _0x9c47xf.text().trim(),
            _0x9c47x11 = _0x9c47x10.toLowerCase(),
            _0x9c47x12 = _0x9c47x10.split("/"),
            _0x9c47x1c = _0x9c47x12[0],
            _0x9c47x13 = _0x9c47x12[1];
        _0x9c47x30(_0x9c47xf, _0x9c47x11, _0x9c47x1c, _0x9c47x13)
    });
    $(".common-widget .widget-content").each(function () {
        var _0x9c47xf = $(this),
            _0x9c47x10 = _0x9c47xf.text().trim(),
            _0x9c47x11 = _0x9c47x10.toLowerCase(),
            _0x9c47x12 = _0x9c47x10.split("/"),
            _0x9c47x1c = _0x9c47x12[0],
            _0x9c47x13 = _0x9c47x12[1];
        _0x9c47x30(_0x9c47xf, _0x9c47x11, _0x9c47x1c, _0x9c47x13)
    });
    $(".related-ready").each(function () {
        var _0x9c47xf = $(this),
            _0x9c47x13 = _0x9c47xf.find(".related-tag").data("label");
        _0x9c47x30(_0x9c47xf, "related", 3, _0x9c47x13)
    });
    $("#instagram .widget-content").each(function () {
        var _0x9c47xf = $(this),
            _0x9c47x1d = _0x9c47xf.data("token");
        _0x9c47x39(_0x9c47xf, _0x9c47x1d)
    });

    function _0x9c47x1e(_0x9c47x1f, _0x9c47x4) {
        for (var _0x9c47x20 = 0; _0x9c47x20 < _0x9c47x1f[_0x9c47x4].link.length; _0x9c47x20++) {
            if (_0x9c47x1f[_0x9c47x4].link[_0x9c47x20].rel == "alternate") {
                var _0x9c47x21 = _0x9c47x1f[_0x9c47x4].link[_0x9c47x20].href;
                break
            }
        };
        return _0x9c47x21
    }

    function _0x9c47x22(_0x9c47x1f, _0x9c47x4, _0x9c47x21) {
        var _0x9c47x23 = _0x9c47x1f[_0x9c47x4].title["\$t"],
            _0x9c47x24 = '<a href="' + _0x9c47x21 + '">' + _0x9c47x23 + "</a>";
        return _0x9c47x24
    }

    function _0x9c47x25(_0x9c47x1f, _0x9c47x4) {
        var _0x9c47x26 = _0x9c47x1f[_0x9c47x4].published["\$t"],
            _0x9c47x27 = _0x9c47x26.substring(0, 4),
            _0x9c47x28 = _0x9c47x26.substring(5, 7),
            _0x9c47x29 = _0x9c47x26.substring(8, 10),
            _0x9c47x2a = monthFormat[parseInt(_0x9c47x28, 10) - 1] + " " + _0x9c47x29 + ", " + _0x9c47x27,
            _0x9c47x24 = '<span class="post-date">' + _0x9c47x2a + "</span>";
        return _0x9c47x24
    }

    function _0x9c47x2b(_0x9c47x1f, _0x9c47x4) {
        var _0x9c47x23 = _0x9c47x1f[_0x9c47x4].title["\$t"],
            _0x9c47x2c = _0x9c47x1f[_0x9c47x4].content["\$t"],
            _0x9c47x2d = $("<div>").html(_0x9c47x2c);
        if ("media\$thumbnail" in _0x9c47x1f[_0x9c47x4]) {
            var _0x9c47x2e = _0x9c47x1f[_0x9c47x4]["media\$thumbnail"].url,
                _0x9c47x2f = _0x9c47x2e.replace("/s72-c", "/w680");
            if (_0x9c47x2c.indexOf("youtube.com/embed") > -1) {
                _0x9c47x2f = _0x9c47x2e.replace("/default.", "/hqdefault.")
            }
        } else {
            if (_0x9c47x2c.indexOf("<img") > -1) {
                _0x9c47x2f = _0x9c47x2d.find("img:first").attr("src")
            } else {
                _0x9c47x2f = noThumbnail
            }
        };
        var _0x9c47x24 = '<img class="post-thumb" alt="' + _0x9c47x23 + '" src="' + _0x9c47x2f + '"/>';
        return _0x9c47x24
    }
    function _0x9c47x30(_0x9c47xf, _0x9c47x11, _0x9c47x1c, _0x9c47x13) {
        if (_0x9c47x11.match("mega-menu") || _0x9c47x11.match("slider") || _0x9c47x11.match("post-list") || _0x9c47x11.match("related")) {
            var _0x9c47x31 = "";
            if (_0x9c47x13 == "recent") {
                _0x9c47x31 = "/feeds/posts/default\?alt=json-in-script&max-results=" + _0x9c47x1c
            } else {
                if (_0x9c47x13 == "random") {
                    var _0x9c47x32 = Math.floor(Math.random() * _0x9c47x1c) + 1;
                    _0x9c47x31 = "/feeds/posts/default\?max-results=" + _0x9c47x1c + "&start-index=" + _0x9c47x32 + "&alt=json-in-script"
                } else {
                    _0x9c47x31 = "/feeds/posts/default/-/" + _0x9c47x13 + "\?alt=json-in-script&max-results=" + _0x9c47x1c
                }
            };
            $.ajax({
                url: _0x9c47x31,
                type: "get",
                dataType: "jsonp",
                success: function (_0x9c47x33) {
                    if (_0x9c47x11.match("mega-menu")) {
                        var _0x9c47x34 = '<ul class="mega-menu-inner">'
                    } else {
                        if (_0x9c47x11.match("slider")) {
                            var _0x9c47x34 = '<ul class="main-slider">'
                        } else {
                            if (_0x9c47x11.match("post-list")) {
                                var _0x9c47x34 = '<ul class="custom-widget">'
                            } else {
                                if (_0x9c47x11.match("related")) {
                                    var _0x9c47x34 = '<ul class="related-posts">'
                                }
                            }
                        }
                    };
                    var _0x9c47x35 = _0x9c47x33.feed.entry;
                    if (_0x9c47x35 != undefined) {
                        for (var _0x9c47x4 = 0, _0x9c47x1f = _0x9c47x35; _0x9c47x4 < _0x9c47x1f.length; _0x9c47x4++) {
                            var _0x9c47x21 = _0x9c47x1e(_0x9c47x1f, _0x9c47x4),
                                _0x9c47x19 = _0x9c47x22(_0x9c47x1f, _0x9c47x4, _0x9c47x21),
                                _0x9c47x36 = _0x9c47x2b(_0x9c47x1f, _0x9c47x4),
                                _0x9c47x37 = _0x9c47x25(_0x9c47x1f, _0x9c47x4);
                            var _0x9c47x38 = "";
                            if (_0x9c47x11.match("mega-menu")) {
                                _0x9c47x38 += '<div class="mega-item item-' + _0x9c47x4 + '"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="' + _0x9c47x21 + '">' + _0x9c47x36 + '</a></div><h2 class="post-title">' + _0x9c47x19 + '</h2><div class="post-meta">' + _0x9c47x37 + "</div></div></div>"
                            } else {
                                if (_0x9c47x11.match("slider")) {
                                    _0x9c47x38 += '<li class="slider-item item-' + _0x9c47x4 + '"><div class="slider-item-inner"><a class="post-image-link" href="' + _0x9c47x21 + '">' + _0x9c47x36 + '</a><div class="post-info"><div class="post-meta">' + _0x9c47x37 + '</div><h2 class="post-title">' + _0x9c47x19 + "</h2></div></div></li>"
                                } else {
                                    if (_0x9c47x11.match("post-list")) {
                                        _0x9c47x38 += '<li class="item-' + _0x9c47x4 + '"><a class="post-image-link" href="' + _0x9c47x21 + '">' + _0x9c47x36 + '</a><div class="post-info"><h2 class="post-title">' + _0x9c47x19 + '</h2><div class="post-meta">' + _0x9c47x37 + "</div></div></div></li>"
                                    } else {
                                        if (_0x9c47x11.match("related")) {
                                            _0x9c47x38 += '<li class="related-item item-' + _0x9c47x4 + '"><a class="post-image-link" href="' + _0x9c47x21 + '">' + _0x9c47x36 + '</a><div class="post-meta">' + _0x9c47x37 + '</div><h2 class="post-title">' + _0x9c47x19 + "</h2></li>"
                                        }
                                    }
                                }
                            };
                            _0x9c47x34 += _0x9c47x38
                        };
                        _0x9c47x34 += "</ul>"
                    } else {
                        _0x9c47x34 = '<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown"/></ul>'
                    };
                    if (_0x9c47x11.match("mega-menu")) {
                        _0x9c47xf.addClass("has-sub mega-menu").append(_0x9c47x34);
                        _0x9c47xf.find("a:first").attr("href", function (_0x9c47xf, _0x9c47x14) {
                            if (_0x9c47x13 == "recent" || _0x9c47x13 == "random") {
                                _0x9c47x14 = _0x9c47x14.replace(_0x9c47x14, "/search/\?&max-results=" + postPerPage)
                            } else {
                                _0x9c47x14 = _0x9c47x14.replace(_0x9c47x14, "/search/label/" + _0x9c47x13 + "\?&max-results=" + postPerPage)
                            };
                            return _0x9c47x14
                        })
                    } else {
                        if (_0x9c47x11.match("slider")) {
                            _0x9c47xf.html(_0x9c47x34).parent().addClass("show-slider");
                            $(".main-slider").slick({
                                slidesToShow: 1,
                                dots: false,
                                infinite: true,
                                speed: 200,
                                autoplay: true,
                                autoplaySpeed: 4000,
                                prevArrow: '<div class="slick-prev"/>',
                                nextArrow: '<div class="slick-next"/>',
                                cssEase: "linear",
                                responsive: [{
                                    breakpoint: 981,
                                    settings: {
                                        slidesToShow: 1
                                    }
                                }, {
                                    breakpoint: 681,
                                    settings: {
                                        slidesToShow: 1
                                    }
                                }]
                            })
                        } else {
                            _0x9c47xf.html(_0x9c47x34)
                        }
                    }
                }
            })
        }
    }

    function _0x9c47x39(_0x9c47xf, _0x9c47x1d) {
        $.ajax({
            url: "https://api.instagram.com/v1/users/self/media/recent",
            type: "get",
            dataType: "jsonp",
            data: {
                access_token: _0x9c47x1d,
                count: 8
            },
            success: function (_0x9c47x33) {
                var _0x9c47x34 = '<ul class="insta-items">';
                for (var _0x9c47x4 = 0; _0x9c47x4 < _0x9c47x33.data.length; _0x9c47x4++) {
                    var _0x9c47x21 = _0x9c47x33.data[_0x9c47x4].link,
                        _0x9c47x36 = _0x9c47x33.data[_0x9c47x4].images.low_resolution.url,
                        _0x9c47x3a = _0x9c47x33.data[_0x9c47x4].user.username,
                        _0x9c47x38 = "";
                    _0x9c47x38 += '<li class="insta-item"><a class="insta-thumb" href="' + _0x9c47x21 + '" target="_blank"><img alt="@' + _0x9c47x3a + '" src="' + _0x9c47x36 + '"/></a></li>';
                    _0x9c47x34 += _0x9c47x38
                };
                _0x9c47x34 += "</ul>";
                _0x9c47xf.html(_0x9c47x34).parent().addClass("show-insta")
            }
        })
    }
    $(".blog-post-comments").each(function () {
        var _0x9c47x3b = commentsSystem,
            _0x9c47x3c = disqus_blogger_current_url,
            _0x9c47x3d = '<div id="disqus_thread"/>',
            _0x9c47x3e = $(location).attr("href"),
            _0x9c47x3f = '<div class="fb-comments" data-width="100%" data-href="' + _0x9c47x3e + '" data-numposts="5"></div>',
            _0x9c47x40 = "comments-system-" + _0x9c47x3b;
        if (_0x9c47x3b == "blogger") {
            $(this).addClass(_0x9c47x40).show()
        } else {
            if (_0x9c47x3b == "disqus") {
                (function () {
                    var _0x9c47x41 = document.createElement("script");
                    _0x9c47x41.type = "text/javascript";
                    _0x9c47x41.async = true;
                    _0x9c47x41.src = "//" + disqusShortname + ".disqus.com/embed.js";
                    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(_0x9c47x41)
                })();
                $("#comments, #gpluscomments").remove();
                $(this).append(_0x9c47x3d).addClass(_0x9c47x40).show()
            } else {
                if (_0x9c47x3b == "facebook") {
                    $("#comments, #gpluscomments").remove();
                    $(this).append(_0x9c47x3f).addClass(_0x9c47x40).show()
                } else {
                    if (_0x9c47x3b == "hide") {
                        $(this).hide()
                    } else {
                        $(this).addClass("comments-system-default").show()
                    }
                }
            }
        }
    })
})