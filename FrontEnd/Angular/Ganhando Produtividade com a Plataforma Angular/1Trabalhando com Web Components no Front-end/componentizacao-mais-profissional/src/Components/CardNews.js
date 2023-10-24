class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    //shadow.innerHTML = "<h1>Helooooo</h1>";
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.append(autor, linkTitle, newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "../assets/icon-profile.png";
    newsImage.alt = "Foto da noticia";

    cardRight.append(newsImage);

    componentRoot.append(cardLeft, cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `

          .card{
            border-radius:8px;
            display:flex;
            justify-content: space-between;
            padding: 0 20px;
            width:100vw;
            max-width:800px;
            height: 150px;
            margin:20px auto;

            -webkit-box-shadow: 2px 0px 32px -15px rgba(0,0,0,0.75);
            -moz-box-shadow: 2px 0px 32px -15px rgba(0,0,0,0.75);
            box-shadow: 2px 0px 32px -15px rgba(0,0,0,0.75);
          }

          .card__left{
            display:flex;
            flex-direction:column;
            justify-content: space-between;
            align-items:center;
          }

          .card__left span{
            font-weight:bold;
            color:grey;
          }


          .card__right img{
            width:150px;
            height:150px;
          }
    
    
    `;
    return style;
  }
}

customElements.define("card-news", CardNews);
