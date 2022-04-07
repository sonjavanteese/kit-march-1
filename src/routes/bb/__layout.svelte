<script>
    import Page from "$lib/flowbite/Page.svelte";
    import { getStores, navigating, page, session, updated } from '$app/stores';
    let k;
    $: console.log($page.url.pathname);
    $: {
      k = $page.url.pathname;
    }
</script>




{#key k}

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