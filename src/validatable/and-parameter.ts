import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables/validatables";
import AndParameters from "./and-parameters";
import Callback from "./callback-parameters";

export type ArrayArgument<List extends Validatable[]> =
    Validatables<List> &
    {defaults:boolean}

export default function AndParameter<List extends Validatable[]>(
    // validatables : List,
    // defaults : boolean = true,
    {
        validatables,
        defaults,
    } : ArrayArgument<List>
) : Callback<List> {

    return AndParameters(validatables, defaults);
}

