import {ItemsType} from "../../Redux/users-reducer";

export const updateObjectInArray =
    (items: any, userID: number, objPropName: any, newObjProps: any): ItemsType[] => {
        return items.map((el: any) => {
            if (el[objPropName] === userID) {
                return {...el, ...newObjProps}
            }
            return el
        })
    }

