import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
import { List } from "ts-toolbelt";
import MapUnion from "../../../map-union";
import Messages from "../../../message/messages/messages";
import Value from "@dikac/t-value/value";
export declare type MessageFilterArgument<MessagesType extends Message[]> = Value<Messages<MessagesType>> & {
    filter: (messages: List.UnionOf<MessagesType>) => boolean;
};
export default function MessagesFilterParameter<MessagesType extends Message[]>({ value, filter, }: MessageFilterArgument<MessagesType>): MapUnion<ListInfer<MessagesType>>;
