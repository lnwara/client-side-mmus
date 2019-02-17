import { User } from './user';
import {Role} from '../roles/role'

export interface UserGroup {
    user_id:number;
    group_id :number;
    firstName:string;
    lastName:string;
    groupName:string;

}