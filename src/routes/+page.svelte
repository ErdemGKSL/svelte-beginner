<script lang="ts">
	import { loginData } from "$lib/merhaba";
	import { writable } from "svelte/store";
  
  let inputValue = "";
  let number = 0;
  let meyveler = writable(['elma', 'armut', 'muz']);
</script>

<h1>selam</h1>

<button class="btn btn-primary" on:click={() => {
  number += 1;
  $loginData.user = "Ahmet";
  localStorage.setItem("login", "Ahmet");
}}>Bana tıkla, {number} kere tıklandı</button>

<br><br>

<input
  type="search"
  class="input-group-text" 
  bind:value={inputValue}
>
<br><br>
<button class="btn btn-secondary" on:click={() => {
  if (inputValue.length > 0) {
    meyveler.update((meyveler) => {
      meyveler.push(inputValue);
      return meyveler;
    });

    inputValue = "";
  }
}}>Ekle</button>
<br><br>

{#each $meyveler as meyve}
  <p>
    {meyve}
  </p>
{/each}