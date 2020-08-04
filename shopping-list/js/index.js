// Requirements
// In terms of user experience, your shopping list app must allow users to:

// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
// Additionally:

// You must use a CDN-hosted version of jQuery
// Put your application code in a file called index.js and link to it in index.html
// Be sure to put both script elements at the bottom of the <body> element.
// Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. Write JavaScript code that works with the existing HTML and CSS to implement the required features.
// Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().
// When you're done, push your work up to GitHub and publish it on GitHub Pages. Submit a link to your repo below.

// Storage for Program Data
const STORE = [];
// Add an Item to the List
function addItem(){
    $('#js-shopping-list-form').submit(function (e) {
        e.preventDefault();
        if(!$('#js-shopping-list-entry').val()){
            let newEntry = $('#shopping-list-entry').val()
            $('ul').append(
            '<li>' + 
            `<span class="shopping-item">${newEntry}</span>` +
            '<div class="shopping-item-controls">' +
            '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
            '</button>' +
            '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
            '</button>' +
            '</div>' +
            '</li>')
        }
        $(this).trigger('reset');
});
}
// Removes Item from List
function removeItem(){
    $('ul').on('click', '.shopping-item-delete', function(e){
        this.closest('li').remove()
    });
}
// Toggles Checked Class on Item
function checkItem(){
    $('ul').on('click', '.shopping-item-toggle', function(e){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    });
}

function buildList(){
    addItem();
    removeItem();
    checkItem();
}

$(buildList)
