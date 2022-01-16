import Validator from '@alirya/validator/validator';
import Type from '@alirya/validator/subject/expectation';

type Expectation<Schema extends Validator[]> = {
    [Key in keyof Schema]  : Type<Schema[Key]>
};

export default Expectation;
