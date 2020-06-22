import { html } from "lit-element/lit-element.js";
import { a11yCarousel } from "@lrnwebcomponents/a11y-carousel/a11y-carousel.js";
import { withKnobs, withWebComponentsKnobs } from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@lrnwebcomponents/storybook-utilities/storybook-utilities.js";

export default {
  title: "Media|Image Compare Slider",
  component: "a11y-carousel",
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" }
  }
};
const utils = new StorybookUtilities();
export const a11yCarouselStory = () => {
  return utils.makeElementFromClass(
    a11yCarousel,
    {
      opacity: utils.getRandomBool(),
      top: `<img aria-describedBy="cloudy" src="${new URL(
        `./demo/images/Matterhorn01.png`,
        import.meta.url
      )}" alt="Matterhorn without snow">`,
      bottom: `<img aria-describedBy="snowy" src="${new URL(
        `./demo/images/Matterhorn02.png`,
        import.meta.url
      )}" alt="Matterhorn with snow">`,
      heading: `<h2>Image Compare Slider</h2>`,
      description: `<p>
      The image on the top or when slider is moved all the way to the 
      right is the <span id="cloudy">Matterhorn on a cloudy day without snow</span>.
      As you move the slider to the left, the image below it 
      reveals the <span id="snowy">Matterhorn on a clear day with snow</span>.
      </p>`,
      width: "100%",
      maxWidth: "400px"
    },
    [
      { title: "Heading", slot: "heading" },
      { title: "Description", slot: "description" },
      { title: "Top Image", slot: "top" },
      { title: "Bottom Image", slot: "bottom" },
      { css: "width" },
      { css: "maxWidth" }
    ]
  );
};