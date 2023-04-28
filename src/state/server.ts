import type { Server } from "@/model/ServerModel";
import { computed, ref } from "vue";

export const server = ref<Server | null>(null);
export const users = ref<Server[]>([]);