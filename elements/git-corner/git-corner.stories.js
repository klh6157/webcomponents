import { GitCorner } from "./git-corner.js";
import { withKnobs } from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@lrnwebcomponents/storybook-utilities/storybook-utilities.js";

export default {
  title: "Developer|Git",
  component: GitCorner.tag,
  decorators: [withKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" },
  },
};
const utils = new StorybookUtilities();
export const GitHubCorner = () => {
  return utils.makeUsageDocs(
    GitCorner,
    import.meta.url,
    utils.makeElementFromClass(GitCorner,
      {
        source: 'https://github.com/elmsln/lrnwebcomponents',
        alt: "Our monorepo of all the things you see here",
        corner: true,
        size: "large"
      })
  );
};