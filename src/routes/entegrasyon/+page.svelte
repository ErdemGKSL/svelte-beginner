<script lang="ts">
	import { loginData } from "$lib/merhaba";

  let veri: Object[] = [];
</script>

<button class="btn btn-primary" on:click={async () => {
  const users = await fetch('http://localhost:9876/users').then((res) => res.json());
  veri = users;
}}>Veri Çek</button>
<br>
{JSON.stringify(veri, null, 2)}
<br>
<br>
{JSON.stringify($loginData)}