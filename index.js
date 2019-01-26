import { html, LitElement } from 'lit-element'

export default class DashbirdGraph extends LitElement {
  constructor() {
    super()
  }
  play () {
    console.log('play!')
  }
  render () {
    return html`
      <style>
        :host {
          all: initial;
          font-family: sans-serif;
          width: 500px;
          height: 500px;
          display: block;
        }
        svg {
          width: 100%;
          height: 100%;
        }
        circle {
          fill: none;
          stroke: rgba(255, 255, 255, 0.4);
        }
        text {
          fill: white;
          font-weight: 200;
          font-size: 28px;
        }
      </style>
      <svg width="500" height="500" viewBox="0 0 500 500">
        <text x="250" y="255" text-anchor="middle">Graph thing</text>
        <circle cx="250" cy="250" r="150" />
      </svg>
    `
  }
}

customElements.define('dashbird-graph', DashbirdGraph)