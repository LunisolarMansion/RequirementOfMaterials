// === All items from your "Analysis of Materials.xlsx" ===
const ITEMS = {
  "Brick Flat Soling in 20mm Sand Bed": {
    unit: "Sqm.",
    materials: {
      "Bricks (In Nos)": 36,
      "Sand (In Cum)": 0.03
    }
  },
  "P.C.C. Work 1:4:8": {
    unit: "Cum.",
    materials: {
      "Cement (In Bags)": 3.4,
      "Sand (In Cum)": 0.46,
      "Chips (In Cum)": 0.92
    }
  },
  "P.C.C. Work 1:3:6": {
    unit: "Cum.",
    materials: {
      "Cement (In Bags)": 4.4,
      "Sand (In Cum)": 0.44,
      "Chips (In Cum)": 0.88
    }
  },
  "Form Work": {
    unit: "Sqm.",
    materials: {
      "Shuttering Planks (In Cft)": 0.2943
    }
  },
  
  "R.C.C. Work 1:1.5:3": {
    unit: "Cum.",
    materials: {
      "Cement (In Bags)": 8.22,
      "Sand (In Cum)": 0.471,
      "Chips (In Cum)": 0.856
    }
  },
  "R.C.C. Work 1:2:4": {
    unit: "Cum.",
    materials: {
      "Cement (In Bags)": 6.4,
      "Sand (In Cum)": 0.44,
      "Chips (In Cum)": 0.88
    }
  },
  "Bamboo Slit Walling": {
    unit: "Sqm.",
    materials: {
      "Cement (In Bags)": 0.18,
      "Sand (In Cum)": 0.036,
      "Bamboo (In Pcs.)": 0.75,
      "Galvd. Wire (In Kg)": 0.2
    }
  },
  "Brick Work 1:3": {
    unit: "Cum.",
    materials: {
      "Bricks (In Nos)": 500,
      "Cement (In Bags)": 2.4,
      "Sand (In Cum)": 0.24
    }
  },
  "Brick Work 1:4": {
    unit: "Cum.",
    materials: {
      "Bricks (In Nos)": 500,
      "Cement (In Bags)": 2,
      "Sand (In Cum)": 0.27
    }
  },
  "Brick Work 1:5": {
    unit: "Cum.",
    materials: {
      "Bricks (In Nos)": 500,
      "Cement (In Bags)": 1.5,
      "Sand (In Cum)": 0.25
    }
  },
  "112mm Thick Brick Work 1:4": {
    unit: "Sqm.",
    materials: {
      "Bricks (In Nos)": 56,
      "Cement (In Bags)": 0.213,
      "Sand (In Cum)": 0.03
    }
  },
  "112mm Thick Brick Work 1:5": {
    unit: "Sqm.",
    materials: {
      "Bricks (In Nos)": 56,
      "Cement (In Bags)": 0.175,
      "Sand (In Cum)": 0.03
    }
  },
  "75mm Thick Brick Work 1:3": {
    unit: "Sqm.",
    materials: {
      "Bricks (In Nos)": 37.5,
      "Cement (In Bags)": 0.2,
      "Sand (In Cum)": 0.02
    }
  },
  "75mm Thick Brick Work 1:4": {
    unit: "Sqm.",
    materials: {
      "Bricks (In Nos)": 37.5,
      "Cement (In Bags)": 0.152,
      "Sand (In Cum)": 0.02
    }
  },
  "25 mm thick D.P.C. 1:2:4": {
    unit: "Sqm.",
    materials: {
      "Cement (In Bags)": 0.165,
      "Sand (In Cum)": 0.011,
      "Chips (In Cum)": 0.022,
      "D.P.Admixture (In Kg)": 0.165
    }
  },
  "Door Shutters 1\" thick": {
    unit: "No",
    materials: {
      "Shuttering Planks (In Cft)": 2.1875
    }
  },
  "Window Shutters 1\" thick": {
    unit: "No",
    materials: {
      "Shuttering Planks (In Cft)": 0.972222
    }
  },
  "15 mm Thick Cement Plaster 1:4": {
    unit: "Sqm.",
    materials: {
      "Cement (In Bags)": 0.131,
      "Sand (In Cum)": 0.0175
    }
  },
  "15 mm Thick Cement Plaster 1:6": {
    unit: "Sqm.",
    materials: {
      "Cement (In Bags)": 0.086,
      "Sand (In Cum)": 0.0172
    }
  },
  "Priming Over Wood work": {
    unit: "Sqm.",
    materials: {
      "Primer (In Litre)": 0.07
    }
  },
  "Painting Over Wood work(2 Coats)": {
    unit: "Sqm.",
    materials: {
      "Paint (In Litre)": 0.17
    }
  },
  "Colour Washing Over White Washing (2 Coats)": {
    unit: "Sqm.",
    materials: {
      "Lime (In Kg)": 0.3
    }
  },
  "40 mm Thick C.C. Flooring 25mm(1:3:6)+15mm(1:1:2)": {
    unit: "Sqm.",
    materials: {
      "Cement (In Bags)": 0.348,
      "Sand (In Cum)": 0.01775,
      "Chips (In Cum)": 0.0355
    }
  },
  "Brick-on-flat flooring Bricks with 1:4 +15mm C.M.(1:2)": {
    unit: "Sqm.",
    materials: {
      "Bricks (In Nos)": 36,
      "Cement (In Bags)": 0.472,
      "Sand (In Cum)": 0.042
    }
  },
  "15 mm Thick Cement Plaster 1:3 Skirting": {
    unit: "Sqm.",
    materials: {
      "Cement (In Bags)": 0.2,
      "Sand (In Cum)": 0.0145
    }
  },
  "GCI sheet Roofing": {
    unit: "Sqm.",
    materials: {
      "GCI Sheet (In Bundle)": 0.067
    }
  },
  "10 mm Thick Cement plaster 1:3": {
    unit: "Sqm.",
    materials: {
      "Cement (In Bags)": 0.116667,
      "Sand (In Cum)": 0.011667
    }
  },
  "12 mm Thick Cement plaster 1:3": {
    unit: "Sqm.",
    materials: {
      "Cement (In Bags)": 0.14,
      "Sand (In Cum)": 0.014
    }
  },
  "15 mm Thick Cement plaster 1:3": {
    unit: "Sqm.",
    materials: {
      "Cement (In Bags)": 0.175,
      "Sand (In Cum)": 0.0175
    }
  },
  "15 cm Thick stone soling": {
    unit: "Sqm.",
    materials: {
      "Stone (In cum)": 0.15,
      "Sand (In Cum)": 0.045
    }
  }
};

