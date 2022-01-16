import Message from '@alirya/message/message';
import ListInfer from './infer';
import MapUnion from '../../../unions';
import Validatable from '@alirya/validatable/validatable';
import FilterValid from '../../../validatable/list/valid';
import Map from './map';

export default function Invalid<
    Messages extends (Message & Validatable)[]
>(
    list : Messages,
) : MapUnion<ListInfer<Messages>> {

    return Map(FilterValid(list));
}
