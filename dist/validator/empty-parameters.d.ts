import Validator from "@dikac/t-validator/validator";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
import Validatable from "@dikac/t-validator/validatable/dynamic";
/**
 *  validate if array is empty
 */
export default function EmptyParameters(): Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, string>>;
export default function EmptyParameters<MessageType>(message: Dynamic.Parameters<Array<any>, MessageType>): Validator<Array<any>, [], boolean, boolean, Validatable<Array<any>, MessageType>>;
