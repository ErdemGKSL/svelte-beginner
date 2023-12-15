<script lang="ts">
	import { browser } from "$app/environment";
	import { onNavigate } from "$app/navigation";
	import { loginData } from "$lib/merhaba";
	import { onMount } from "svelte";
  let navigationBar: HTMLDivElement;
  onNavigate((event) => {
    new Array(...navigationBar.children).forEach((naviagtionBtn) => {
      if (event.to?.url.pathname === naviagtionBtn.getAttribute("href")) {
        naviagtionBtn.classList.add("btn-success");
        naviagtionBtn.classList.remove("btn-secondary");
      } else if (event.from?.url.pathname === naviagtionBtn.getAttribute("href")) {
        naviagtionBtn.classList.add("btn-secondary");
        naviagtionBtn.classList.remove("btn-success");
      }
    })
  });

  onMount(() => {
    if (browser) {
      console.log(localStorage.getItem("login"))
    
      $loginData.user = localStorage.getItem("login");
    }
  })
</script>

<div bind:this={navigationBar}>
  <a href="/" class="btn btn-secondary ">Ana Sayfa</a>
  <a href="/hakkimda" class="btn btn-secondary">Hakkımda</a>
  <a href="/entegrasyon" class="btn btn-secondary">Entegrasyon</a>
</div>

<slot />