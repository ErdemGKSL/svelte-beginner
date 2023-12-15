import { writable } from "svelte/store";

export let loginData = writable({
  user: null as string | null,
})