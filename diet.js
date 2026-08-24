"use strict";

/* ================================
   GYMTRACK DIET DATA
================================ */

const foods = [

    {
        id: 1,
        name: "Eggs",
        serving: "2 eggs",
        category: ["protein"],
        price: 14,
        calories: 144,
        protein: 12.6,
        carbs: 0.7,
        fat: 9.6,
        fiber: 0,
        calcium: 56,
        iron: 1.8,
        sodium: 142,
        creatine: 0,
        image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 2,
        name: "Chicken Breast",
        serving: "100 g cooked",
        category: ["protein", "creatine"],
        price: 45,
        calories: 165,
        protein: 31,
        carbs: 0,
        fat: 3.6,
        fiber: 0,
        calcium: 15,
        iron: 1,
        sodium: 74,
        creatine: 0.4,
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 3,
        name: "Fish",
        serving: "100 g cooked",
        category: ["protein", "creatine"],
        price: 60,
        calories: 170,
        protein: 25,
        carbs: 0,
        fat: 7,
        fiber: 0,
        calcium: 20,
        iron: 1,
        sodium: 70,
        creatine: 0.8,
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 4,
        name: "Paneer",
        serving: "100 g",
        category: ["protein", "dairy", "veg"],
        price: 40,
        calories: 265,
        protein: 18,
        carbs: 4,
        fat: 20,
        fiber: 0,
        calcium: 200,
        iron: 2,
        sodium: 22,
        creatine: 0,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 5,
        name: "Milk",
        serving: "250 ml",
        category: ["dairy", "protein", "veg"],
        price: 18,
        calories: 150,
        protein: 8,
        carbs: 12,
        fat: 8,
        fiber: 0,
        calcium: 300,
        iron: 0.1,
        sodium: 100,
        creatine: 0,
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 6,
        name: "Soy Chunks",
        serving: "50 g dry",
        category: ["protein", "veg"],
        price: 15,
        calories: 170,
        protein: 26,
        carbs: 15,
        fat: 1,
        fiber: 5,
        calcium: 140,
        iron: 4,
        sodium: 10,
        creatine: 0,
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 7,
        name: "Chickpeas",
        serving: "100 g cooked",
        category: ["protein", "veg"],
        price: 12,
        calories: 164,
        protein: 8.9,
        carbs: 27.4,
        fat: 2.6,
        fiber: 7.6,
        calcium: 49,
        iron: 2.9,
        sodium: 7,
        creatine: 0,
        image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 8,
        name: "Lentils / Dal",
        serving: "1 cup cooked",
        category: ["protein", "veg"],
        price: 20,
        calories: 230,
        protein: 17.9,
        carbs: 39.8,
        fat: 0.8,
        fiber: 15.6,
        calcium: 37,
        iron: 6.6,
        sodium: 4,
        creatine: 0,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 9,
        name: "Peanuts",
        serving: "30 g",
        category: ["nuts", "protein", "veg"],
        price: 10,
        calories: 170,
        protein: 7.7,
        carbs: 4.8,
        fat: 14.7,
        fiber: 2.4,
        calcium: 28,
        iron: 1.4,
        sodium: 2,
        creatine: 0,
        image: "https://images.unsplash.com/photo-1567892737950-30c4db37cd89?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 10,
        name: "Pumpkin Seeds",
        serving: "30 g",
        category: ["nuts", "protein", "veg"],
        price: 25,
        calories: 170,
        protein: 8.5,
        carbs: 4.5,
        fat: 14.5,
        fiber: 1.5,
        calcium: 15,
        iron: 2.7,
        sodium: 5,
        creatine: 0,
        image: "https://images.unsplash.com/photo-1601055903647-dd8b3d7f2b98?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 11,
        name: "Greek Yogurt",
        serving: "200 g",
        category: ["dairy", "protein", "veg"],
        price: 40,
        calories: 146,
        protein: 20,
        carbs: 7,
        fat: 4,
        fiber: 0,
        calcium: 220,
        iron: 0.1,
        sodium: 70,
        creatine: 0,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 12,
        name: "Tofu",
        serving: "100 g",
        category: ["protein", "veg"],
        price: 25,
        calories: 144,
        protein: 17,
        carbs: 3,
        fat: 9,
        fiber: 2,
        calcium: 350,
        iron: 2.7,
        sodium: 14,
        creatine: 0,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 13,
        name: "Tuna",
        serving: "100 g",
        category: ["protein", "creatine"],
        price: 70,
        calories: 132,
        protein: 29,
        carbs: 0,
        fat: 1,
        fiber: 0,
        calcium: 10,
        iron: 1,
        sodium: 47,
        creatine: 0.9,
        image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 14,
        name: "Almonds",
        serving: "30 g",
        category: ["nuts", "veg"],
        price: 30,
        calories: 174,
        protein: 6.4,
        carbs: 6.1,
        fat: 15,
        fiber: 3.2,
        calcium: 75,
        iron: 1.1,
        sodium: 0,
        creatine: 0,
        image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80"
    }

];


