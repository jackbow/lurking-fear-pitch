<script lang="ts">
  // import melissa_6_webp from '~/assets/images/melissa_6.webp';
  // import melissa_6_avif from '~/assets/images/melissa_6.avif';
  // import melissa_6_jpg from '~/assets/images/melissa_6.jpg';
  // import Picture from './Picture.svelte';
  const content = [
    {
      title: 'Interviews',
      description:
        "We are accumulating multitudes of interviews with friends, family, professional climbers, and the rest of Melissa's support system. But we maintain a conversational tone by featuring Melissa and her team speaking candidly about her experiences in an upfront way.",
      // avif: melissa_6_avif,
      // webp: melissa_6_webp,
      // jpg: melissa_6_jpg,
      // alt: '',
    },
    {
      title: 'Story Structure And Subtopics',
      description:
        "The film unfolds in a linear progression – the audience learns and grows at the same pace Melissa does. Climbing El Cap is the goal, but that's just a fraction of the story. We track Melissa's day-to-day life navigating the physical and emotional experiences New York presents for disabled individuals. We dive into the unique climbing niche of Brooklyn. Depression, anxiety, and societal pressure are among the topics explored through Melissa's lens. But we uncover a constant thread of joy by weaving in the many people who have influenced her journey and supported her dream. Part of being a climber is honoring the people that teach you, learn with you, make mistakes with you, and support you to the top.",
      // avif: melissa_6_avif,
      // webp: melissa_6_webp,
      // jpg: melissa_6_jpg,
      // alt: '',
    },
    {
      title: 'Wall Shooting',
      description:
        'Shooting on El Capitan is a risky, intimate process. It involves having multiple camera operators on and off the wall, as well as and techincal, experienced safety and rigging coordinators. Our all-star team will stay on the wall with Melissa every step of the way, day and night, experiencing everything she experiences. Being able to have this perspective will be a key element in crafting the personal angle and stakes of the story.',
      // avif: melissa_6_avif,
      // webp: melissa_6_webp,
      // jpg: melissa_6_jpg,
      // alt: '',
    },
  ];
</script>

<section id="story-approach">
  <div class="flex flex-col items-center justify-center bg-black text-white">
    <h2 class="text-8xl font-sans font-extrabold pt-20 self-start pl-20">Story Approach</h2>
    <div class="px-20 flex gap-12 p-12">
      <!-- TODO: pictures? -->
      <!-- {#each content as { title, description, avif, webp, jpg, alt }, index} -->
      {#each content as { title, description }, index}
        <div class="h-fit w-1/3">
          <!-- <Picture class="" {avif} {webp} {jpg} {alt} /> -->
          <!-- <div class="p-8 border-white border border-t-0"> -->
          <div class="p-8 border-white border">
            <h3 class="text-2xl font-extrabold pb-4">{index + 1}. {title}</h3>
            <p>
              {description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
</style>
