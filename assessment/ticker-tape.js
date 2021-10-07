/* 
Taken from a tutorial from Mitchell Hudson on youtube
link: https://www.youtube.com/watch?v=uk1h0kCClKU&list=PLoN_ejT35AEhF_M9vBuZgW0E4PiDb19oX&index=56
*/
class TickerTape extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._text = document.createElement('div')
    this._shadowRoot.appendChild(this._text)
    this._text.innerHTML = this.innerHTML

  }

  connectedCallback() {
    console.log("connected via ticker-tape.js")
    // When the component is added to the DOM
    this._timer = setInterval(() => {
      let str = this._text.innerHTML
      str = str.slice(1) + str[0]
      this._text.innerHTML = str
    }, 300)

  }

  disconnectedCallback() {
    // When the component is removed to the DOM   
    clearInterval(this._timer)
  }

}

customElements.define('ticker-tape', TickerTape)
