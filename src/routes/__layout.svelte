<script>
  import "virtual:windi.css";
  import "../style.css";
  import "../app.scss";
  import NavBar from "$lib/flowbite/NavBar.svelte";
  import Drawer from "$lib/flowbite/Drawer.svelte";
  import {supabase} from "$lib/db";
  import {user} from "$lib/stores"
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


<NavBar bind:open>
    <a href="/">Start</a>
    <a href="/items">Items</a>
</NavBar>
<Drawer bind:open>

</Drawer>

<main id="main">
  <slot />
</main>

