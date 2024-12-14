import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 102
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 123
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 0
})

export const combinedSelector = selector({
    key: "combinedAtom",
    get : ({get})=>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const messagingAtomCount = get(messagingAtom);
        const notificationAtomCount = get(notificationAtom);

        return networkAtomCount + jobsAtomCount + messagingAtomCount + notificationAtomCount;
    }
})