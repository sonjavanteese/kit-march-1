<script>
  import "virtual:windi.css";
  import "../style.css";
  import "../app.scss";
  import NavBar from "$lib/flowbite/NavBar.svelte";
  import Drawer from "$lib/flowbite/Drawer.svelte";
  import SignIn from '$lib/flowbite/SignIn.svelte';
  import {supabase} from "$lib/db";
  import {user, profil} from "$lib/stores"
  import {navData, fetchUser} from "$lib/data"
  // if you want to enable windi devtools
  import { browser } from "$app/env";
  user.set(supabase.auth.user())
  if (browser) import("virtual:windi-devtools")

  const setProfil = async (id) => {
      if (!$user) return;
      console.log("setProfil", id);
      let d = await fetchUser(id);
      profil.set(d);
  };

  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_IN') {
      setProfil(session.user.id)
      user.set(session.user)
      console.log('SIGNED_IN', session)
    } else {
      user.set(null)
      profil.set(null)
    }
  })  
  let open;
</script>


<NavBar bind:open></NavBar>
<Drawer {navData} bind:open></Drawer>

<main id="main">

  {#if !$user}

  <SignIn />
  
  {:else}
    <slot />
  {/if}
</main>

