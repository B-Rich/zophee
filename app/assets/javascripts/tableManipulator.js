    // Define value names
    var options = {
	    valueNames: [ 'id', 'name', 'category','location', 'valuation','mau','watching','growth','size','amountRaised' ]
    };

    // Init list
    var contactList = new List('content', options);
    console.log(contactList)
    var idField = $('#id-field'),
        nameField = $('#name-field'),
        categoryField = $('#category-field'),
        valueField = $('#value-field'),
        locationField = $('#location-field'),
        addBtn = $('#add-btn'),
        editBtn = $('#edit-btn').hide(),
        removeBtns = $('.remove-item-btn'),
        editBtns = $('.edit-item-btn');

    // Sets callbacks to the buttons in the list
    refreshCallbacks();

    addBtn.click(function() {
       contactList.add({
           id: Math.floor(Math.random()*110000),
           name: nameField.val(),
           age: ageField.val(),
           city: cityField.val()
       });
       clearFields();
       refreshCallbacks();
    });

    editBtn.click(function() {
       var item = contactList.get('id', idField.val());
       item.values({
           id:idField.val(),
           name: nameField.val(),
           age: ageField.val(),
           city: cityField.val()
       });
       clearFields();
       editBtn.hide();
       addBtn.show();
    });

    function refreshCallbacks() {
        // Needed to add new buttons to jQuery-extended object
        removeBtns = $(removeBtns.selector);
        editBtns = $(editBtns.selector);

        removeBtns.click(function() {
           var itemId = $(this).closest('tr').find('.id').text();
           contactList.remove('id', itemId);
        });

        editBtns.click(function() {
           var itemId = $(this).closest('tr').find('.id').text();
           var itemValues = contactList.get('id', itemId).values();
           idField.val(itemValues.id);
           nameField.val(itemValues.name);
           ageField.val(itemValues.age);
           cityField.val(itemValues.city);

           editBtn.show();
           addBtn.hide();
        });
    }

    function clearFields() {
       nameField.val('');
       ageField.val('');
       cityField.val('');
    }