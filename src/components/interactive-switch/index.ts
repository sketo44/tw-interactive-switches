import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

type Choice = { value?: string };
type SwitchConfig = {
  style?: string | Choice[];
  title?: string;
  off_label?: string;
  on_label?: string;
  off_text?: string;
  on_text?: string;
  link_text?: string;
  link_url?: string;
};

/**
 * Interactive content switch for a Salla home/landing-page block.
 * All four visual options are MIT-licensed adaptations; notices accompany their styles.
 */
export default class InteractiveSwitch extends LitElement {
  @property({ type: Object }) config?: SwitchConfig;
  @state() private on = false;

  private change = (event: Event) => {
    this.on = (event.currentTarget as HTMLInputElement).checked;
  };

  private get variant(): string {
    const value = this.config?.style;
    const selected = Array.isArray(value) ? value[0]?.value : value;
    return ['rishi', 'jk', 'andrew', 'madflows'].includes(selected || '') ? selected! : 'rishi';
  }

  private get safeLink(): string | null {
    const raw = this.config?.link_url?.trim();
    if (!raw) return null;
    if (raw.startsWith('/') && !raw.startsWith('//')) return raw;
    try {
      const url = new URL(raw);
      return ['http:', 'https:'].includes(url.protocol) ? url.href : null;
    } catch {
      return null;
    }
  }

