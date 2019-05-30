amygdalarApp
    .controller("AmygdalarController", [
        "$scope",
        "$filter",
        "$window",
        "$httpParamSerializer",
        "$sce",
        function (
            $scope,
            $filter,
            $window,
            $httpParamSerializer,
            $sce
        ) {
            $scope.levels = [];

            var i = 50;
            while (i < 60) {
                if (i < 10) {
                    $scope.levels.push("00" + i);
                } else if (i < 100) {
                    $scope.levels.push("0" + i);
                } else {
                    $scope.levels.push("" + i);
                }

                i += 1;
            }
            $scope.createLevelsMap = function (cases) {
                $scope.levelsMap = {}
                cases.forEach(function (each_case) {
                    if (each_case.infos) {
                        each_case.infos.forEach(function (info) {
                            var level_range = info.injectionSiteLevelRange;
                            var from_to = level_range.split("~").map(Number);
                            for (var index = from_to[0]; index <= from_to[1]; index++) {
                                if (!(index in $scope.levelsMap)) {
                                    $scope.levelsMap[index] = new Set();
                                }
                                $scope.levelsMap[index].add(info.region);
                            }
                        });
                    }
                });
            };

            $scope.change = function () {
                console.log(this.picked);
            };

            var init = function () {
                // Initially called services
                console.log('pass init...');
            };
        }]);


