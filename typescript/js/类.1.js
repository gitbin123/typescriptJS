"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ts 类
var personts = /** @class */ (function () {
    function personts(n) {
        this.name = n;
    }
    ;
    personts.prototype.getName = function () {
        alert(this.name);
    };
    personts.prototype.setName = function (name) {
        this.name = name;
    };
    return personts;
}());
var per = new personts('张三');
// per.getName()
// per.setName('李四')
// per.getName()
// ts继承
var personts1 = /** @class */ (function () {
    function personts1(name) {
        this.name = name;
    }
    personts1.prototype.jump = function () {
        return this.name;
    };
    return personts1;
}());
// var personts1New=new personts1('王五')
// alert(personts1New.jump())
var web = /** @class */ (function (_super) {
    __extends(web, _super);
    function web(name) {
        return _super.call(this, name) || this;
    }
    web.prototype.jump = function () {
        return '我是你。。';
    };
    return web;
}(personts1));
var webts = new web('李四');
alert(webts.jump());
