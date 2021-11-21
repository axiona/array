import Value from "@dikac/t-value/value";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Message from "@dikac/t-message/message";
import ArrayParameters from "./array-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic";


export type ArrayArgument<Argument, MessageType> =
    Value<Argument> &
    Message<Dynamic.Parameter<Argument, MessageType>>

export default function ArrayParameter<Argument, MessageType>(
    // value : Values,
    // message : (result:Readonly<Value<Values> & Validatable>)=>MessageType,
    {
        value,
        message,
    } : ArrayArgument<Argument, MessageType>
) : Readonly<Construct<any, Argument, any[], Instance<unknown, MessageType>>> {

    return ArrayParameters(value, (value, valid) => message({value, valid}));
}