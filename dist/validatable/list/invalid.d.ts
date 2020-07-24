import Validatable from "@dikac/t-validatable/validatable";
import { O } from "ts-toolbelt";
/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<V extends Validatable = Validatable, Object extends V[] = V[]>(list: Object): O.Partial<Object, 'deep'>;
