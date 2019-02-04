import { html, LitElement } from 'lit-element'


export default class DashbirdGraph extends LitElement {
  static get properties() {
    return {
      autoPlay: {type: Boolean}
    }
  }
  constructor() {
    super()
  }
  dependenciesMet () {
    if (typeof TweenMax !== 'undefined') {
      return true
    } else {
      console.error(`Dependancy 'TweenMax' not found for DashbirdGraph`)
      return false
    }
  }
  firstUpdated () {
    if (this.dependenciesMet()) {
      const text = this.shadowRoot.querySelector('text')
      if (this.autoPlay) {
        TweenMax.to(text, 1, {y: '-=100%', repeat: -1, yoyo: true})
      }
    }
  }
  play () {
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