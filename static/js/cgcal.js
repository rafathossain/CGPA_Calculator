var oldInput = false;
var courseIndex = 1;
var creditXgpa = 0;
var totalCredit = 0;

function toggleOldInput() {
    if (oldInput) {
        $("#creditEarned").val("");
        $("#currentCGPA").val("");
        calculate();
        $("#oldInput").attr('hidden', true);
        oldInput = false;
    } else {
        $("#oldInput").removeAttr('hidden');
        oldInput = true;
    }
}

function addCourse() {
    var courseBlock = '<div class="row" id="course' + (courseIndex + 1) + '">' + $("#dummyBlock").html() + '</div>';
    $("#course" + courseIndex + " .hover-remove").attr('onclick', 'removeCourse(\'' + courseIndex + '\')')
    $("#course" + courseIndex + " .hover-remove").removeAttr('hidden');
    $("#course" + courseIndex + " .hover-add").attr('hidden', true);
    $("#course" + courseIndex).after(courseBlock);
    courseIndex += 1;
    calculate();
}

function removeCourse(course_id) {
    $("#course" + course_id).remove();
    calculate();
}

function calculate() {
    creditXgpa = 0;
    totalCredit = 0;
    $("div[id^=course]").each(function () {
        var credit = $("#" + this.id + " #credit").val();
        credit = parseFloat(credit);
        if (isNaN(credit)) {
            credit = 0;
        }

        var gpa = $("#" + this.id + " #gpa").val();
        gpa = parseFloat(gpa);
        if (isNaN(gpa)) {
            gpa = 0;
        }

        creditXgpa += (credit * gpa);
        totalCredit += credit;
    });
    if (!isNaN(parseFloat($("#creditEarned").val())) && !isNaN(parseFloat($("#currentCGPA").val()))) {
        creditXgpa += (parseFloat($("#creditEarned").val()) * parseFloat($("#currentCGPA").val()));
        totalCredit += parseFloat($("#creditEarned").val());
    }
    var cgpa_calc = creditXgpa / totalCredit;
    if (isNaN(cgpa_calc)) {
        cgpa_calc = 0;
    }
    $("#calc_credit").html(totalCredit.toFixed(1));
    $("#calc_cgpa").html(cgpa_calc.toFixed(2));
}