// DOM Elements
const itemSelect = document.getElementById("itemSelect");
const itemUnitSpan = document.getElementById("itemUnit");
const qtyInput = document.getElementById("itemQty");
const calcBtn = document.getElementById("calcBtn");
const saveBtn = document.getElementById("saveBtn");
const itemError = document.getElementById("itemError");
const qtyError = document.getElementById("qtyError");
const noDataMsg = document.getElementById("noDataMsg");
const resultTable = document.getElementById("resultTable");
const resultTbody = resultTable.querySelector("tbody");
const tableCaption = document.getElementById("tableCaption");

const noSavedMsg = document.getElementById("noSavedMsg");
const savedItemsWrapper = document.getElementById("savedItemsWrapper");
const totalMaterialsWrapper = document.getElementById("totalMaterialsWrapper");
const savedItemsTableBody = document.querySelector("#savedItemsTable tbody");
const totalMaterialsTableBody = document.querySelector("#totalMaterialsTable tbody");
const savedButtonsRow = document.getElementById("savedButtonsRow");
const clearBtn = document.getElementById("clearBtn");
const printBtn = document.getElementById("printBtn");

/**
 * Stores the saved items of work.
 * Structure: { itemName: string, qty: number, unit: string }[]
 */
const savedItems = []; 

// Helper Functions
// ---

/**
 * Extracts material name and unit from a label string (e.g., "Cement (In Bags)").
 * @param {string} label The material label from the ITEMS object.
 * @returns {{ materialName: string, unit: string }}
 */
function splitMaterialAndUnit(label) {
  const match = label.match(/\((.*?)\)/);
  let materialName = label;
  let unit = "";
  if (match) {
    materialName = label.substring(0, match.index).trim();
    unit = match[1].trim();
    unit = unit.replace(/^In\s+/i, ""); // Removes "In " prefix if present
  }
  return { materialName, unit };
}

