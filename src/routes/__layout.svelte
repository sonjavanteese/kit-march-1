<script>
  import "virtual:windi.css";
  import "../style.css";
  import "../app.scss";
  import NavBar from "$lib/flowbite/NavBar.svelte";
  import Drawer from "$lib/flowbite/Drawer.svelte";
  import SignIn from '$lib/flowbite/SignIn.svelte';
  // import Loading from '$lib/flowbite/loading/Loading.svelte';
  import { supabase } from "$lib/db";
  import { navigating } from '$app/stores';
  import { user, profil } from '$lib/stores';
  // import { loading } from '$lib/flowbite/loading/loading';
  

  import {navData, fetchUser} from "$lib/data";
  import { browser } from "$app/env";
  import {goto} from '$app/navigation';

  user.set(supabase.auth.user())
  if (browser) {
    import("virtual:windi-devtools")
    if (!$user) {
      goto("/");
    }
  }
  
  const setProfil = async (id) => {
      if (!$user) return;
      console.log("setProfil", id);
      let d = await fetchUser(id);
      profil.set(d);
  };

  $: if ($user) {
    setProfil($user.id)
  }
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_IN') {
      user.set(session.user)
      console.log('SIGNED_IN', session)
    } else {
      user.set(null)
      profil.set(null)
      goto("/")
    }
  })  
  let open;
</script>


<NavBar bind:open></NavBar>
<Drawer {navData} bind:open></Drawer>

<main id="main">
  {#if browser}
    {#if !$user}
      <SignIn />
    {:else}
      <slot />
    {/if}
  {/if}
</main>



