// import ValidatorType from "@alirya/type/validator/type-parameters";
// import ValueAll from "../../../../dist/validator/value-all-parameters";
// import And from "../../../../dist/validatable/and-parameters";
// import MessageMapInvalid from "../../../../dist/message/message/list/invalid";
// import Value from "../../../../dist/validator/value-all-parameters";
// import ValidateValue from "../../../../dist/validator/validatable/list/value-parameters";
// import MapAll from "../../../../dist/validator/map-all-parameters";
// import Map from "../../../../dist/validator/map-partial-parameters";
// import Validatable from "@alirya/validatable/validatable";
// import ValueCallback from "../../../../dist/validator/value-callback-parameters";
// import MapCallbackFunction from "../../../../dist/validator/map-callback-parameters";
// import Standard from "../../../../dist/validator/validatable/list/map-parameters";
//
// it("enable console log", () => { spyOn(console, 'log').and.callThrough();});
//
// describe('value all', ()=>{
//
//     let validator  = [
//         ValidatorType('string'),
//         ValidatorType('string'),
//         ValidatorType('string'),
//         ValueAll([
//             ValidatorType('string'),
//             ValidatorType('string'),
//         ], And, MessageMapInvalid)
//     ];
//
//     let property = ValueAll(validator, And, MessageMapInvalid);
//
// });
//
// describe('value', ()=>{
//
//     let validator  = [
//         ValidatorType('string'),
//         ValidatorType('string'),
//         ValidatorType('string'),
//         Value([
//             ValidatorType('string'),
//             ValidatorType('string'),
//         ], And, MessageMapInvalid)
//     ];
//
//         let property = Value(validator, And, MessageMapInvalid);
//
// });
//
// describe('value callback', ()=>{
//
//     let validators  = [
//         ValidatorType('string'),
//         ValidatorType('string'),
//         ValidatorType('string'),
//         ValueCallback([
//                 ValidatorType('string'),
//                 ValidatorType('string'),
//             ],
//             ValidateValue, And, MessageMapInvalid)
//     ];
//
//     let validator = ValueCallback(validators, ValidateValue, And, MessageMapInvalid);
//
// });
//
//
//
// describe('map all', ()=>{
//
//     let validator = [
//         ValidatorType('number'),
//         ValidatorType('number'),
//         ValidatorType('number'),
//         MapAll([
//             ValidatorType('number'),
//             ValidatorType('number'),
//         ], And, MessageMapInvalid)
//     ];
//
//     let property = MapAll(validator,And, MessageMapInvalid);
//
// });
//
// describe('map', ()=>{
//
//     let validator = [
//         ValidatorType('number'),
//         ValidatorType('number'),
//         ValidatorType('number'),
//         Map([
//             ValidatorType('number'),
//             ValidatorType('number')
//         ],(v)=>And(<Validatable[]>v), MessageMapInvalid)
//     ];
//
//     let property = Map(validator, And, MessageMapInvalid);
// });
//
// describe('map callback', ()=>{
//
//     let validators = [
//         ValidatorType('string'),
//         ValidatorType('number'),
//         ValidatorType('string'),
//         MapCallbackFunction([
//             ValidatorType('string'),
//             ValidatorType('number'),
//         ], Standard, And, MessageMapInvalid)
//     ];
//
//     let validator = MapCallbackFunction(validators, Standard, And , MessageMapInvalid);
//
// });
