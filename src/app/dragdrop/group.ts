import { User } from './user';
import {Role} from '../roles/role'

export interface Group {
    id : number;
    groupName :string;
    users : User[];
    roles : Role[];

}