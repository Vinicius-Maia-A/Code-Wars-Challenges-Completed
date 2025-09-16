//Explanation in images

function gradingStudents(grades) {
    return grades.map((grade) => {
        if(grade < 38) return grade;
        if(grade % 5 > 2) return grade + 5 - (grade%5);
        return grade;
    })
}