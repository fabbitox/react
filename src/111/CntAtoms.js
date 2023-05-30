import { atom, selector } from "recoil";

export const CntAtoms = atom({
    key: 'n',
    default: 0
});

export const CntTwice = selector({
    key: 'n2',
    get: ({get}) => {
        return get(CntAtoms) * 2;
    }
});