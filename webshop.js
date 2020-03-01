function renderProductList(){

    const productList = JSON.parse(window.localStorage.getItem("productList")) || [];

    const productListEl = document.getElementById("productList");
    productListEl.innerHTML = "";

        for ( const product of productList){
            const productEl = document.createElement("div");
            productEl.innerHTML = "<div>" + 
            "<h3>" + product.productName + "(" +product.category + ")</h3>" + 
            (product.picture ? "<div><img width ='100px' height='100px' src='" + product.picture +"'/></div>" :"") +
            "<p>" + product.description + "</p>" +
            "<div><small>Kr " + product.price + "</small></div>" +  
            "</div>"
            productListEl.appendChild(productEl);
        }
}
function handleSubmit(event){
    event.preventDefault();

    const productName = document.querySelector("[name='productName']").value;
    const category = document.querySelector("[name='category']").value;
    const price = document.querySelector("[name='price']").value; 
    const description = document.querySelector("[name='description']").value;
    const picture = document.querySelector("[name='picture']").files.item(0).name;

    const product = {
        productName, category, price, description, picture
    };

    const productList = JSON.parse(window.localStorage.getItem("productList")) || [];
    productList.push(product);
    window.localStorage.setItem("productList", JSON.stringify(productList));

    event.target.reset();

    renderProductList();
}