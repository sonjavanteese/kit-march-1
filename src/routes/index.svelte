<script>
    import SignIn from '$lib/flowbite/SignIn.svelte';
    import Page from "$lib/flowbite/Page.svelte";
    import {user} from "$lib/stores";
    import {supabase, logOut} from "$lib/db";
    import {navData} from '$lib/data';
    let promise;
    
</script>

<Page>

    <section class="container mx-auto py-12 px-4">

        <h1>Welcome to SvelteKit</h1>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    
    
        <article>
            <ul>
            {#each navData as {path, name}}
                <li>
                 <a href={path}>{name}</a>
                </li>
            {/each}
            </ul>
            
        </article>
    
    </section>

</Page>