  private renderSwitch() {
    switch (this.variant) {
      case 'jk':
        return html`<!-- From Uiverse.io by JkHuger - https://uiverse.io/JkHuger/old-falcon-20
MIT License, Copyright (c) JkHuger (JkHuger) -->
<label for="jk-theme" class="switch-jk">
	<span class="switch-jk__toggle-wrap">
		<input id="jk-theme" class="switch-jk__toggle" type="checkbox" role="switch" name="jk-theme" value="dark" aria-label="تبديل المحتوى" .checked=${this.on} @change=${this.change}>
		<span class="switch-jk__icon">
			<span class="switch-jk__icon-part"></span>
			<span class="switch-jk__icon-part"></span>
			<span class="switch-jk__icon-part"></span>
			<span class="switch-jk__icon-part"></span>
			<span class="switch-jk__icon-part"></span>
			<span class="switch-jk__icon-part"></span>
			<span class="switch-jk__icon-part"></span>
			<span class="switch-jk__icon-part"></span>
			<span class="switch-jk__icon-part"></span>
		</span>
	</span>
</label>`;
      case 'andrew':
        return html`<!-- From Uiverse.io by andrew-demchenk0 - https://uiverse.io/andrew-demchenk0/empty-penguin-100
MIT License, Copyright (c) andrew-demchenk0 (A) -->
          <label class="switch-andrew">
            <input type="checkbox" class="switch-andrew__toggle" role="switch" aria-label="تبديل المحتوى" .checked=${this.on} @change=${this.change}>
            <span class="switch-andrew__slider"></span>
            <span class="switch-andrew__card-side"></span>
          </label>`;
      case 'madflows':
        return html`<!-- From Uiverse.io by Madflows - https://uiverse.io/Madflows/fresh-fireant-15
MIT License, Copyright (c) Madflows (Folarin Lawal) -->
          <div class="switch-madflows">
            <label class="switch-madflows__label">
              <input type="checkbox" class="switch-madflows__checkbox" role="switch" aria-label="تبديل المحتوى" .checked=${this.on} @change=${this.change}>
              <span class="switch-madflows__slider"></span>
            </label>
          </div>`;
      default:
        return html`<!-- From Uiverse.io by rishichawda - https://uiverse.io/rishichawda/fluffy-robin-48
MIT License, Copyright (c) I had seen the design concept somewhere and Implemented it on my website (converted the image to svg, added transitions). this was a couple of years ago so i'm not able to find the dribbble or figma link (or wherever i found it). , rishichawda (Rishi Kumar Chawda) -->
<label class="switch-rishi">
  <input type="checkbox" class="switch-rishi__input" role="switch" aria-label="تبديل المحتوى" .checked=${this.on} @change=${this.change}>
  <svg viewBox="0 0 69.667 44" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(3.5 3.5)" data-name="Component 15 – 1" id="rishi-Component_15_1">

      <g filter="url(#rishi-container)" transform="matrix(1, 0, 0, 1, -3.5, -3.5)">
        <rect fill="#83cbd8" transform="translate(3.5 3.5)" rx="17.5" height="35" width="60.667" data-name="container" id="rishi-container"></rect>
      </g>

      <g transform="translate(2.333 2.333)" id="rishi-button">

        <g data-name="sun" id="rishi-sun">
          <g filter="url(#sun-outer)" transform="matrix(1, 0, 0, 1, -5.83, -5.83)">
            <circle fill="#f8e664" transform="translate(5.83 5.83)" r="15.167" cy="15.167" cx="15.167" data-name="sun-outer" id="rishi-sun-outer-2"></circle>
          </g>
          <g filter="url(#rishi-sun)" transform="matrix(1, 0, 0, 1, -5.83, -5.83)">
            <path fill="rgba(246,254,247,0.29)" transform="translate(9.33 9.33)" d="M11.667,0A11.667,11.667,0,1,1,0,11.667,11.667,11.667,0,0,1,11.667,0Z" data-name="sun" id="rishi-sun-3"></path>
          </g>
          <circle fill="#fcf4b9" transform="translate(8.167 8.167)" r="7" cy="7" cx="7" id="rishi-sun-inner"></circle>
        </g>

        <g data-name="moon" id="rishi-moon">
          <g filter="url(#rishi-moon)" transform="matrix(1, 0, 0, 1, -31.5, -5.83)">
            <circle fill="#cce6ee" transform="translate(31.5 5.83)" r="15.167" cy="15.167" cx="15.167" data-name="moon" id="rishi-moon-3"></circle>
          </g>
          <g fill="#a6cad0" transform="translate(-24.415 -1.009)" id="rishi-patches">
            <circle transform="translate(43.009 4.496)" r="2" cy="2" cx="2"></circle>
            <circle transform="translate(39.366 17.952)" r="2" cy="2" cx="2" data-name="patch"></circle>
            <circle transform="translate(33.016 8.044)" r="1" cy="1" cx="1" data-name="patch"></circle>
            <circle transform="translate(51.081 18.888)" r="1" cy="1" cx="1" data-name="patch"></circle>
            <circle transform="translate(33.016 22.503)" r="1" cy="1" cx="1" data-name="patch"></circle>
            <circle transform="translate(50.081 10.53)" r="1.5" cy="1.5" cx="1.5" data-name="patch"></circle>
          </g>
        </g>
      </g>

      <g filter="url(#rishi-cloud)" transform="matrix(1, 0, 0, 1, -3.5, -3.5)">
        <path fill="#fff" transform="translate(-3466.47 -160.94)" d="M3512.81,173.815a4.463,4.463,0,0,1,2.243.62.95.95,0,0,1,.72-1.281,4.852,4.852,0,0,1,2.623.519c.034.02-.5-1.968.281-2.716a2.117,2.117,0,0,1,2.829-.274,1.821,1.821,0,0,1,.854,1.858c.063.037,2.594-.049,3.285,1.273s-.865,2.544-.807,2.626a12.192,12.192,0,0,1,2.278.892c.553.448,1.106,1.992-1.62,2.927a7.742,7.742,0,0,1-3.762-.3c-1.28-.49-1.181-2.65-1.137-2.624s-1.417,2.2-2.623,2.2a4.172,4.172,0,0,1-2.394-1.206,3.825,3.825,0,0,1-2.771.774c-3.429-.46-2.333-3.267-2.2-3.55A3.721,3.721,0,0,1,3512.81,173.815Z" data-name="cloud" id="rishi-cloud"></path>
      </g>

      <g fill="#def8ff" transform="translate(3.585 1.325)" id="rishi-stars">
        <path transform="matrix(-1, 0.017, -0.017, -1, 24.231, 3.055)" d="M.774,0,.566.559,0,.539.458.933.25,1.492l.485-.361.458.394L1.024.953,1.509.592.943.572Z"></path>
        <path transform="matrix(-0.777, 0.629, -0.629, -0.777, 23.185, 12.358)" d="M1.341.529.836.472.736,0,.505.46,0,.4.4.729l-.231.46L.605.932l.4.326L.9.786Z" data-name="star"></path>
        <path transform="matrix(0.438, 0.899, -0.899, 0.438, 23.177, 29.735)" d="M.015,1.065.475.9l.285.365L.766.772l.46-.164L.745.494.751,0,.481.407,0,.293.285.658Z" data-name="star"></path>
        <path transform="translate(12.677 0.388) rotate(104)" d="M1.161,1.6,1.059,1,1.574.722.962.607.86,0,.613.572,0,.457.446.881.2,1.454l.516-.274Z" data-name="star"></path>
        <path transform="matrix(-0.07, 0.998, -0.998, -0.07, 11.066, 15.457)" d="M.873,1.648l.114-.62L1.579.945,1.03.62,1.144,0,.706.464.157.139.438.7,0,1.167l.592-.083Z" data-name="star"></path>
        <path transform="translate(8.326 28.061) rotate(11)" d="M.593,0,.638.724,0,.982l.7.211.045.724.36-.64.7.211L1.342.935,1.7.294,1.063.552Z" data-name="star"></path>
        <path transform="translate(5.012 5.962) rotate(172)" d="M.816,0,.5.455,0,.311.323.767l-.312.455.516-.215.323.456L.827.911,1.343.7.839.552Z" data-name="star"></path>
        <path transform="translate(2.218 14.616) rotate(169)" d="M1.261,0,.774.571.114.3.487.967,0,1.538.728,1.32l.372.662.047-.749.728-.218L1.215.749Z" data-name="star"></path>
      </g>
    </g>
  </svg>
</label>`;
    }
  }

