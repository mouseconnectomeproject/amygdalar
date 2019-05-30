amygdalarApp
    .directive("brainLevels", ['$http', '$document', function ($http, $document) {
        return {
            restricy: 'AE',
            replace: true,
            scope: {
                callbackFn: '&',
                levelsMap: '=',
            },
            link: function (scope, ele, attrs) {

                function moveToSelected(element) {

                    if (element == "next") {
                        var selected = $(".selected").next();
                    } else if (element == "prev") {
                        var selected = $(".selected").prev();
                    } else {
                        var selected = element;
                    }

                    var next = $(selected).next();
                    var prev = $(selected).prev();
                    var prevSecond = $(prev).prev();
                    var nextSecond = $(next).next();

                    $(selected).removeClass().addClass("selected");

                    $(prev).removeClass().addClass("prev");
                    $(next).removeClass().addClass("next");

                    $(nextSecond).removeClass().addClass("nextRightSecond");
                    $(prevSecond).removeClass().addClass("prevLeftSecond");

                    $(nextSecond).nextAll().removeClass().addClass('hideRight');
                    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

                }

                $(document).keydown(function (e) {
                    // if cursor is in input field continue as usual
                    if (!$(e.target).is("input")) {

                        switch (e.which) {
                            case 37: // left
                                moveToSelected('prev');
                                break;

                            case 39: // right
                                moveToSelected('next');
                                break;

                            default:
                                return;
                        }
                        e.preventDefault();
                    }
                });

                $('#carousel div').click(function () {
                    moveToSelected($(this));
                });

                $('#prev').click(function () {
                    moveToSelected('prev');
                });

                $('#next').click(function () {
                    moveToSelected('next');
                });

                var addDisabledLevels = function (svg, requested_level) {
                    scope.$watch('levelsMap', function (newVal, oldVal) {
                        if (newVal) {
                            var svg = angular.element(svg);
                            var level = Number(requested_level);

                            if (newVal[level]) {
                                // console.log(level, newVal[level]);
                                newVal[level].forEach(reg => {
                                    var id = "region__" + requested_level + "__" + reg;
                                    var all_eles = ele[0].querySelectorAll("g[id*='" + id + "']");
                                    for (var i = 0; i < all_eles.length; i++) {
                                        var reg_ele = all_eles[i];
                                        // console.log(id, reg_ele);
                                        if (reg_ele) {
                                            reg_ele.classList.add('active');
                                        }
                                    }
                                });
                            }
                        };
                    }, true);
                };

                var addClass = function (div, i, mid) {
                    if (i == mid) {
                        div.setAttribute('class', 'selected');
                    } else if (i == mid - 1) {
                        div.setAttribute('class', 'prev');
                    } else if (i == mid - 2) {
                        div.setAttribute('class', 'prevLeftSecond');
                    } else if (i == mid + 1) {
                        div.setAttribute('class', 'next')
                    } else if (i == mid + 2) {
                        div.setAttribute('class', 'nextRightSecond')
                    } else if (i < mid - 2) {
                        div.setAttribute('class', 'hideLeft');
                    } else if (i > mid + 2) {
                        div.setAttribute('class', 'hideRight');
                    }
                    return div
                };

                var downloadImages = function () {
                    var max_level = 130;
                    var carousel_div = document.createElement('div');
                    carousel_div.setAttribute('id', 'carousel');
                    ele.append(carousel_div);

                    for (var i in imageData.image2) {
                        var url = imageData.image2[i].href;
                        var div = document.createElement("div");
                        div.setAttribute('style', 'background-image:url("'+url+'"); width: 100%; height: 100%');
                        div.classList.add('image');
                        div.classList.add('active');
                        carousel_div.append(div);
                    }

                    // TODO: Leave this for now....
                    // for (var i in levels) {
                    //     var level = levels[i];
                    //     if (document.getElementById("level_" + level)) {
                    //         continue;
                    //     }
                    //     var url = "/mcp/svg/ds/atlas/level_" + level + ".svgz";                        
                    //     var div = document.createElement("div");
                    //     div.setAttribute("id", "level_" + level);
                    //     var mid = max_level / 2;
                    //     addClass(div, i, mid);

                    //     carousel_div.append(div)
                    //     $http.get(url).then(function (response) {
                    //         var svg = response.data;
                    //         var requested_url = response.config.url;
                    //         var requested_level = requested_url.split(".svgz")[0];
                    //         requested_level = requested_level.split("level_")[1];
                    //         addDisabledLevels(svg, requested_level);
                    //         var div = document.getElementById("level_" + requested_level);
                    //         // var div = document.createElement("div");
                    //         var p = document.createElement("p");
                    //         p.innerText = response.config.url.split("_")[1].split(".")[0];
                    //         div.append(svg[0]);
                    //         div.append(p);
                    //     });
                    // }
                };

                downloadImages();
            }
        };
    }]);