/**
 * Formats a number to a fixed decimal point and removes trailing zeros.
 * @param {number} num The number to format.
 * @param {number} decimals The number of decimal places (default 3).
 * @returns {string} The formatted number string.
 */
function formatNumber(num, decimals = 3) {
  if (Number.isNaN(num) || num === null || num === undefined) return "";
  const fixed = num.toFixed(decimals);
  // Use parseFloat to remove unnecessary trailing zeros (e.g., 5.000 -> 5)
  return parseFloat(fixed).toString(); 
}

/**
 * Clears all form error messages.
 */
function clearErrors() {
  itemError.style.display = "none";
  itemError.textContent = "";
  qtyError.style.display = "none";
  qtyError.textContent = "";
}

/**
 * Validates the selected item and entered quantity.
 * @returns {{ valid: boolean, itemName: string, qty: number }}
 */
function validateInputs() {
  clearErrors();
  const itemName = itemSelect.value;
  const qty = parseFloat(qtyInput.value);
  let valid = true;

  if (!itemName || !ITEMS[itemName]) {
    itemError.textContent = "Please select an Item of Work.";
    itemError.style.display = "block";
    valid = false;
  }

  if (isNaN(qty) || qty <= 0) {
    qtyError.textContent = "Please enter a valid positive quantity.";
    qtyError.style.display = "block";
    valid = false;
  }

  return { valid, itemName, qty };
}

// Event Handlers
// ---

/**
 * Populates the 'Item of Work' dropdown from the ITEMS object.
 */
function populateItems() {
  const itemNames = Object.keys(ITEMS);
  itemNames.forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    itemSelect.appendChild(opt);
  });
}

/**
 * Rebuilds the "Saved Items of Work" table.
 */
function rebuildSavedItemsTable() {
  if (savedItems.length === 0) {
    savedItemsWrapper.style.display = "none";
    totalMaterialsWrapper.style.display = "none";
    savedButtonsRow.style.display = "none";
    noSavedMsg.style.display = "block";
    totalMaterialsTableBody.innerHTML = "";
    return;
  }

  noSavedMsg.style.display = "none";
  savedItemsWrapper.style.display = "block";
  savedButtonsRow.style.display = "block";

  savedItemsTableBody.innerHTML = "";

  savedItems.forEach((item, index) => {
    const tr = document.createElement("tr");

    const tdSl = document.createElement("td");
    tdSl.textContent = index + 1;

    const tdItem = document.createElement("td");
    tdItem.textContent = item.itemName;

    const tdQty = document.createElement("td");
    tdQty.textContent = formatNumber(item.qty);

    const tdUnit = document.createElement("td");
    tdUnit.textContent = item.unit;

    const tdActions = document.createElement("td");
    tdActions.className = "no-print";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-sm btn-danger";
    deleteBtn.addEventListener("click", () => deleteSavedItem(index));

    tdActions.appendChild(deleteBtn);

    tr.appendChild(tdSl);
    tr.appendChild(tdItem);
    tr.appendChild(tdQty);
    tr.appendChild(tdUnit);
    tr.appendChild(tdActions);

    savedItemsTableBody.appendChild(tr);
  });
}

/**
 * Rebuilds the "Total Materials for All Saved Items" table.
 */
function rebuildTotalMaterialsTable() {
  if (savedItems.length === 0) {
    totalMaterialsWrapper.style.display = "none";
    totalMaterialsTableBody.innerHTML = "";
    return;
  }

  // Aggregate total materials
  const totals = {}; // Key: Material Label (e.g., "Cement (In Bags)"), Value: Total Quantity

  savedItems.forEach((saved) => {
    const config = ITEMS[saved.itemName];
    if (!config || !config.materials) return;

    Object.entries(config.materials).forEach(([label, factor]) => {
      const increment = saved.qty * factor;
      if (!totals[label]) {
        totals[label] = 0;
      }
      totals[label] += increment;
    });
  });

  // Render the totals table
  totalMaterialsTableBody.innerHTML = "";
  let sl = 1;

  Object.entries(totals).forEach(([label, totalQty]) => {
    const { materialName, unit } = splitMaterialAndUnit(label);

    const tr = document.createElement("tr");

    const tdSl = document.createElement("td");
    tdSl.textContent = sl++;

    const tdMat = document.createElement("td");
    tdMat.textContent = materialName;

    const tdQty = document.createElement("td");
    tdQty.textContent = formatNumber(totalQty);

    const tdUnit = document.createElement("td");
    tdUnit.textContent = unit;

    tr.appendChild(tdSl);
    tr.appendChild(tdMat);
    tr.appendChild(tdQty);
    tr.appendChild(tdUnit);

    totalMaterialsTableBody.appendChild(tr);
  });

  totalMaterialsWrapper.style.display = "block";
}

