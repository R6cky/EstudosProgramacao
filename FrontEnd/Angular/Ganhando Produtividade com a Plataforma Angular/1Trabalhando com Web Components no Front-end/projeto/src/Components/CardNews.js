class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `<h1>Hello World</h1>
                        <h3>The ms lee go to the beach now?</h3>
                        `;
  }
}

customElements.define("card-news", CardNews);
 