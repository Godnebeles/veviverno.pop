$(document).ready(function () {
    $("#Calc-ResultButton").click(function () {
                    var AnaliseName = $("#Calc-Name").val();
                    var AnaliseNumber = $("#Calc-Number").val();
                    var AnaliseEmail = $("#Calc-Email").val();

                    $.post('/send.php', {
                        "Calc-Name": AnaliseName,
                        'Calc-Number': AnaliseNumber,
                        "Calc-Email": AnaliseEmail,
                        'hmtl_employee': '-',
                        'hmtl_operation': '-',
                        'hmtl_tax': '-',                  
                        'hmtl_tarif': 'Презентация'
                    }).done(function (data) {
                        console.log("Data sended: " + data);
                       /* $('#wf-form-ModalContacts').hide().next().show(); */
                        setTimeout(window.location.href = "/presentation.html", 3000);
                        
                    });
                });
})