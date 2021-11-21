export default function IncludesParameters<Type>(value: Type, trues: ReadonlyArray<Type>, falses: ReadonlyArray<Type>, defaults?: (value: Type, trues: ReadonlyArray<Type>, falses: ReadonlyArray<Type>) => boolean, compare?: (value: Type, compare: Type) => boolean): boolean;
