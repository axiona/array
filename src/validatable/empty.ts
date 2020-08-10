import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import EmptyArgument from "../boolean/empty";
import {List} from "ts-toolbelt";


export default class Empty<MessageT, Values extends unknown[]>
    implements
        Readonly<Value<Values>>,
        Readonly<Message<MessageT>>,
        Readonly<Validatable>,
        Iterable<List.UnionOf<Values>>
{
    readonly valid : boolean;

    constructor(
        readonly value : Values,
        private _message : Function<[Readonly<Value<Values> & Validatable>], MessageT>,
    ) {

        this.valid = EmptyArgument(value);

    }

    * [Symbol.iterator](): Iterator<List.UnionOf<Values>> {

        yield * this.value;
    }

    get message() : MessageT {

        return this._message(this);
    }
}