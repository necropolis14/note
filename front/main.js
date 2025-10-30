const fieldset = document.querySelector("fieldset");
const search = document.querySelector("input");
const section = document.querySelector("section");
let currentTag = 0;
const tags = [
    {id: 0, name: "Все"},
    {id: 1, name: "Идеи"},
    {id: 2, name: "Личное"},
    {id: 3, name: "Работа"},
    {id: 4, name: "Список покупок"}
];
const notes = [
    {id: 1, title: "Сдать отчет", date: new Date().toDateString(), tag: 3},
    {id: 2, title: "Сдать отчет", date: new Date().toDateString(), tag: 1},
    {id: 3, title: "Сдать отчет", date: new Date().toDateString(), tag: 1}
];

function genTag(tagObj) {
    const tag = document.createElement("div");
    const tagRadio = document.createElement("input");
    const tagLabel = document.createElement("label");

    tagRadio.type = "radio";
    tagRadio.name = "tag";
    if (tagObj.id === 0) tagRadio.checked = true;
    tagRadio.addEventListener("click", () => {
        currentTag = tagObj.id;
        renderNotes();
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
    const tagObj = tags.find(tagObj => tagObj.id === noteObj.tag);
    noteTag.textContent = tagObj.name;

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
    section.innerHTML = '';
    let notesFiltered = notes;
    if (currentTag !== 0) {
        notesFiltered = notes.filter(note => note.tag === currentTag);
    }
    if (search.value?.length > 0) {
        notesFiltered = notesFiltered.filter(note => note.title.includes(search.value));
    }
    for (const note of notesFiltered) {
        const tagHTML = genNote(note);
        section.appendChild(tagHTML);
    }
}

function main() {
    renderTags();
    renderNotes();
    search.addEventListener("keyup", renderNotes);
}

main();