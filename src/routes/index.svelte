<script>
    import SignIn from '$lib/flowbite/SignIn.svelte';
    import Page from "$lib/flowbite/Page.svelte";
    import {user} from "$lib/stores";
    import {supabase, logOut} from "$lib/db";

    let promise;
    
</script>

<Page class="container mx-auto px-4">

    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#if $user}
    <p>
        <button on:click={logOut} class="btn btn-red">
            Logout
        </button>
    </p>
{:else}
    <SignIn></SignIn>
{/if}
    

</Page>