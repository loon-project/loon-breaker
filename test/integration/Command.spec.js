"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../TestHelper");
const Command_1 = require("../../src/decorator/Command");
describe("Command", () => {
    class ATestService {
        syncCall() {
        }
        asyncCall() {
            return __awaiter(this, void 0, void 0, function* () {
            });
        }
        syncErrorCall() {
        }
        asyncErrorCall() {
            return __awaiter(this, void 0, void 0, function* () {
            });
        }
    }
    __decorate([
        Command_1.Command(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ATestService.prototype, "syncCall", null);
    __decorate([
        Command_1.Command(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ATestService.prototype, "asyncCall", null);
    __decorate([
        Command_1.Command(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ATestService.prototype, "syncErrorCall", null);
    __decorate([
        Command_1.Command(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ATestService.prototype, "asyncErrorCall", null);
    const service = new ATestService();
    it('Command protect sync success call', () => {
        for (let i = 0; i < 5; i++) {
            service.syncCall();
        }
    });
    it('Command protect async success call', () => __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 5; i++) {
            yield service.asyncCall();
        }
    }));
    it('Command protect sync fail call', () => {
        for (let i = 0; i < 5; i++) {
            service.syncErrorCall();
        }
    });
    it('Command protect async fail call', () => __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 5; i++) {
            yield service.asyncErrorCall();
        }
    }));
});
//# sourceMappingURL=Command.spec.js.map