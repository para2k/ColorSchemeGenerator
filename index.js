const hexcodesContainer = document.getElementById("color-hexcodes");
const colorsContainer = document.getElementById("colors-container");
const generateColorsBtn = document.getElementById("get-colors-btn");
const colorApiSchemeBase = "https://www.thecolorapi.com/scheme?hex=";

//Generate color scheme based on selected color 

generateColorsBtn.addEventListener("click", () => {
    const color = document.getElementById("color-picker-input").value.slice(1);
    const schemeMode = document.getElementById("color-type-select").value;
    fetch(`${colorApiSchemeBase}${color}&mode=${schemeMode}&count=5`)
        .then(response => response.json())
        .then(data => {
            let colorsHtmlString = "";
            let hexCodesHtmlString = "";
            data.colors.forEach(color => {
                colorsHtmlString += `<li style="background-color: ${color.hex.value}"></li>`;
                hexCodesHtmlString += `<li>${color.hex.value}</li>`
            })

            colorsContainer.innerHTML = colorsHtmlString
            hexcodesContainer.innerHTML = hexCodesHtmlString
        });
})