<script>
  import { fetchClassicDetail } from './../lib/data/api/fetchSessionData.js';
  import FetchClassic from './../lib/data/FetchClassic.svelte';
  import Page from "$lib/flowbite/Page.svelte";
  import {user, profil} from "$lib/stores"
  
</script>

<Page>
    <h1>User</h1>
    
</Page>


<!--
{ type: 'supabase' table: 'profiles', keys: 'id,username,avatar_url,website,updated_at,img_url,step1' }
-->