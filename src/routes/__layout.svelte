<script>
  import "virtual:windi.css";
  import "../style.css";
  import "../app.scss";
  import NavBar from "$lib/flowbite/NavBar.svelte";
  import Drawer from "$lib/flowbite/Drawer.svelte";
  import {supabase} from "$lib/db";
  import {user} from "$lib/stores"
  import {navData} from "$lib/data"
  // if you want to enable windi devtools
  import { browser } from "$app/env";
  user.set(supabase.auth.user())
  if (browser) import("virtual:windi-devtools")
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_IN') {
      user.set(session.user)
      console.log('SIGNED_IN', session)
    } else {
      user.set(null)
    }
  })  
  let open
</script>


<NavBar bind:open></NavBar>
<Drawer {navData} bind:open></Drawer>

<main id="main">
  {#if browser}
    <slot />
  {/if}
</main>

