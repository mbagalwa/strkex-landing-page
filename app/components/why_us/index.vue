<template>
      <section
            class="relative w-full min-h-[80vh] bg-white text-gray-900 flex flex-col justify-center items-center overflow-hidden py-20">
            <!-- Fond grille tech subtile -->
            <div
                  class="absolute inset-0 bg-[linear-gradient(1deg,#0001_1px,transparent_1px),linear-gradient(90deg,#0001_1px,transparent_1px)] bg-[size:40px_40px] opacity-5 pointer-events-none">
            </div>

            <div class="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
                  <!-- Titre -->
                  <h2 class="text-4xl md:text-5xl font-extrabold text-center tracking-tight text-[#F06226]">
                        Why Choose Strkex
                  </h2>

                  <!-- Grid des cards -->
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <WhyUsCard title="5K+" description="Organizations trust" variant="primary" />
                        <WhyUsCard title="78%" description="Reduces admin time" variant="neutral" />
                        <WhyUsCard title="25%" description="Reduced manual work" variant="primary" />
                        <WhyUsCard title="6M" description="Feedback shared" variant="neutral" />
                  </div>

                  <!-- Texte explicatif -->
                  <p class="text-center text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-700">
                        Empowering teams with <span class="font-semibold text-[#F06226]">AI-driven tools</span> to
                        optimize workflows, boost productivity, and drive success.
                  </p>
            </div>
      </section>
</template>