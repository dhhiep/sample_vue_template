<template>
  <div class="p-6 max-w-5xl mx-auto">
    <h2 class="text-2xl font-bold mb-6">Flowbite-Vue Components Examples</h2>

    <section class="mb-8">
      <h3 class="text-xl font-semibold mb-3">Buttons</h3>
      <div class="flex flex-wrap gap-2">
        <FwbButton>Default</FwbButton>
        <FwbButton color="blue">Blue</FwbButton>
        <FwbButton color="green">Green</FwbButton>
        <FwbButton color="red">Red</FwbButton>
        <FwbButton color="yellow">Yellow</FwbButton>
        <FwbButton color="purple">Purple</FwbButton>
      </div>
    </section>

    <section class="mb-8">
      <h3 class="text-xl font-semibold mb-3">Alerts</h3>
      <div class="space-y-3">
        <FwbAlert>A default alert for general messages</FwbAlert>
        <FwbAlert color="info">An info alert for information messages</FwbAlert>
        <FwbAlert color="success">A success alert for success messages</FwbAlert>
        <FwbAlert color="warning">A warning alert for warning messages</FwbAlert>
        <FwbAlert color="failure">A failure alert for error messages</FwbAlert>
      </div>
    </section>

    <section class="mb-8">
      <h3 class="text-xl font-semibold mb-3">Cards</h3>
      <div class="grid md:grid-cols-2 gap-4">
        <FwbCard img-src="https://flowbite.com/docs/images/blog/image-1.jpg" img-alt="Card image">
          <div class="p-5">
            <h5 class="text-lg font-bold mb-2">Card with Image</h5>
            <p>Card with image example.</p>
            <div class="mt-4">
              <FwbButton>Read more</FwbButton>
            </div>
          </div>
        </FwbCard>

        <div
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h3 class="text-xl font-semibold mb-3">Form Elements</h3>
      <div class="max-w-md">
        <div class="mb-4">
          <FwbInput label="Email" placeholder="name@example.com" type="email" />
        </div>
        <div class="mb-4">
          <FwbSelect label="Select an option">
            <option value="">Choose an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </FwbSelect>
        </div>
        <div class="mb-4">
          <FwbTextarea label="Your message" placeholder="Leave a comment..." rows="4" />
        </div>
        <div class="mb-4">
          <FwbCheckbox label="I agree to the terms and conditions" />
        </div>
        <FwbButton>Submit</FwbButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// No additional setup needed as components are globally registered
</script>
