(function makeEvent() {
    const SIZE_PICKER = document.getElementById("sizePicker");
    SIZE_PICKER.addEventListener("submit", function() {
        event.preventDefault();
        var height = document.getElementById("input_height").value;
        var width = document.getElementById("input_width").value;
        makeGrid(height, width);
        }, false);
})();

function paintBox() {
    const COLOR_PICKER = document.getElementById("colorPicker").value;
    this.style.background = COLOR_PICKER
}

function makeGrid(height, width) {
    const TABLE = document.getElementById("pixel_canvas");
    TABLE.innerHTML = "";
    for (var i = 0; i < height; i++) {
        var row = TABLE.insertRow(i);
        for (var j= 0; j < width; j++ ) {
            var cell = row.insertCell(j);
            cell.onclick = paintBox;
        }
    }
}