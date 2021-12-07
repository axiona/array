import Value from "@dikac/t-value/value";
import ListParameters from "./list-parameters";

export default function ListParameter(
    {
        value,
        expect,
        subject,
        conversion,
    } :   Value<unknown> & {
    expect : string,
    subject ?: string,
    conversion ?: (value: unknown)=>string,
}
) : Error {

    return ListParameters(value, expect, subject, conversion);
}
