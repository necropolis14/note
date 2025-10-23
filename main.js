const section = document.querySelector("section");
const fieldset = document.querySelector("fieldset");
let currentTag = 1;
const tags = [
    {id: 1, name: "Все"},
    {id: 2, name: "Идеи"},
    {id: 3, name: "Личное"},
    {id: 4, name: "Работа"},
    {id: 5, name: "Список покупок"}
];
const notes = [
    {id: 1, title: "Сдать отчет", date: "23 Июля 2024", tag: 4},
    {id: 2, title: "Сдать отчет", date: "23 Июля 2024", tag: 2},
    {id: 3, title: "Сдать отчет", date: "23 Июля 2024", tag: 2}
];

function genTag(tagObj) {
    const tag = document.createElement("div");
    const tagRadio = document.createElement("input");
    const tagLabel = document.createElement("label");

    tagRadio.type = "radio";
    tagRadio.name = "tag";
    if (tagObj.id === 1) tagRadio.checked = true;
    tagRadio.addEventListener("click", () => {
        currentTag = tagObj.id;
    });
    tagLabel.textContent = tagObj.name;

    tag.appendChild(tagRadio);
    tag.appendChild(tagLabel);
    return tag;
}

function genNote(noteObj) {
    const note = document.createElement("div");
    const noteHeader = document.createElement("header");
    const noteDiv = document.createElement("div");
    const noteDate = document.createElement("span");
    const noteTag = document.createElement("span");

    noteHeader.textContent = noteObj.title;
    noteDate.textContent = noteObj.date;
    noteTag.textContent = noteObj.tag;

    note.appendChild(noteHeader);
    noteDiv.appendChild(noteDate);
    noteDiv.appendChild(noteTag);
    note.appendChild(noteDiv);
    return note;
}

function renderTags() {
    for (const tag of tags) {
        const tagHTML = genTag(tag);
        fieldset.appendChild(tagHTML);
    }
}

function renderNotes() {
    for (const note of notes) {
        const noteHTML = genNote(note);
        section.appendChild(noteHTML);
    }
}

function main() {
    renderTags();
    renderNotes();
}

main();