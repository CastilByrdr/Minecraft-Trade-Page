import { ref } from "vue";

export interface Item{
    itemName: string;
    itemCategory:string;
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

