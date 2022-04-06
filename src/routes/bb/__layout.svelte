<script>
    import Page from "$lib/flowbite/Page.svelte";
    import { getStores, navigating, page, session, updated } from '$app/stores';
    $: console.log($page.url.pathname);
</script>




{#key $page.url.pathname}

<Page>
<header slot="topbar">
 <nav>
  <a href="/bb">Blackburn</a>
  <a href="/bb/classic">BB-Classic</a>
</nav>   
</header>
<slot></slot>
</Page>

{/key}