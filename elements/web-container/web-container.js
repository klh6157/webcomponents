/**
 * Copyright 2024 haxtheweb
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { WebContainer } from "@webcontainer/api";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";

// @todo now make this flexible on the files produced initially or commands to run
// also needs to support terminal rendering / layouts to support and editing files
// in the web container
const files = {
  'index.js': {
    file: {
      contents: ``
    },
  },
  'package.json': {
    file: {
      contents: `
        {
          "name": "hax-webcontainer",
          "type": "module",
          "dependencies": {
            "@haxtheweb/haxcms-nodejs": "latest",
            "nodemon": "latest"
          },
          "scripts": {
            "start": "npx @haxtheweb/haxcms-nodejs"
          }
        }`,
    },
  },
};

/**
 * `web-container`
 * 
 * @demo index.html
 * @element web-container
 */
export class webContainer extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "web-container";
  }

  constructor() {
    super();
    this.webcontainerInstance = null;
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/web-container.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
    globalThis.addEventListener("load", async () => {

      const fitAddon = new FitAddon();
      const terminal = new Terminal({
        convertEol: true,
      });
      terminal.loadAddon(fitAddon);
      terminal.open(this.shadowRoot.querySelector('.terminal'));
    
      fitAddon.fit();
      // Call only once
      this.webcontainerInstance = await WebContainer.boot();
      await this.webcontainerInstance.mount(files);
      await this.installDependencies();
      await this.startDevServer();
      // Wait for `server-ready` event
      this.webcontainerInstance.on("server-ready", (port, url) => {
        this.shadowRoot.querySelector('iframe').src = url;
      });
    
      const shellProcess = await this.startShell(terminal);
      globalThis.addEventListener("resize", () => {
        fitAddon.fit();
        shellProcess.resize({
          cols: terminal.cols,
          rows: terminal.rows,
        });
      });
    });
  }

  async installDependencies() {
    // Install dependencies
    const installProcess = await this.webcontainerInstance.spawn("npm", ["install"]);
    installProcess.output.pipeTo(
      new WritableStream({
        write(data) {
          console.log(data);
        },
      }),
    );
    // Wait for install command to exit
    return installProcess.exit;
  }

  async startDevServer() {
    // Run `npm run start` to start the Express app
    await this.webcontainerInstance.spawn("npm", ["run", "start"]);
  }

  async startShell(terminal) {
    const shellProcess = await this.webcontainerInstance.spawn("jsh", {
      terminal: {
        cols: terminal.cols,
        rows: terminal.rows,
      },
    });
    shellProcess.output.pipeTo(
      new WritableStream({
        write(data) {
          terminal.write(data);
        },
      }),
    );

    const input = shellProcess.input.getWriter();
    terminal.onData((data) => {
      input.write(data);
    });

    return shellProcess;
  }

  /** @param {string} content*/
  async writeIndexJS(content) {
    await this.webcontainerInstance.fs.writeFile("/index.js", content);
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      iframe {
        width: 100%;
        border: none;
        background-color: transparent;
      }

      .terminal {
        padding: 0;
        margin: 0;
        overflow: hidden;
      }
      /**
      * Copyright (c) 2014 The xterm.js authors. All rights reserved.
      * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
      * https://github.com/chjj/term.js
      * @license MIT
      *
      * Permission is hereby granted, free of charge, to any person obtaining a copy
      * of this software and associated documentation files (the "Software"), to deal
      * in the Software without restriction, including without limitation the rights
      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      * copies of the Software, and to permit persons to whom the Software is
      * furnished to do so, subject to the following conditions:
      *
      * The above copyright notice and this permission notice shall be included in
      * all copies or substantial portions of the Software.
      *
      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      * THE SOFTWARE.
      *
      * Originally forked from (with the author's permission):
      *   Fabrice Bellard's javascript vt100 for jslinux:
      *   http://bellard.org/jslinux/
      *   Copyright (c) 2011 Fabrice Bellard
      *   The original design remains. The terminal itself
      *   has been extended to include xterm CSI codes, among
      *   other features.
      */

      /**
      *  Default styles for xterm.js
      */

      .xterm {
          cursor: text;
          position: relative;
          user-select: none;
          -ms-user-select: none;
          -webkit-user-select: none;
      }

      .xterm.focus,
      .xterm:focus {
          outline: none;
      }

      .xterm .xterm-helpers {
          position: absolute;
          top: 0;
          /**
          * The z-index of the helpers must be higher than the canvases in order for
          * IMEs to appear on top.
          */
          z-index: 5;
      }

      .xterm .xterm-helper-textarea {
          padding: 0;
          border: 0;
          margin: 0;
          /* Move textarea out of the screen to the far left, so that the cursor is not visible */
          position: absolute;
          opacity: 0;
          left: -9999em;
          top: 0;
          width: 0;
          height: 0;
          z-index: -5;
          /** Prevent wrapping so the IME appears against the textarea at the correct position */
          white-space: nowrap;
          overflow: hidden;
          resize: none;
      }

      .xterm .composition-view {
          /* TODO: Composition position got messed up somewhere */
          background: #000;
          color: #FFF;
          display: none;
          position: absolute;
          white-space: nowrap;
          z-index: 1;
      }

      .xterm .composition-view.active {
          display: block;
      }

      .xterm .xterm-viewport {
          /* On OS X this is required in order for the scroll bar to appear fully opaque */
          background-color: #000;
          overflow-y: scroll;
          cursor: default;
          position: absolute;
          right: 0;
          left: 0;
          top: 0;
          bottom: 0;
      }

      .xterm .xterm-screen {
          position: relative;
      }

      .xterm .xterm-screen canvas {
          position: absolute;
          left: 0;
          top: 0;
      }

      .xterm .xterm-scroll-area {
          visibility: hidden;
      }

      .xterm-char-measure-element {
          display: inline-block;
          visibility: hidden;
          position: absolute;
          top: 0;
          left: -9999em;
          line-height: normal;
      }

      .xterm.enable-mouse-events {
          /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */
          cursor: default;
      }

      .xterm.xterm-cursor-pointer,
      .xterm .xterm-cursor-pointer {
          cursor: pointer;
      }

      .xterm.column-select.focus {
          /* Column selection mode */
          cursor: crosshair;
      }

      .xterm .xterm-accessibility:not(.debug),
      .xterm .xterm-message {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          z-index: 10;
          color: transparent;
          pointer-events: none;
      }

      .xterm .xterm-accessibility-tree:not(.debug) *::selection {
        color: transparent;
      }

      .xterm .xterm-accessibility-tree {
        user-select: text;
        white-space: pre;
      }

      .xterm .live-region {
          position: absolute;
          left: -9999px;
          width: 1px;
          height: 1px;
          overflow: hidden;
      }

      .xterm-dim {
          /* Dim should not apply to background, so the opacity of the foreground color is applied
          * explicitly in the generated class and reset to 1 here */
          opacity: 1 !important;
      }

      .xterm-underline-1 { text-decoration: underline; }
      .xterm-underline-2 { text-decoration: double underline; }
      .xterm-underline-3 { text-decoration: wavy underline; }
      .xterm-underline-4 { text-decoration: dotted underline; }
      .xterm-underline-5 { text-decoration: dashed underline; }

      .xterm-overline {
          text-decoration: overline;
      }

      .xterm-overline.xterm-underline-1 { text-decoration: overline underline; }
      .xterm-overline.xterm-underline-2 { text-decoration: overline double underline; }
      .xterm-overline.xterm-underline-3 { text-decoration: overline wavy underline; }
      .xterm-overline.xterm-underline-4 { text-decoration: overline dotted underline; }
      .xterm-overline.xterm-underline-5 { text-decoration: overline dashed underline; }

      .xterm-strikethrough {
          text-decoration: line-through;
      }

      .xterm-screen .xterm-decoration-container .xterm-decoration {
        z-index: 6;
        position: absolute;
      }

      .xterm-screen .xterm-decoration-container .xterm-decoration.xterm-decoration-top-layer {
        z-index: 7;
      }

      .xterm-decoration-overview-ruler {
          z-index: 8;
          position: absolute;
          top: 0;
          right: 0;
          pointer-events: none;
      }

      .xterm-decoration-top {
          z-index: 2;
          position: relative;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="container">
      <div class="preview">
        <iframe src="${new URL('./lib/loading.html', import.meta.url).href}"></iframe>
      </div>
    </div>
    <div class="terminal"></div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(webContainer.tag, webContainer);