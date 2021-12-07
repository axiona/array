import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validator/validatable/validatable";
import EmptyParameters from "./empty-parameters";
import MessageCallback from "@dikac/t-validator/message/function/validatable-parameter";



export default function EmptyParameter<MessageType, Values extends unknown[]>(
    // value : Values,
    // message : (result:Readonly<Value<Values> & Validatable>)=>MessageType,
    {
        value,
        message,
    } : Value<Values> & Message<MessageCallback<Values, MessageType>>
) : Readonly<Validatable<Values, MessageType>> {

    return EmptyParameters(value, (value, valid) => message({value, valid}));
}