  static styles = css`
    :host { display: block; font-family: inherit; color: #202a32; }
    * { box-sizing: border-box; }
    .panel { max-width: 800px; margin: 0 auto; padding: clamp(20px, 4vw, 42px); border: 1px solid #e4e7e8; border-radius: 20px; background: #fff; text-align: center; }
    h2 { margin: 0 0 9px; font-size: clamp(22px, 3vw, 32px); line-height: 1.4; }
    .switch-wrap { display: grid; place-items: center; min-height: 96px; margin: 14px auto; direction: ltr; }
    .copy { display: grid; gap: 7px; min-height: 66px; align-content: center; }
    .copy strong { font-size: 17px; }
    .copy p { margin: 0; font-size: 15px; line-height: 1.7; color: #606d76; }
    .link { display: inline-flex; margin-top: 24px; padding: 11px 20px; border-radius: 10px; background: var(--color-primary, #177e71); color: #fff; text-decoration: none; font-weight: 700; }
    .link:focus-visible { outline: 3px solid #d49b31; outline-offset: 3px; }
    @media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; } }
/* From Uiverse.io by rishichawda - https://uiverse.io/rishichawda/fluffy-robin-48
   MIT License, Copyright (c) I had seen the design concept somewhere and Implemented it on my website (converted the image to svg, added transitions). this was a couple of years ago so i'm not able to find the dribbble or figma link (or wherever i found it). , rishichawda (Rishi Kumar Chawda) */
.switch-rishi {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 7em;
  cursor: pointer;
}

.switch-rishi__input {
  opacity: 0;
  width: 0;
  height: 0;
}

#rishi-container,
#rishi-patches,
#rishi-stars,
#rishi-button,
#rishi-sun,
#rishi-moon,
#rishi-cloud {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.25s;
}

.switch-rishi__input:checked + svg #rishi-container {
  fill: #2b4360;
}

.switch-rishi__input:checked + svg #rishi-button {
  transform: translate(28px, 2.333px);
}

#rishi-sun {
  opacity: 1;
}

.switch-rishi__input:checked + svg #rishi-sun {
  opacity: 0;
}

#rishi-moon {
  opacity: 0;
}

.switch-rishi__input:checked + svg #rishi-moon {
  opacity: 1;
}

#rishi-cloud {
  opacity: 1;
}

.switch-rishi__input:checked + svg #rishi-cloud {
  opacity: 0;
}

#rishi-stars {
  opacity: 0;
}

.switch-rishi__input:checked + svg #rishi-stars {
  opacity: 1;
}
.switch-rishi svg { display: block; width: 100%; }
.switch-rishi__input:focus-visible + svg { outline: 3px solid #2d8cf0; outline-offset: 4px; border-radius: 22px; }

/* From Uiverse.io by JkHuger - https://uiverse.io/JkHuger/old-falcon-20
   MIT License, Copyright (c) JkHuger (JkHuger) */
.switch-jk { --bg: #16344c; --primary: #2d8cf0; --primaryT: #68778455; --transDur: .3s; position: relative; font-size: 16px; cursor: pointer; }
.switch-jk {
  display: flex;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
}

.switch-jk__fill,
.switch-jk__icon {
  transition: 0.3s;
}

.switch-jk__fill {
  background-color: var(--bg);
  display: block;
  mix-blend-mode: difference;
  position: absolute;
  inset: 0;
  height: 100%;
  transform: translateX(-100%);
}

.switch-jk__icon,
.switch-jk__toggle {
  z-index: 1;
}

.switch-jk__icon,
.switch-jk__icon-part {
  position: absolute;
}

.switch-jk__icon {
  display: block;
  top: 0.5em;
  left: 0.5em;
  width: 1.5em;
  height: 1.5em;
}

.switch-jk__icon-part {
  border-radius: 50%;
  box-shadow: 0.4em -0.4em 0 0.5em hsl(0,0%,100%) inset;
  top: calc(50% - 0.5em);
  left: calc(50% - 0.5em);
  width: 1em;
  height: 1em;
  transition: box-shadow var(--transDur) ease-in-out,
		opacity var(--transDur) ease-in-out,
		transform var(--transDur) ease-in-out;
  transform: scale(0.5);
}

.switch-jk__icon-part ~ .switch-jk__icon-part {
  background-color: hsl(0,0%,100%);
  border-radius: 0.05em;
  top: 50%;
  left: calc(50% - 0.05em);
  transform: rotate(0deg) translateY(0.5em);
  transform-origin: 50% 0;
  width: 0.1em;
  height: 0.2em;
}

.switch-jk__icon-part:nth-child(3) {
  transform: rotate(45deg) translateY(0.45em);
}

.switch-jk__icon-part:nth-child(4) {
  transform: rotate(90deg) translateY(0.45em);
}

.switch-jk__icon-part:nth-child(5) {
  transform: rotate(135deg) translateY(0.45em);
}

.switch-jk__icon-part:nth-child(6) {
  transform: rotate(180deg) translateY(0.45em);
}

.switch-jk__icon-part:nth-child(7) {
  transform: rotate(225deg) translateY(0.45em);
}

.switch-jk__icon-part:nth-child(8) {
  transform: rotate(270deg) translateY(0.5em);
}

.switch-jk__icon-part:nth-child(9) {
  transform: rotate(315deg) translateY(0.5em);
}

.switch-jk__label,
.switch-jk__toggle,
.switch-jk__toggle-wrap {
  position: relative;
}

.switch-jk__toggle,
.switch-jk__toggle:before {
  display: block;
}

.switch-jk__toggle {
  background-color: hsl(48,90%,85%);
  border-radius: 25% / 50%;
  box-shadow: 0 0 0 0.125em var(--primaryT);
  padding: 0.25em;
  width: 6em;
  height: 3em;
  -webkit-appearance: none;
  appearance: none;
  transition: background-color var(--transDur) ease-in-out,
		box-shadow 0.15s ease-in-out,
		transform var(--transDur) ease-in-out;
}

.switch-jk__toggle:before {
  background-color: hsl(48,90%,55%);
  border-radius: 50%;
  content: "";
  width: 2.5em;
  height: 2.5em;
  transition: 0.3s;
}

.switch-jk__toggle:focus {
  box-shadow: 0 0 0 0.125em var(--primary);
  outline: transparent;
}

.switch-jk__toggle:checked {
  background-color: hsl(198,90%,15%);
}

.switch-jk__toggle:checked:before,
.switch-jk__toggle:checked ~ .switch-jk__icon {
  transform: translateX(3em);
}

.switch-jk__toggle:checked:before {
  background-color: hsl(198,90%,55%);
}

.switch-jk__toggle:checked ~ .switch-jk__fill {
  transform: translateX(0);
}

.switch-jk__toggle:checked ~ .switch-jk__icon .switch-jk__icon-part:nth-child(1) {
  box-shadow: 0.2em -0.2em 0 0.2em hsl(0,0%,100%) inset;
  transform: scale(1);
  top: 0.2em;
  left: -0.2em;
}

.switch-jk__toggle:checked ~ .switch-jk__icon .switch-jk__icon-part ~ .switch-jk__icon-part {
  opacity: 0;
}

.switch-jk__toggle:checked ~ .switch-jk__icon .switch-jk__icon-part:nth-child(2) {
  transform: rotate(45deg) translateY(0.8em);
}

.switch-jk__toggle:checked ~ .switch-jk__icon .switch-jk__icon-part:nth-child(3) {
  transform: rotate(90deg) translateY(0.8em);
}

.switch-jk__toggle:checked ~ .switch-jk__icon .switch-jk__icon-part:nth-child(4) {
  transform: rotate(135deg) translateY(0.8em);
}

.switch-jk__toggle:checked ~ .switch-jk__icon .switch-jk__icon-part:nth-child(5) {
  transform: rotate(180deg) translateY(0.8em);
}

.switch-jk__toggle:checked ~ .switch-jk__icon .switch-jk__icon-part:nth-child(6) {
  transform: rotate(225deg) translateY(0.8em);
}

.switch-jk__toggle:checked ~ .switch-jk__icon .switch-jk__icon-part:nth-child(7) {
  transform: rotate(270deg) translateY(0.8em);
}

.switch-jk__toggle:checked ~ .switch-jk__icon .switch-jk__icon-part:nth-child(8) {
  transform: rotate(315deg) translateY(0.8em);
}

.switch-jk__toggle:checked ~ .switch-jk__icon .switch-jk__icon-part:nth-child(9) {
  transform: rotate(360deg) translateY(0.8em);
}

.switch-jk__toggle-wrap {
  margin: 0 0.75em;
}

@supports selector(:focus-visible) {
  .switch-jk__toggle:focus {
    box-shadow: 0 0 0 0.125em var(--primaryT);
  }

  .switch-jk__toggle:focus-visible {
    box-shadow: 0 0 0 0.125em var(--primary);
  }
}
.switch-jk__toggle { cursor: pointer; }
.switch-jk__fill { display: none; }

/* From Uiverse.io by andrew-demchenk0 - https://uiverse.io/andrew-demchenk0/empty-penguin-100
   MIT License, Copyright (c) andrew-demchenk0 (A) */
.switch-andrew { --input-focus: #2d8cf0; --bg-color: #fff; --bg-color-alt: #666; --main-color: #323232; --input-out-of-focus: #ccc; position: relative; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 30px; width: 70px; height: 36px; transform: translateX(calc(50% - 10px)); cursor: pointer; }
.switch-andrew__toggle { position: absolute; inset: 0; width: 100%; height: 100%; margin: 0; opacity: 0; cursor: pointer; z-index: 2; }
.switch-andrew__slider { box-sizing: border-box; border-radius: 100px; border: 2px solid var(--main-color); box-shadow: 4px 4px var(--main-color); position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: var(--input-out-of-focus); transition: .3s; }
.switch-andrew__slider::before { content: "off"; box-sizing: border-box; height: 30px; width: 30px; position: absolute; left: 2px; bottom: 1px; border: 2px solid var(--main-color); border-radius: 100px; background-color: var(--bg-color); color: var(--main-color); font: 600 14px/25px Arial, sans-serif; text-align: center; transition: .3s; }
.switch-andrew__toggle:checked + .switch-andrew__slider { background-color: var(--input-focus); transform: translateX(-32px); }
.switch-andrew__toggle:checked + .switch-andrew__slider::before { content: "on"; transform: translateX(32px); }
.switch-andrew__toggle:focus-visible + .switch-andrew__slider { outline: 3px solid #2d8cf0; outline-offset: 6px; }

/* From Uiverse.io by Madflows - https://uiverse.io/Madflows/fresh-fireant-15
   MIT License, Copyright (c) Madflows (Folarin Lawal) */
.switch-madflows { position: relative; width: 100px; height: 50px; --light: #d8dbe0; --dark: #28292c; --link: rgb(27,129,112); --link-hover: rgb(24,94,82); }
.switch-madflows__label { position: absolute; width: 100%; height: 50px; background-color: var(--dark); border-radius: 25px; cursor: pointer; border: 3px solid var(--dark); }
.switch-madflows__checkbox { position: absolute; inset: 0; width: 100%; height: 100%; margin: 0; opacity: 0; cursor: pointer; z-index: 2; }
.switch-madflows__slider { position: absolute; width: 100%; height: 100%; border-radius: 25px; transition: .3s; }
.switch-madflows__checkbox:checked ~ .switch-madflows__slider { background-color: var(--light); }
.switch-madflows__slider::before { content: ""; position: absolute; top: 10px; left: 10px; width: 25px; height: 25px; border-radius: 50%; box-shadow: inset 12px -4px 0 0 var(--light); background-color: var(--dark); transition: .3s; }
.switch-madflows__checkbox:checked ~ .switch-madflows__slider::before { transform: translateX(50px); background-color: var(--dark); box-shadow: none; }
.switch-madflows__checkbox:focus-visible ~ .switch-madflows__slider { outline: 3px solid #2d8cf0; outline-offset: 6px; }

  `;

  render() {
    const config = this.config || {};
    const stateLabel = this.on ? (config.on_label || 'بعد') : (config.off_label || 'قبل');
    const stateText = this.on ? (config.on_text || 'تجربة جديدة تناسبك.') : (config.off_text || 'شاهد الفرق بالضغط على المفتاح.');
    const link = this.safeLink;
    return html`
      <section class="panel" dir="rtl" aria-label=${config.title || 'مقارنة تفاعلية'}>
        <h2>${config.title || 'شاهد الفرق'}</h2>
        <div class="switch-wrap">${this.renderSwitch()}</div>
        <div class="copy" aria-live="polite"><strong>${stateLabel}</strong><p>${stateText}</p></div>
        ${link ? html`<a class="link" href=${link}>${config.link_text || 'اكتشف المزيد'}</a>` : ''}
      </section>`;
  }
}
