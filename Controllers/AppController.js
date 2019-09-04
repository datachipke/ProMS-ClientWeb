AppController = {
    getNewWhats : function (){
        xit.files.readJsonFile('Config/newwhats.config.json').then(function (content){
            var htmlContent = ''
            content.forEach(whatItemModel => {
                htmlContent += '<div class="col-lg-6">'
                    htmlContent += '<div class="card card-figure has-hoverable" style="cursor: pointer;" onclick="newWhatClick(this, null)" view="' + whatItemModel.view + '">'
                    htmlContent += '<img class="card-img-top img-fluid" src="' + whatItemModel.image + '" alt="Card image cap">'
                        htmlContent += '<div class="card-body">'
                            htmlContent += '<h4 class="card-title">' + whatItemModel.label + '</h4>'
                            htmlContent += '<p class="card-text" hidden> </p>'
                            htmlContent += '<a href="#" class="btn btn-primary" hidden>Go somewhere</a>'
                        htmlContent += ' </div>'
                     htmlContent += '</div>'
                htmlContent += '</div>'
            })
            $('#dvNewWhats').append(htmlContent)
        }).catch(function (error){
            alert(error)
        })
    }
}