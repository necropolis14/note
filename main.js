const section = document.querySelector("section");
const fieldset = document.querySelector("fieldset");
const tags = [
    {id: 1, name: "Идеи"},
    {id: 2, name: "Личное"},
    {id: 3, name: "Работа"},
    {id: 4, name: "Список покупок"}
];
const notes = [
    {id: 1, title: "Сдать отчет", date: "23 Июля 2024", tag: 3},
    {id: 2, title: "Сдать отчет", date: "23 Июля 2024", tag: 1},
    {id: 3, title: "Сдать отчет", date: "23 Июля 2024", tag: 1}
];

function genTagHtml(itemObj) {
    const tag = document.createElement("div");
    tag.classList.add("tag");
    tag.innerText = itemObj.name;
    tag.addEventListener("click", () => {
        console.log("click", itemObj.id);
    });
    return tag;
}

function renderTags() {
    for (let tag of tags) {
        const tagHTML = generateTagHtml(tag);
        fieldset.appendChild(tagHTML);
    }
}

// function genNotes() {
//     for (let note of notes) {
//         const body = document.createElement("div");
//         const name = createElement("header").innerText(note.title);
//         const innerDiv = createElement("div");
//         const date = createElement("span").innerText(note.date);
//         const tag = createElement("span").innerText();
//     }
// }

// function render() {
//     genTags();
//     genNotes();
// }

function main() {
    renderTags()
}

main();