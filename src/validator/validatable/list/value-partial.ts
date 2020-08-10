import Validator from "@dikac/t-validator/validator";
import {List} from "ts-toolbelt";
import ListStrict from "./infer";
import Union from "../../../union";

export default function ValuePartial<
    ValueT,
    Validators extends Validator<unknown, ValueT>[]
>(
    value : ValueT,
    validators : Validators,
) : Union<ListStrict<Validators>> {

    const result : Union<ListStrict<Validators>> = [];

    for(const [property, validator] of validators.entries()) {

        const validatable = validator.validate(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;

        if(!validatable.valid) {

            return result;
        }
    }

    return  result;
}