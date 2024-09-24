<script lang="ts">
    const currentTime = new Date();
    const hours = currentTime.getHours();

    let greeting: string = "";

    if (hours >= 6 && hours < 12) {
        greeting = "Buenos días";
    } else if (hours >= 12 && hours < 19) {
        greeting = "Buenas tardes";
    } else {
        greeting = "Buenas noches";
    }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>
