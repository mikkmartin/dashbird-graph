import { html, LitElement } from 'lit-element'
import * as d3 from 'd3'

export default class DashbirdGraph extends LitElement {
  static get properties() {
    return {
      autoPlay: {type: Boolean}
    }
  }

  constructor() {
    super()
    this.points = this.generatePoints(100)
    this.points = this.generateNoise(this.points)
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
      this.modifyDom()
      if (this.autoPlay) this.animate()
    }
  }

  play () {
    this.animate()
  }

  animate () {
    //const text = this.shadowRoot.querySelector('#test')
    //TweenMax.to(text, 10, {transformOrigin: '50% 50%', rotation: 360, repeat: -1, ease: Linear.easeNone})
  }

  generatePoints (amount) {
    var angle = (2 * Math.PI) / (amount - 1);
    var points = [];
    var i = 0;
    for(var a = 0; a < (2*Math.PI); a += angle){
      i++;
      points.push({
        x: Math.cos(a),
        y: Math.sin(a)
      })
    }
    return points;
  }

  generateNoise (points) {
    return [-0.1, -0.049274907760128196, -0.049782352264822936, -0.0756425588905513, -0.1131543937257958, -0.11475328424842206, -0.0708672544488951, -0.06612615699007521, -0.0638032430217696, -0.03853498671854331, -0.05651635845687811, -0.10643781392934845, -0.1217147687760734, -0.1097721342052774, -0.09034471428062574, -0.042494512819909964, -0.028505429085205244, -0.06622112733786448, -0.06394065574756705, -0.043732492947621625, -0.08605055806782821, -0.14426643869300915, -0.12829857417843943, -0.11914790884345251, -0.17091202201899297, -0.18241551091253097, -0.1392379416020585, -0.1131283590032049, -0.10911395420026467, -0.13340730314337063, -0.18358440928670833, -0.18727364220168688, -0.16394002734600088, -0.1763506531021814, -0.18671597632402936, -0.1980013755239496, -0.18456313692986726, -0.1379357703423542, -0.11668166340956283, -0.1227697893790105, -0.12288306772007879, -0.11701933970928466, -0.09531820749816851, -0.07207253088326658, -0.09770045688887119, -0.1329793991895251, -0.11034495257145897, -0.10239326592131813, -0.13180577568813936, -0.1472706045730472, -0.14547559734906676, -0.11135928365456042, -0.0830516617352018, -0.12235201144707462, -0.14901926432611867, -0.10148529929785344, -0.05786078471844112, -0.0803978974105426, -0.12049132222982561, -0.1278307667204855, -0.11545784746150942, -0.09572582475789067, -0.07174504349995443, -0.07187948149866488, -0.07643415010963242, -0.06073436887924511, -0.06141089761825546, -0.07700897805451264, -0.07050017949391893, -0.08435982321575708, -0.14262621599390732, -0.17098322989138218, -0.15024978982078052, -0.1648255060685011, -0.20045497793303316, -0.19063689811754841, -0.13642020007174394, -0.10346593022234944, -0.1353770086070227, -0.1942898741837921, -0.17532030618323208, -0.36018805734841164, -0.6363977135637311, -0.7383738619663747, -0.42846998302197137, 0.1877350089628457, 0.18946907210076416, -0.062073352973826226, -0.006377550659282499, -0.004620854532425958, 0.33067796880270695, 0.11704561769609476, -0.5701701157107958, -0.8865207134020814, -0.7074239813025097, -0.2361191062747524, -0.14117609586444282, -0.1288945861463507, -0.11291882422256166, -0.11669882329361742]
      .map((noise, i) => ({
        x: points[i].x * -noise * 100 + points[i].x * 150,
        y: points[i].y * -noise * 100 + points[i].y * 150
      }))
  }

  modifyDom () {
    const svg = d3.select(this.shadowRoot.querySelector('svg')),
      w = +svg.attr('width'),
      h = +svg.attr('height')

    const clip = svg.insert('g', ':first-child')
      //.attr('clip-path', 'url(#cut-off-bottom)')
      .append('g')
      .attr('class', 'noise-line')
      .attr('transform', `translate(${w*.5}, ${h*.5})`)

    var line = d3.line()
      .curve(d3.curveCatmullRomClosed)
      .x(d => d.x)
      .y(d => d.y)

    var p = clip.append('path')
      .datum(this.points)
      .attr('d', line)
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
        .noise-line {
          stroke: red;
        }
      </style>
      <svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="cut-off-bottom">
            <path d="M399.536 248.879L399.39.499c-91.423-.012-91.208-.012.646.001C491.889.513 625.21.346 800 0v500c-533.333 91.53-800 91.363-800-.5V0l207 .5 192.536 248.379z" fill="#979797" fill-rule="nonzero"/>
          </clipPath>
        </defs>
        <!-- graphics n shit -->
        <g fill="none" fill-rule="evenodd"><g transform="translate(82 82)"><circle stroke="#FFF" opacity=".2" cx="168" cy="168" r="100"/><circle stroke="#FFF" cx="168" cy="168" r="150"/><g transform="translate(150 128)"><path fill="#FFF" d="M0 56.141l15.647-29.128-1.868-5.127H8.372V15h9.94l12.096 33.117 5.245-2.105L38 52.453 26.605 57l-7.898-21.63L7.565 56.14z"/><rect fill="red" x="28" width="23" height="23" rx="11.5"/><text font-family="HelveticaNeue-Bold, Helvetica Neue" font-size="17" font-weight="bold" fill="#FFF"><tspan x="34.274" y="17">4</tspan></text></g></g><text font-family="RenoMono-Regular, Reno Mono" font-size="41" letter-spacing="-.976" fill="#FFF"><tspan x="71.957" y="68">12,412</tspan></text><text opacity=".5" font-family="RenoMono-Regular, Reno Mono" font-size="12" letter-spacing=".112" fill="#FFF"><tspan x="91.488" y="31">Total invocations</tspan></text></g>
        <!-- other shit -->

      </svg>
    `
  }
}

customElements.define('dashbird-graph', DashbirdGraph)