import { Window } from 'happy-dom';

const window = new Window({ url: 'https://example.com/' });
for (const name of ['window', 'document', 'HTMLElement', 'Element', 'Node', 'Event', 'CustomEvent', 'ShadowRoot', 'customElements', 'Document', 'CSSStyleSheet']) {
  globalThis[name] = name === 'window' ? window : window[name];
}

const { LitElement } = await import('lit');
LitElement.registerSallaComponent = function (tag) { customElements.define(tag, this); };
await import('./dist/interactive-switch.js');

for (const variant of ['rishi', 'jk', 'andrew', 'madflows']) {
  const component = document.createElement('salla-interactive-switch');
  component.config = { style: variant, title: 'اختبار', off_text: 'قبل التبديل', on_text: 'بعد التبديل' };
  document.body.append(component);
  await component.updateComplete;
  const input = component.shadowRoot.querySelector('input[type="checkbox"]');
  if (!input || !component.shadowRoot.textContent.includes('قبل التبديل')) throw new Error(`${variant}: initial render failed`);
  input.click();
  await component.updateComplete;
  if (!input.checked || !component.shadowRoot.textContent.includes('بعد التبديل')) throw new Error(`${variant}: on transition failed`);
  input.click();
  await component.updateComplete;
  if (input.checked || !component.shadowRoot.textContent.includes('قبل التبديل')) throw new Error(`${variant}: off transition failed`);
  component.remove();
  console.log(`${variant}: on/off passed`);
}
