const search = document.querySelector("#search");
const fieldset = document.querySelector("fieldset");
const section = document.querySelector("section");
const createButton = document.querySelector("#createButton");
const createDialog = document.querySelector("#createDialog");
const editDialog = document.querySelector("#editDialog");
let currentTag = 0;

const tags = [
  {id: 0, name: "Все"},
  {id: 1, name: "Идеи"},
  {id: 2, name: "Личное"},
  {id: 3, name: "Работа"},
  {id: 4, name: "Список покупок"}
];
const notes = [
  {id: 1, title: "Заметка 1", date: new Date().toDateString(), tag: 1},
  {id: 2, title: "Заметка 2", date: new Date().toDateString(), tag: 2},
  {id: 3, title: "Заметка 3", date: new Date().toDateString(), tag: 3},
  {id: 4, title: "Заметка 4", date: new Date().toDateString(), tag: 4}
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
  note.addEventListener("click", () => editDialog.showModal());
  return note;
}

function genSelect() {
  const select = document.querySelectorAll("select");
  for (let i = 0; i < select.length; i++) {
    for (const tag of tags) {
      if (tag.id === 0) continue;
      const option = document.createElement("option");
      option.textContent = tag.name;
      select[i].add(option);
    }
  }
}

function renderTags() {
  for (const tag of tags) {
    const tagHTML = genTag(tag);
    fieldset.appendChild(tagHTML);
  }
  genSelect();
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
  createButton.addEventListener("click", () => createDialog.showModal());
  search.addEventListener("keyup", renderNotes);
}

main();
