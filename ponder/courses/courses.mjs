

// courses.js
export const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    section: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    showSection: function(section) {
        console.log("showSection method ran")
    },
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.section.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.section[sectionIndex].enrolled++;
          renderSections(this.section);
        }
    }
};


function sectionTemplate(section) {
    return `
    <tr><td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}
  
function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}
  

renderSections(aCourse.section);
