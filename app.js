class Product{
    constructor(name, price, year) {
        this.name = name;
        this.price = year;
        this.year = year;
    }
}

class UI {
    constructor() {

    }

    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product name</strong> ${product.name}
                    <strong>Product price</strong> ${product.price}
                    <strong>Product name</strong> ${product.year}
                    <a href="#" name="delete" class="btn btn-danger">delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element)
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product deleted successfully', 'danger')
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));

        // Showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(div, app);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// DOM Events

// Form event
document.getElementById('product-form')
    .addEventListener('submit', function(e) {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        console.log(name, price, year);

        const product = new Product(name, price, year)

        const ui = new UI();

        if(name === '' || price === '' || year === '') {
            return ui.showMessage('Complete fields please', 'danger')
        }
        ui.addProduct(product);
        ui.resetForm();
        ui.showMessage('Product added successfully', 'success');

        e.preventDefault();
})

// Delete event
document.getElementById('product-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteProduct(e.target)
});