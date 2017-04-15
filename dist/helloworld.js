System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HelloWorld;
    return {
        setters: [],
        execute: function () {
            HelloWorld = (function () {
                function HelloWorld() {
                    console.log("Hello World!");
                }
                return HelloWorld;
            }());
            exports_1("HelloWorld", HelloWorld);
        }
    };
});
