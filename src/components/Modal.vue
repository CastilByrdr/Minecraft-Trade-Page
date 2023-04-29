<script setup lang="ts">
 
 import { closeModal, mustShowModal, items, item } from "@/modal/modal";
import router from "@/router";

 function addItem(){
    items.value.push({...item.value});
    closeModal();
    router.push({ path: "/trade/list"})
 }

</script>

<template>

    <div class="modal" :class="{ 'is-active': mustShowModal }">
        
        <div class="modal-background" @click="closeModal"></div>
            <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Create Post</p>
                        <button class="delete" aria-label="close" @click="closeModal"></button>
                    </header>
                    <section class="modal-card-body">
                        <div class="field mt-5" >
                        <label class="food m-4" for="item-selected">List of all food Items</label>
                        <div class="select is-full-width">
                            <select class="form-control" id="type">

                                <optgroup label="crops">
                                    <option value="crops">Potatoes</option>
                                    <option value="crops">Poisonous Potato</option>
                                    <option value="crops">Melon Slice</option>
                                    <option value="crops">Glow Berries</option>
                                    <option value="crops">Sweet Berries</option>
                                    <option value="crops">Golden Carrots</option>
                                    <option value="crops">Enchanted Apple</option>
                                    <option value="crops">Chorus Fruit</option>
                                    <option value="crops">Carrot</option>
                                    <option value="crops">Beetroot</option>
                                    <option value="crops">Apple</option>
                                </optgroup>
                                <optgroup label="meats">
                                    <option value="meat">Rotten Fish</option>
                                    <option value="meat">Raw Porkchop</option>
                                    <option value="meat">Raw Mutton</option>
                                    <option value="meat">Raw Rabbit</option>
                                    <option value="meat">Raw Chicken</option>
                                    <option value="meat">Raw Beef</option>
                                </optgroup>
                                <optgroup label="fish">
                                    <option value="fish">Tropical Fish</option>
                                    <option value="fish">Raw Salmon</option>
                                    <option value="fish">Putterfish</option>
                                    <option value="fish">Raw Cod</option>
                                </optgroup>
                                <optgroup label="cooked Food">
                                    <option value="cooked Food">Cooked Salmon</option>
                                    <option value="cooked Food">Cooked Rabbit</option>
                                    <option value="cooked Food">Cooked Porkchop</option>
                                    <option value="cooked Food">Cooked Mutton</option>
                                    <option value="cooked Food">Cooked Cod</option>
                                    <option value="cooked Food">Cooked Chicken</option>
                                    <option value="cooked Food">Steak</option>
                                </optgroup>
                                <optgroup label="crafted dishes">
                                    <option value="crafted dishes">Suspicious Stew</option>
                                    <option value="crafted dishes">Rabbit Stew</option>
                                    <option value="crafted dishes">Pumpkin Pie</option>
                                    <option value="crafted dishes">Mushroom Stew</option>
                                    <option value="crafted dishes">Dried Kelp</option>
                                    <option value="crafted dishes">Cookie</option>
                                    <option value="crafted dishes">Bread</option>
                                    <option value="crafted dishes">Beetroot Soup</option>
                                    <option value="crafted dishes">Baked Potato</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label" for="item-description">Item Description</label>
                        <input type="text" class="input" id="item-description">
                    </div>
                    <div class="field">
                        <label class="label" for="is-available">Is the item available?</label>
                        <input type="text" class="input" id="is-available">
                    </div>
                    
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success is-primary" @click.prevent="addItem()">Save</button>
                    <button class="button" @click="closeModal">Cancel</button>
                </footer>
            </div>
        
   
    </div>
</template>

<style scoped>
.modal-card-head{
    background-color: rgb(144, 244, 180);
}
.modal-card-body{
    background-color: rgb(224, 244, 228);
}
</style>