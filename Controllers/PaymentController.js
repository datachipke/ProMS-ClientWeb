PaymentController = {
    makePayment : function (view, payLoad){
        viewText = $(view).html()
        $(view).html('Posting...')
        xit.request.post(null, payLoad, endpoints.payment.makepayment).then(function (response){
            response = JSON.parse(response)
            if(response.status_code == 1){
                xit.storage.saveItem('responseModel', JSON.stringify(response.data))
                xit.ui.openmodal('POST', null, null, 'Views/Payment/Response.html', '#modalL', true)
                $(view).html(viewText)
            }else { 
                Observer.displayErrors(response)
            }
        }).catch(function (error){
            alert(error)
        })
    },
    fetch : function(filterModel){
        $('#tPayments').append(xit.ui.processPlaceHolder)
        xit.request.get(null, filterModel, endpoints.payment.fetch).then(function (response){
            response = JSON.parse(response)
            if(response.status_code == 1){
                $("#tPayments").find('img').each(function() {$(this).remove()})
                PaymentController.displayLV(response.data)
            }else { 
                Observer.displayErrors(response)
            }
        }).catch(function (error){
            alert(error)
        })
    },
    displayLV :function (paymentModels){
        var htmlContent = ''
        paymentModels.forEach(paymentModel => {
            htmlContent += '<tr id="' + paymentModel.id + '" style="cursor: pointer;" onclick="paymentController.open(this)">'
            htmlContent += '<td>' + paymentModel.id + '</td>'
            htmlContent += '<td>' + paymentModel.amount + '</td>'
            htmlContent += '<td>' + paymentModel.docNo + '</td>'
            htmlContent += '<td>' + paymentModel.timeStamp + '</td>'
            htmlContent += '<td>' + paymentModel.transactionNo + '</td>'
            htmlContent += '</tr>'
        })
        $('#tbPayments').html(htmlContent)
    }
}