import Value from "@alirya/value/value";
import Tuple from "./array/tuple";
import ReplaceParameters from "./replace-parameters";

export type ReplaceArgumentValue<Array extends any[], Index extends keyof Array> =
    Value<Array> & {
    index : Index,
    replace : (value : Array[Index], index : Index) => Array[Index]
}

export type ReplaceArgumentList<Array extends any[], Index extends keyof Array> =
    Tuple<Array> & {
    index : Index,
    replace : (value : Array[Index], index : Index) => Array[Index]
}

export default function ReplaceParameter<Array extends any[], Index extends keyof Array>(
    {
        value,
        index,
        replace,
    } : ReplaceArgumentValue<Array, Index>
) : Array

export default function ReplaceParameter<Array extends any[], Index extends keyof Array>(
    {
        array,
        index,
        replace,
    } : ReplaceArgumentList<Array, Index>
) : Array

export default function ReplaceParameter<Array extends any[], Index extends keyof Array>(
    {
        array,
        value,
        index,
        replace,
    } : ReplaceArgumentList<Array, Index> & ReplaceArgumentValue<Array, Index>
) : Array {

    return ReplaceParameters(array || value, index, replace)
}
