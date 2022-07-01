import StringNotEmpty from '../../assert/string/not-empty';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

export function NotEmptyParameters(
    value : ReadonlyArray<unknown>,
    valid : boolean,
) : string {

    return StringNotEmpty.Parameters(value, valid);
}

export type NotEmptyArgument = Readonly<Value<unknown[]> & Validatable>;

export function NotEmptyParameter({valid, value} : NotEmptyArgument) : string {

    return NotEmptyParameters(value, valid);
}

namespace NotEmpty {
    export const Parameters = NotEmptyParameters;
    export const Parameter = NotEmptyParameter;
    export type Argument = NotEmptyArgument;
}
export default NotEmpty;