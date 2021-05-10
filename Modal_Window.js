/*creating an object*/

const ModalWindow = {
    //The init initialises the whole processs of creating the modal window
    init() {
        document.body.addEventListener("click", (e) => {
            if (e.target.classList.contains("modal__close")) {
                this.classModal(e.target);
            }
        });
    },
    /* This generates the html for a new window. Generates the html structure of our modal*/

    getHtmlTemplate(modalOptions) {
        return `
        <div class="modal__overlay">
        <div class="modal__window">
            <div class="modal__titlebar">
            <span class="modal__title">${modalOptions.title}</span>
            <button class="modal__close material-icons">close</button>
            </div>
            <div class="modal__content">${modalOptions.content}</div>

        </div>

    </div>

`;
    },

    openModal(modalOptions = {}) {
        modalOptions = Object.assign({
                title: "Modal Title",
                content: "Modal Content",
            },
            modalOptions
        );

        // inserting our modal window after the opening tag of our html document
        const modalTemplate = this.getHtmlTemplate(modalOptions);
        document.body.insertAdjacentHTML("afterbegin", modalTemplate);
    },

    classModal(closeButton) {
        const modalOverlay = closeButton.parentElement.parentElement.parentElement;
        document.body.removeChild(modalOverlay);
    },
};

/* When the page loads up we want to call the modal window.init
Means once document object has been loaded by your web BhxBrowser, we call the initialised modal window*/

document.addEventListener("DOMContentLoaded", () => ModalWindow.init());