import Simple from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import MessageCallback from "@dikac/t-validator/message/function/validatable-parameters";
export default function ArrayParameters<Argument, MessageType>(value: Argument, message: MessageCallback<Argument, MessageType>): Readonly<Simple<Argument, unknown[], Instance<Argument, MessageType>>>;
