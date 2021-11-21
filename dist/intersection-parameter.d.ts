import Validation from "@dikac/t-boolean/validation/validation";
import Readonly from "./list/readonly";
import Value from "@dikac/t-value/value";
/**
 * return data which exists in all array
 *
 * @param validation
 * @param list
 * @constructor
 */
export declare type IntersectionParameterList<Type> = Validation<[Type, Type]> & Readonly<ReadonlyArray<Type>>;
export declare type IntersectionParameterValue<Type> = Validation<[Type, Type]> & Value<ReadonlyArray<ReadonlyArray<Type>>>;
export default function IntersectionParameter<Type>({ validation, value }: IntersectionParameterValue<Type>): Type[];
export default function IntersectionParameter<Type>({ validation, list }: IntersectionParameterList<Type>): Type[];
