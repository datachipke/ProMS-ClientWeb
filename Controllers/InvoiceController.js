InvoiceController = {
    getinvoices : function (){
        Observer.status(Observer.states.LOADING, '#panelinvoices')
        $('#filters').fadeOut('fast')
        xit.request.get(null, null, endpoints.invoice.fetch).then(function (response){
            response = JSON.parse(response)
            if(response.status_code == 1){
                xit.storage.saveItem('invoiceModels', JSON.stringify(response.data))
                xit.ui.openview('GET', null, null, 'Views/invoice/listview.html', '#panelinvoices', false)
                if(response.pagination != null){
                    xit.storage.saveItem('pagination', JSON.stringify(response.pagination))
                    $('#filters').fadeIn('fast')
                    $('#spRange').html(response.pagination.range)
                }
            }else{
                Observer.displayErrors(response)
            }
        }).catch(function (error){
            console.log(error)
        })
    },
    displayinvoicesListView :function (invoiceModels){
        var htmlContent = ''
        invoiceModels.forEach(invoiceModel => {
            htmlContent += '<tr>'
            htmlContent += '<td>' + invoiceModel.id + '</td>'
            htmlContent += '<td>' + invoiceModel.firstName + ' ' + invoiceModel.lastName + '</td>'
            htmlContent += '<td>' + invoiceModel.idNo + '</td>'
            htmlContent += '<td>' + invoiceModel.mobile + '</td>'
            htmlContent += '<td>' + invoiceModel.email + '</td>'
            htmlContent += '<td><i class="fa fa-ellipsis-v" aria-hidden="true"></i></td>'
            htmlContent += '</tr>'
        })
        $('#tbinvoices').html(htmlContent)
    }
}