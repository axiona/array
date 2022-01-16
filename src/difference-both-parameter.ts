import Equal from '@alirya/boolean/equal';
import Validation from '@alirya/boolean/validation/validation';
import Tuple from './array/tuple';
import DifferenceBothParameters from './difference-both-parameters';

/**
 * option version of {@see DifferenceBothParameters}
 * @param list
 * @param validation
 */
export default function DifferenceBothParameter<Value>(
    {
        array,
        validation = Equal
    } : Partial<Validation<[Value, Value]>> & Tuple<[ReadonlyArray<Value>, ReadonlyArray<Value>]>
) : Value[] {

    return DifferenceBothParameters(...array, validation);
}
