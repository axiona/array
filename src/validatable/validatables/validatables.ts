import Validatable from '@alirya/validatable/validatable.js';

export default interface Validatables<
    ValidatableList extends ReadonlyArray<Validatable> = ReadonlyArray<Validatable>
> {

    validatables : ValidatableList;
}
