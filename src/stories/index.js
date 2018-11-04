import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Enemys from "./Enemys";
import Tickleiste from "./Tickleiste";

storiesOf("Gegner Lebensleiste", module).add("Beschreibung", () => <Enemys />);
storiesOf("Tickleiste", module).add("Beschreibung", () => <Tickleiste />);
