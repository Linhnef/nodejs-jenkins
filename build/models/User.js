"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var typeorm_1 = require("typeorm");
var Room_1 = require("./Room");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User_1 = User;
    var User_1;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true, nullable: false }),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "bio", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true, nullable: false }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "phoneNumber", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "accountSetting", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Room_1.Room; }, function (room) { return room.id; }),
        __metadata("design:type", Array)
    ], User.prototype, "rooms", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return User_1; }, function (User) { return User.id; }),
        __metadata("design:type", Array)
    ], User.prototype, "friends", void 0);
    User = User_1 = __decorate([
        (0, typeorm_1.Entity)()
    ], User);
    return User;
}(typeorm_1.BaseEntity));
exports.User = User;
