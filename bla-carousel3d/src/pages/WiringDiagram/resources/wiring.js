window.addEventListener("DOMContentLoaded", function () {
//    document.getElementById('wiringDiagramObj').addEventListener("load", function () {
        var svg = document.getElementById('wiringDiagramObj').contentDocument;
        var selected_elements = {
            "text": [],
            "line": []
        };
        var g_elements = svg.querySelectorAll('svg > g');
        var g_output_elements = [];
        var i = 0;
        var headings = ["HIPPOCAMPUS", "CEREBRAL_CORTEX__x26__NUCLEI", "HYPOTHALAMUS__x26__AMYGDALA", "THALAMUS", "STATIC"];

        while (i < g_elements.length) {
            var g_ele = g_elements[i];

            var inside_text_eles = Array.from(g_ele.querySelectorAll(':scope > g > text'));
            var text_ele = Array.from(g_ele.querySelectorAll(':scope > text'));
            var line_eles = Array.from(g_ele.querySelectorAll(':scope line'));

            if (text_ele.length !== 0) {
                g_output_elements = g_output_elements.concat(text_ele);
            }

            g_output_elements = g_output_elements.concat(inside_text_eles);

            g_output_elements = g_output_elements.concat(line_eles);

            i += 1;
        }

        var ind = 0;
        var activateClass = function (ele) {
            if (ele && ele.classList) {
                ele.classList.remove('not-active');
                ele.classList.add('active');
            }
        };

        var animateClass = function (ele) {
            if (ele && ele.classList) {
                ele.classList.toggle('animate');
            }
        };

        for (var i = 0; i < headings.length; i++) {
            activateClass(svg.getElementById(headings[i]));
        }

        while (ind < g_output_elements.length) {
            var current_g_ele = g_output_elements[ind];
            var parent_g_ele = current_g_ele.parentElement;
            if (headings.indexOf(current_g_ele.id) !== -1 || headings.indexOf(parent_g_ele.id) !== -1) {
                ind += 1;
                continue;
            }

            current_g_ele.addEventListener("mouseup", function () {
                animateClass(this);

                var allElements = Array.from(svg.querySelectorAll('g[id]'));
                var activeEles = Array.from(svg.querySelectorAll('.active'));
                var tag = this.tagName;
                for (var i = 0; i < activeEles.length; ++i) {
                    if (headings.indexOf(activeEles[i].id) === -1 && headings.indexOf(activeEles[i].parentElement.id) === -1) {
                        activeEles[i].classList.remove('active');
                    }
                }
                for (i = 0; i < allElements.length; ++i) {
                    if (headings.indexOf(allElements[i].id) === -1 && headings.indexOf(allElements[i].parentElement.id) === -1) {
                        allElements[i].classList.add('not-active');
                    }
                }

                var clickedId;
                if (this.tagName === "text") {
                    clickedId = this.id.replace("_1_", "");
                } else {
                    var searchELe = this;
                    while (true) {
                        clickedId = searchELe.id;
                        if (clickedId) {
                            break;
                        }

                        searchELe = searchELe.parentElement;

                    }
                }

                if (selected_elements[tag].indexOf(clickedId) === -1) {
                    selected_elements[tag].push(clickedId);
                } else {
                    selected_elements[tag].splice(selected_elements[tag].indexOf(clickedId), 1);
                }
                for (var key in selected_elements) {
                    var clickeElemenets = selected_elements[key];

                    for (var j = 0; j < clickeElemenets.length; j++) {
                        var id = clickeElemenets[j];

                        // svg.querySelectorAll('g[id]').addClass()

                        // "starts with CA3.ic-"
                        var startQuery = key === "text" ? 'g[id^="' + id + '-" i]' : 'g[id^="' + id + '" i]';
                        var elements = Array.from(svg.querySelectorAll(startQuery));

                        if (elements.length == 0) {
                            startQuery = 'g[id^="' + id + '" i]';
                            elements = Array.from(svg.querySelectorAll(startQuery));
                        }

                        var currentCaregoryEle = svg.getElementById(id.split("-")[0].split(".")[0]);

                        // CA3

                        activateClass(currentCaregoryEle);
                        // activateClass(currentCaregoryEle.querySelector("line"));

                        // "CA3.ic-*"
                        for (i = 0; i < elements.length; ++i) {
                            activateClass(elements[i]);

                            // "CA3.ic-SUB.v"
                            var subCatId = elements[i].id.split("-")[1];

                            if (subCatId) {

                                // SUB.v
                                activateClass(svg.getElementById(subCatId));
                                activateClass(svg.getElementById(subCatId).querySelector("text"));
                                // SUB
                                activateClass(svg.getElementById(subCatId.split(".")[0]));
                            }

                        }

                        // "ends with CA3.ic"
                        var endQuery = 'g[id$="-' + id + '" i]';

                        elements = elements.concat(Array.from(svg.querySelectorAll(endQuery)));

                        for (i = 0; i < elements.length; ++i) {
                            elements[i].classList.remove('not-active');
                            elements[i].classList.add('active');
                            var parentId = elements[i].id.split("-")[0];
                            svg.getElementById(parentId).classList.remove('not-active');
                            svg.getElementById(parentId).classList.add('active');

                            svg.getElementById(parentId.split(".")[0]).classList.remove('not-active');
                            svg.getElementById(parentId.split(".")[0]).classList.add('active');
                        }
                    }
                }
            });

            ind++;
        }
//    });
});