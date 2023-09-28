function AssessmentFormData() {
    results.Email = $('#email').val();
    results.FirstName = $('#first-name').val();
    results.LastName = $('#last-name').val();
    var data1 = {
        FirstName: $('#first-name').val(),
        LastName: $('#last-name').val(),
        Email: $('#email').val(),
        Companyname: $("#company-name").val(),
        MobileNo: $("#phone-number").val(),
        pdfhtml: $('#pdfhtml').val(),
        pdfjson: htmlEncode(JSON.stringify(results))
    };
    $.ajax({
        url: "/api/AssessmentFormData",
        data: data1,
        type: "POST",
        success: function (result) {
            const lastInfographic = $('.analysis-step .infographic-results-wrapper');
            assessmentTool.addClass('loading');
            lastInfographic.remove();
            //results.Email = data1.Email;
            //results.FirstName = data1.FirstName;
            //results.LastName = data1.LastName;
            // generate results
            generateResults(assessmentToolResults, results);
            setTimeout(() => {

                let scrollOffset = assessmentTool.offset().top;
                const header = document.querySelector('.header_content');
                if (header) {
                    scrollOffset -= header.clientHeight;
                }

                $('html, body').animate({
                    scrollTop: scrollOffset
                }, {
                    duration: 600,
                    easing: 'swing'
                });

                assessmentTool.removeClass('loading');
                animateStep(assessmentTool.children(), 'next', 1, 0);
            }, 300);
        },
        error: function () {
            alert("Opps!!! something went wrong !");
        }
    });
}