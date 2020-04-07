jQuery(() => {
  const shoppingListInput = $('.shopping-list__input');
  const footerInput = $('.footer__input')
    .keyup(changeTitle);

  function addItem(event) {

    const item = shoppingListInput
      .val();

    if (!item || (event.type === 'keyup' && event.which !== 13)) {
      return;
    }

    const ul = $('.shopping-list__list');
    const li = $('<li>')
      .addClass('list-group-item')
      .addClass('list__item')
      .appendTo(ul);
    const label = $('<label>')
      .appendTo(li);

    $('<input>')
      .attr('type', 'checkbox')
      .addClass('item__input')
      .on('click', toggleItem)
      .appendTo(label);

    label.append(item);

    shoppingListInput.val('');
  }

  function toggleItem(event) {
    $(event.currentTarget)
      .closest('li')
      .toggleClass('list__item--removed');
  }

  function changeTitle() {
    $('.shopping-list__header')
      .text(footerInput.val());
  }

  shoppingListInput
    .keyup(addItem);
  $('.shopping-list__button')
    .on('click', addItem);
  $('.item__input')
    .on('click', toggleItem);
});
