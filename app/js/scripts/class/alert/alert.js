class Alert extends Tools {
    constructor({elem, text}) {
        super(elem);
        this.text = text;
    }
    render() {
        this.alert = this.createElement();
        this.alert.className = "toast";
        this.alert.setAttribute("aria-live", "assertive");
        this.alert.setAttribute("aria-atomic","true");
        this.alert.setAttribute("data-bs-autohide", "false");
        this.alert.append(
            this.renderHeader(),
            this.renderBody()
        )
        return this.alert;
    }
    renderContainer(){
        const container = document.createElement("div");
        container.setAttribute("aria-live","polite");
        container.setAttribute("aria-atomic","true");
        container.setAttribute("style", "position: relative; min-height: 200px;");
        const container1 = document.createElement("div");
        container1.setAttribute("style", "position: absolute; top: 80px; right: 20px;");
        // container.append(container1);
        container1.append(
            this.render()
        )
        return container1
    }
    renderHeader(){
        const header = document.createElement("div");
        header.className = "toast-header";
        header.append(
            this.renderHeaderLogo(),
            this.renderHeaderTitle(),
            this.renderHeaderButton()
        )
        return header;
    }
    renderHeaderLogo(){
        const image = document.createElement("img");
        image.className = "rounded me-2";
        return image;
    }
    renderHeaderTitle(){
        const title = document.createElement("strong");
        title.className = "me-auto";
        title.textContent = "Уведомление";
        return title
    }
    renderHeaderButton(){
        const button = document.createElement("button");
        button.className = "btn-close btn-alert";
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-dismiss", "toast");
        button.setAttribute("aria-label", "Close");
        return button
    }
    renderBody(){
        const body = document.createElement("div");
        body.className = "toast-body";
        body.textContent = this.text;
        return body;
    }
}