/* ================================
   DOM ELEMENTS
================================ */

const foodGrid = document.getElementById("foodGrid");
const searchInput = document.getElementById("foodSearch");
const filterButtons = document.querySelectorAll(".diet-filter");

const totalCalories = document.getElementById("totalCalories");
const totalProtein = document.getElementById("totalProtein");
const totalCarbs = document.getElementById("totalCarbs");
const totalFat = document.getElementById("totalFat");
const totalFiber = document.getElementById("totalFiber");

const todayList = document.getElementById("todayList");


/* ================================
   STORAGE
================================ */

let todayDiet = JSON.parse(
    localStorage.getItem("gymtrackDiet")
) || [];


/* ================================
   CURRENT FILTER
================================ */

let currentCategory = "all";


/* ================================
   RENDER FOOD CARDS
================================ */

function renderFoods() {

    const searchText = searchInput.value
        .trim()
        .toLowerCase();

    const filteredFoods = foods.filter(food => {

        const matchesSearch =
            food.name.toLowerCase().includes(searchText);

        const matchesCategory =
            currentCategory === "all" ||
            food.category.includes(currentCategory);

        return matchesSearch && matchesCategory;
    });


    if (filteredFoods.length === 0) {

        foodGrid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:40px;color:#888;">
                No food found.
            </div>
        `;

        return;
    }


    foodGrid.innerHTML = filteredFoods.map(food => {

        const categoryName =
            currentCategory === "creatine"
                ? "Natural Creatine Food"
                : food.category[0].toUpperCase();


        return `

            <article class="food-card">

                <img
                    class="food-image"
                    src="${food.image}"
                    alt="${food.name}"
                    loading="lazy"
                >

                <div class="food-content">

                    <span class="food-category">
                        ${categoryName}
                    </span>

                    <div class="food-top">

                        <h3>${food.name}</h3>

                        <span class="food-price">
                            ₹${food.price}
                        </span>

                    </div>

                    <p class="food-serving">
                        ${food.serving}
                    </p>


                    <div class="nutrient-grid">

                        <div class="nutrient">
                            🔥 <b>${food.calories}</b> kcal
                        </div>

                        <div class="nutrient">
                            💪 <b>${food.protein}</b> g protein
                        </div>

                        <div class="nutrient">
                            🍚 <b>${food.carbs}</b> g carbs
                        </div>

                        <div class="nutrient">
                            🥑 <b>${food.fat}</b> g fat
                        </div>

                        <div class="nutrient">
                            🌾 <b>${food.fiber}</b> g fiber
                        </div>

                        <div class="nutrient">
                            🦴 <b>${food.calcium}</b> mg calcium
                        </div>

                        <div class="nutrient">
                            🩸 <b>${food.iron}</b> mg iron
                        </div>

                        <div class="nutrient">
                            🧂 <b>${food.sodium}</b> mg sodium
                        </div>

                    </div>


                    ${
                        food.creatine > 0
                        ?
                        `
                        <div class="creatine-note">
                            ⚡ Natural creatine: approximately
                            ${food.creatine} g per serving.
                        </div>
                        `
                        :
                        ""
                    }


                    <button
                        class="add-food"
                        data-id="${food.id}"
                    >
                        + Add to Today's Diet
                    </button>

                </div>

            </article>
        `;

    }).join("");
}


/* ================================
   ADD FOOD
================================ */

function addFood(foodId) {

    const food = foods.find(item => item.id === foodId);

    if (!food) {
        return;
    }

    todayDiet.push({
        id: Date.now(),
        foodId: food.id
    });

    saveDiet();

    renderTodayDiet();
}


/* ================================
   REMOVE FOOD
================================ */

function removeFood(entryId) {

    todayDiet = todayDiet.filter(
        item => item.id !== entryId
    );

    saveDiet();

    renderTodayDiet();
}


/* ================================
   SAVE
================================ */

function saveDiet() {

    localStorage.setItem(
        "gymtrackDiet",
        JSON.stringify(todayDiet)
    );
}


/* ================================
   RENDER TODAY'S DIET
================================ */

function renderTodayDiet() {

    if (todayDiet.length === 0) {

        todayList.innerHTML = `
            <div class="empty-diet">
                No foods added yet.
            </div>
        `;

        updateTotals();

        return;
    }


    todayList.innerHTML = todayDiet.map(entry => {

        const food = foods.find(
            item => item.id === entry.foodId
        );

        if (!food) {
            return "";
        }

        return `

            <div class="today-item">

                <div>
                    <strong>${food.name}</strong>
                    <br>

                    <small>
                        ${food.serving}
                        • ${food.calories} kcal
                        • ${food.protein}g protein
                    </small>
                </div>

                <button
                    class="remove-food"
                    data-id="${entry.id}"
                >
                    Remove
                </button>

            </div>

        `;

    }).join("");


    updateTotals();
}


/* ================================
   TOTAL NUTRITION
================================ */

function updateTotals() {

    let calories = 0;
    let protein = 0;
    let carbs = 0;
    let fat = 0;
    let fiber = 0;


    todayDiet.forEach(entry => {

        const food = foods.find(
            item => item.id === entry.foodId
        );

        if (!food) {
            return;
        }

        calories += food.calories;
        protein += food.protein;
        carbs += food.carbs;
        fat += food.fat;
        fiber += food.fiber;

    });


    totalCalories.textContent =
        Math.round(calories);

    totalProtein.textContent =
        protein.toFixed(1);

    totalCarbs.textContent =
        carbs.toFixed(1);

    totalFat.textContent =
        fat.toFixed(1);

    totalFiber.textContent =
        fiber.toFixed(1);
}


/* ================================
   FOOD BUTTON EVENTS
================================ */

foodGrid.addEventListener("click", function(event) {

    const button = event.target.closest(".add-food");

    if (!button) {
        return;
    }

    const foodId = Number(button.dataset.id);

    addFood(foodId);
});


/* ================================
   REMOVE BUTTON EVENTS
================================ */

todayList.addEventListener("click", function(event) {

    const button =
        event.target.closest(".remove-food");

    if (!button) {
        return;
    }

    const entryId =
        Number(button.dataset.id);

    removeFood(entryId);
});


/* ================================
   SEARCH
================================ */

searchInput.addEventListener(
    "input",
    renderFoods
);


/* ================================
   CATEGORY FILTERS
================================ */

filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        currentCategory =
            this.dataset.category;

        renderFoods();
    });

});


/* ================================
   INITIAL LOAD
================================ */

renderFoods();
renderTodayDiet();