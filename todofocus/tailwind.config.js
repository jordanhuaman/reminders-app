/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/*/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "media",
  theme: {
    extend: {
      colors:{
        color_p_2: "var(--color-primary-2)",
        color_p_3: "var(--color-primary-3)",
        color_p_4: "var(--color-primary-4)",
        color_p_5: "var(--color-primary-5)",
        color_p_6: "var(--color-primary-6)",
        color_p_7: "var(--color-primary-7)",
        color_p_8: "var(--color-primary-8)",
        color_p_9: "var(--color-primary-9)",
        color_p_10: "var(--color-primary-10)",
        color_p_11: "var(--color-primary-11)",
        color_s_2: "var(--color-secondary-2)",
        color_s_3: "var(--color-secondary-3)",
        color_s_4: "var(--color-secondary-4)",
        color_s_5: "var(--color-secondary-5)",
        color_s_6: "var(--color-secondary-6)",
        color_s_7: "var(--color-secondary-7)",
        color_s_8: "var(--color-secondary-8)",
        color_s_9: "var(--color-secondary-9)",
        color_s_10: "var(--color-secondary-10)",
        color_s_11: "var(--color-secondary-11)",
        color_n_2: "var(--color-neutral-2)",
        color_n_3: "var(--color-neutral-3)",
        color_n_4: "var(--color-neutral-4)",
        color_n_5: "var(--color-neutral-5)",
        color_n_6: "var(--color-neutral-6)",
        color_n_7: "var(--color-neutral-7)",
        color_n_8: "var(--color-neutral-8)",
        color_n_9: "var(--color-neutral-9)",
        color_n_10: "var(--color-neutral-10)",
        color_n_11: "var(--color-neutral-11)",
      }
    },
  },
  plugins: [],
}