/**
 * Copyright 2024 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import "@haxtheweb/simple-cta/simple-cta.js"; // TODO remove if not used
import { ChatAgentModalStore } from "../chat-agent";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { html, css } from "lit";

class ChatInput extends DDD {

  static get tag() {
    return "chat-input";
  }

  constructor() {
    super();

  }

  static get styles() {
    return [
      super.styles,
      css`
        /* https://oer.hax.psu.edu/bto108/sites/haxcellence/documentation/ddd */
        
        :host {
          display: block;
          font-family: var(--ddd-font-primary);
        }

        .chat-input-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
        }

        #user-input {
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          background-color: var(--ddd-theme-default-white);
          color: #000;
          resize: none;
          scrollbar-width: none;
          width: 85%;
        }

        .send-button {
          width: var(--ddd-spacing-13);
          height: var(--ddd-spacing-13);
          border-radius: var(--ddd-radius-circle);
          background-color: var(--data-theme-primary, var(--ddd-primary-1));
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        simple-icon-lite {
          color: var(
            --lowContrast-override,
            var(--ddd-theme-bgContrast, white)
          );
        }
      `
    ];
  }

  // TODO change the send button to simple-cta, will have to ensure coloring works properly.
  // TODO set maxlength attribute on text area, ask Dave what the character limit is
  render() {
    return html`
      <div class="chat-input-wrapper">
        <textarea name="" id="user-input" placeholder="${ChatAgentModalStore.promptPlaceholder}" @keypress=${this.handleKeyPress}></textarea>
        <div class="send-button" @click=${this.handleSendButton} tabindex="0">
          <simple-icon-lite icon="icons:send"></simple-icon-lite>
        </div>
      </div>
    `;
  }
  
  handleKeyPress(e) {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      this.handleSendButton();
    }

    if (e.key === "Enter") {
      e.preventDefault();
    }
  }

  handleSendButton() {
    const INPUTTED_PROMPT = this.shadowRoot.querySelector("#user-input").value;

    // TODO if prompt has character amount greater than character length, alert user that they need to shorten their prompt (this is in case the user goes into browser dev tools and changes maxlength attribute)

    if (INPUTTED_PROMPT !== "") {
      ChatAgentModalStore.developerModeEnabled ? console.info('HAX-DEV-MODE: Send button activated. Prompt to send: ' + INPUTTED_PROMPT) : null;

      ChatAgentModalStore.messageIndex++;
      ChatAgentModalStore.userIndex++;

      let date = new Date();
      let dateString = date.toString().replace(/\s/g, '-');

      const chatLogObject = {
        messageID: ChatAgentModalStore.messageIndex,
        author: ChatAgentModalStore.userName,
        message: INPUTTED_PROMPT,
        authorMessageIndex: ChatAgentModalStore.userIndex,
        timestamp: dateString, // TODO need to fix this so it stores the data as a properly formatted string
      }

      ChatAgentModalStore.chatLog.push(chatLogObject);

      // TODO send the prompt to merlin engine, write response to chat log which will update interface via Array Map

      this.shadowRoot.querySelector("#user-input").value = "";
    } else {
      ChatAgentModalStore.developerModeEnabled ? console.info('HAX-DEV-MODE: Send button activated. No prompt to send') : null;
    }
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }

    if (ChatAgentModalStore.promptCharacterLimit > 0) {
      this.shadowRoot.querySelector("#user-input").setAttribute("maxlength", ChatAgentModalStore.promptCharacterLimit);
    }
  }

  static get properties() {
    return {
      ...super.properties,
      characterLimit: { 
        type: Number,
        attribute: "maxlength",
      },
      developerModeEnabled: {
        type: Boolean,
        attribute: "developer-mode",
      },
    };
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(ChatInput.tag, ChatInput);
export { ChatInput };