/**
 * Deletes a saved item by its index in the savedItems array.
 * @param {number} index The index of the item to delete.
 */
function deleteSavedItem(index) {
  if (confirm("Are you sure you want to delete this saved item?")) {
    savedItems.splice(index, 1);
    rebuildSavedItemsTable();
    rebuildTotalMaterialsTable();
  }
}

// Event Listeners
// ---

// Update unit display when item is selected
itemSelect.addEventListener("change", () => {
  clearErrors();
  const itemName = itemSelect.value;
  if (!itemName || !ITEMS[itemName]) {
    itemUnitSpan.textContent = "–";
    resultTable.style.display = "none";
    noDataMsg.style.display = "block";
    return;
  }

  itemUnitSpan.textContent = ITEMS[itemName].unit || "–";
  // Clear previous calculation result when changing item
  resultTable.style.display = "none";
  noDataMsg.style.display = "block";
});

// Per-item calculation (Calculate button)
calcBtn.addEventListener("click", () => {
  const { valid, itemName, qty } = validateInputs();
  if (!valid) {
    resultTable.style.display = "none";
    noDataMsg.style.display = "block";
    return;
  }

  const itemConfig = ITEMS[itemName];
  const materials = itemConfig.materials || {};

  resultTbody.innerHTML = "";
  let index = 1;

  Object.entries(materials).forEach(([label, factor]) => {
    const { materialName, unit } = splitMaterialAndUnit(label);
    const materialQty = qty * factor;

    const tr = document.createElement("tr");

    const tdSl = document.createElement("td");
    tdSl.textContent = index++;

    const tdMat = document.createElement("td");
    tdMat.textContent = materialName;

    const tdQty = document.createElement("td");
    tdQty.textContent = formatNumber(materialQty);

    const tdUnit = document.createElement("td");
    tdUnit.textContent = unit;

    tr.appendChild(tdSl);
    tr.appendChild(tdMat);
    tr.appendChild(tdQty);
    tr.appendChild(tdUnit);

    resultTbody.appendChild(tr);
  });

  tableCaption.textContent =
    "Material Requirement for: " +
    itemName +
    " (Quantity: " +
    formatNumber(qty, 3) +
    " " +
    (itemConfig.unit || "") +
    ")";

  resultTable.style.display = "table";
  noDataMsg.style.display = "none";
});

// Save item of work (Save button)
saveBtn.addEventListener("click", () => {
  const { valid, itemName, qty } = validateInputs();
  if (!valid) return;

  const itemConfig = ITEMS[itemName];

  // Add to saved items list
  savedItems.push({
    itemName,
    qty,
    unit: itemConfig.unit || ""
  });

  // Hide the per-item calculated table after saving
  resultTbody.innerHTML = "";
  tableCaption.textContent = "";
  resultTable.style.display = "none";
  noDataMsg.style.display = "block";

  // Rebuild summary tables
  rebuildSavedItemsTable();
  rebuildTotalMaterialsTable();
});

// Clear all saved items
clearBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear ALL saved items? This action cannot be undone.")) {
    savedItems.length = 0; // Clear the array
    rebuildSavedItemsTable();
    rebuildTotalMaterialsTable();
  }
});

// Print functionality
printBtn.addEventListener("click", () => {
  window.print(); // browser "Save as PDF" will use only the savedSection (via @media print CSS)
});

// Initialize on page load
populateItems();
rebuildSavedItemsTable(); // Check for and display initial saved state (should be empty)
