// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById("menu");//retrieve the ID 'menu'
  
    Object.keys(menu).forEach((category) => {
      const header = document.createElement("h2");
      header.textContent = category;
      menuContainer.appendChild(header);
  
      const list = document.createElement("ul");
  
      menu[category].forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.addEventListener("click", () => addToOrder(item, category));
        list.appendChild(listItem);
      });
  
      menuContainer.appendChild(list);
    });
  }
  //Iterate over categories: Object.keys(menu) returns an array of the categories (Starters, MainCourses, Desserts). For each category:
  //1. Create a header element (<h2>) and set its text to the category name.
  //2. Create a list element (<ul>).
  //3. Iterate over the items in the category:
  //4. Create a list item (<li>), set its text to the item name, and add a click event listener to call addToOrder when clicked.
  //5. Append the list item to the list.
  //6. Append the header and the list to the menu container.

  
  // Callback function for adding an item to the order
  function addToOrder(item, category) {
    const orderItemsList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");
  
    const listItem = document.createElement("li");
    listItem.textContent = item;
    orderItemsList.appendChild(listItem);
  
    let pricing = getPrice(category);
    updateTotal(pricing);
  
    listItem.addEventListener("click", () => {
      listItem.remove();
      updateTotal(-pricing);
    });
  }
  //This function handles adding a selected menu item to the order.
  //Retrieve order elements: Gets the elements with the IDs "order-items" (where ordered items are listed) and "order-total" (showing the total price).
  //Create and add list item: Creates a new list item for the selected menu item, sets its text, and appends it to the order items list.
  //Get item price: Calls getPrice to get the price based on the category.
  //Update total price: Calls updateTotal to update the total price by adding the item's price.
  //Remove item on click: Adds a click event listener to the list item that, when clicked, removes the item from the order and subtracts its price from the total.
  
  function getPrice(category) {
    return category === "Starters"
      ? 35
      : category === "MainCourses"
      ? 100
      : category === "Desserts"
      ? 50
      : 0;
  }
  //This function returns the price of an item based on its category
  //"Starters," the price is 35 etc. If the category doesn't match any, the price will be 0

  function updateTotal(amount) {
    const orderTotalElement = document.getElementById("order-total");
    let currentTotal = parseFloat(orderTotalElement.textContent);
    currentTotal += amount;
    orderTotalElement.textContent = currentTotal;
  }
  //This function updates the total price displayed on the web page.
  //Retrieve current total: Gets the element with the ID "order-total" and parses its text content to a floating-point number.
  //Update total: Adds the specified amount (which could be positive or negative) to the current total.
  //Update display: Sets the text content of the total element to the new total.


  // Function to initialize the menu system
  function initMenuSystem(menu) {
    displayMenuItems(menu);
  }
  //This function initializes the menu system by calling displayMenuItems with the provided menu data. The initMenuSystem function is called at the end to start the process.

// Start the menu system by calling the init function
initMenuSystem(menu);

