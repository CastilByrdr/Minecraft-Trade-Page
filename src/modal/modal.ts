import { ref } from "vue";

export const mustShowModal = ref(false);

export function showModal(){
    mustShowModal.value = true;
}

export function closeModal(){
    mustShowModal.value = false;
}



export interface Item{
    itemName: string;
    itemCategory:string;
    itemDescription: string;
    isAvailable: string;
}

export const item = ref<Item>(
    {
        itemName:"Raw Meat",
        itemCategory:"Food",
        isAvailable:"yes",
    }
);

const foodItems = [
    {
        itemName:"Raw Chicken",
        itemCategory:"Food",
        isAvailable:"No",
    },
    {
        itemName:"Raw Rabbit",
        itemCategory:"Food",
        isAvailable:"yes",
    }
]

export const items = ref<Item[]>(foodItems);


