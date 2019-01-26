import { html, LitElement } from 'lit-element'

export class Graph extends LitElement {
  constructor() {
    super()
  }
  play () {
    console.log('play')
  }
  _render () {
    return html`
      <style>
        :host {
          all: initial;
          font-family: sans-serif;
          width: 200px;
          height: 200px;
          display: block;
          contain: content;
        }
        svg {
          width: 100%;
          height: 100%;
        }
      </style>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect x="0" y="0" width="200" height="200" fill="rgba(0,255,0,0.1)" />
        <text x="20" y="35">Hello world</text>
      </svg>
    `
  }
}