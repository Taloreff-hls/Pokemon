import { SPACING } from "./spacings";

const paddings = {
  small: `${SPACING[3]} ${SPACING[6]}`,
  medium: `${SPACING[4]} ${SPACING[6]}`,
  large: `${SPACING[5]} ${SPACING[6]}`,
  button: {
    small: `5px ${SPACING[6]}`,
    medium: `${SPACING[4]} ${SPACING[6]}`,
    large: `${SPACING[5]} ${SPACING[6]}`,
  },
  dropdown: {
    small: ` 9px ${SPACING[2]}`,
    medium: `${SPACING[2]} ${SPACING[5]}`,
  },
  input: {
    base: `${SPACING[2]} ${SPACING[9]} ${SPACING[2]} ${SPACING[9]}`,
    search: `${SPACING[2]} ${SPACING[12]} ${SPACING[2]} ${SPACING[9]}`,
    after: `${SPACING[2]} ${SPACING[6]} ${SPACING[2]} ${SPACING[9]}`,
  },
  tab: {
    small: `${SPACING[1]} ${SPACING[2]}`,
  },
};

export default paddings;
