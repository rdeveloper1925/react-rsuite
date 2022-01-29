import React, { useState } from "react";

// import default style
import "rsuite/styles/index.less"; // or 'rsuite/dist/rsuite.min.css'

/**
 * Support personalized configurations such as localization, Right to Left, and themes
 */

import { Button, CustomProvider, ButtonToolbar } from "rsuite";

function Darkmode() {
  const [theme, setTheme] = useState("light");

  const switchTheme = (e) => setTheme(e.target.value);

  return (
    <CustomProvider theme={theme}>
      <div className="App">
        <ButtonToolbar>
          <Button appearance="default" onClick={switchTheme} value="light">
            Light theme(default)
          </Button>
          <Button appearance="primary" onClick={switchTheme} value="dark">
            Dark theme
          </Button>
          <Button
            appearance="ghost"
            onClick={switchTheme}
            value="high-contrast"
          >
            High contrast theme
          </Button>
        </ButtonToolbar>
      </div>
    </CustomProvider>
  );
}

export default Darkmode;
