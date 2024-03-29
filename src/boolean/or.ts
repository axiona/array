import Readonly from '../array/readonly.js';

export function OrParameters(
    list : ReadonlyArray<boolean>,
    defaults  = true
) : boolean {

    if(!list.length) {

        return defaults;
    }

    let result  = false;

    for(const boolean of list) {

        result = result || boolean;

        if(boolean) {

            return true;
        }
    }

    return false;
}


export type OrArgument = Readonly<boolean> & {defaults : boolean};

export function OrParameter(
    {
        array,
        defaults,
    } : OrArgument
) : boolean {

    return OrParameters(array, defaults);
}


namespace Or {
    export const Parameters = OrParameters;
    export const Parameter = OrParameter;
    export type Argument = OrArgument;
}
export default Or;
