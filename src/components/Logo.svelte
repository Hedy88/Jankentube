<script>
    export let style;
    export let large = false;
</script>

<img {style} class="logo" src={large ? "/logo.png" : "/favicon.png"} alt="Jankentube logo" />