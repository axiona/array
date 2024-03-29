import Message from '@axiona/message/message.js';
import ListInfer from './infer.js';
import {MessageParameters} from '@axiona/message/ensure/message.js';
import ValueMessage from '@axiona/message/message/value.js';
import {List} from 'ts-toolbelt';
import MapUnion from '../../../unions.js';
import Messages from '../../messages/messages.js';

export function FilterParameters<
    MessagesType extends Message[]
>(
    list : MessagesType,
    filter : (messages:List.UnionOf<MessagesType>)=>boolean,
) : MapUnion<ListInfer<MessagesType>> {

    return <ListInfer<MessagesType>> list.map((v)=>MessageParameters(v)).
        filter((v)=>filter(v)).
        map(ValueMessage);
}


export type MessageFilterArgument<MessagesType extends Message[]> =
    Messages<MessagesType> & {
    filter: (messages: List.UnionOf<MessagesType>) => boolean;
};

export function FilterParameter<
    MessagesType extends Message[]
>(
    {
        messages,
        filter,
    } : MessageFilterArgument<MessagesType>
) : MapUnion<ListInfer<MessagesType>> {

    return <ListInfer<MessagesType>> messages.map((v)=>MessageParameters(v)).
        filter((v)=>filter(v)).
        map(ValueMessage);

}
export type MessageFilterReturn<MessagesType extends Message[]> = MapUnion<ListInfer<MessagesType>>;

namespace Filter {
    export const Parameters = FilterParameters;
    export const Parameter = FilterParameter;
    export type  Argument<MessagesType extends Message[]> = MessageFilterArgument<MessagesType>;
    export type  Return<MessagesType extends Message[]> = MessageFilterReturn<MessagesType>;
}
export default Filter;
