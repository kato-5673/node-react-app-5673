"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eight = exports.Seven = exports.Six = exports.Five = exports.Four = exports.Three = exports.Two = exports.One = exports.QuestionCount = exports.DateTime = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
main().catch(err => console.log(err));
async function main() {
    await mongoose_1.default.connect('mongodb://dobi:misurimakurinko2323@127.0.0.1:27017/sample');
}
const DateTimeSchema = new mongoose_1.default.Schema({ datetime: Number });
const QuestionCountSchema = new mongoose_1.default.Schema({ questioncount: Number });
const OneSchema = new mongoose_1.default.Schema({ one: Number });
const TwoSchema = new mongoose_1.default.Schema({ two: Number });
const ThreeSchema = new mongoose_1.default.Schema({ three: Number });
const FourSchema = new mongoose_1.default.Schema({ four: Number });
const FiveSchema = new mongoose_1.default.Schema({ five: Number });
const SixSchema = new mongoose_1.default.Schema({ six: Number });
const SevenSchema = new mongoose_1.default.Schema({ seven: Number });
const EightSchema = new mongoose_1.default.Schema({ eight: Number });
exports.DateTime = mongoose_1.default.model('DateTime', DateTimeSchema);
exports.QuestionCount = mongoose_1.default.model(`QuestionCount`, QuestionCountSchema);
exports.One = mongoose_1.default.model('One', OneSchema);
exports.Two = mongoose_1.default.model('Two', TwoSchema);
exports.Three = mongoose_1.default.model('Three', ThreeSchema);
exports.Four = mongoose_1.default.model('Four', FourSchema);
exports.Five = mongoose_1.default.model('Five', FiveSchema);
exports.Six = mongoose_1.default.model('Six', SixSchema);
exports.Seven = mongoose_1.default.model('Seven', SevenSchema);
exports.Eight = mongoose_1.default.model('Eight', EightSchema);
