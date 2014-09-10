/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewBootcampSet.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Bootcamp.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Bootcamp." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

