/* =====================================================
   GYMTRACK - FIXED APP.JS
   ===================================================== */

const STORAGE = {
    history: "gymtrack_history",
    progress: "gymtrack_progress",
    planner: "gymtrack_planner",
    profile: "gymtrack_profile"
};


/* =====================================================
   EXERCISE DATA
   ===================================================== */

const workoutData = {

    chest: [
        ["Bench Press", "4", "10"],
        ["Incline Dumbbell Press", "3", "10"],
        ["Chest Fly", "3", "12"],
        ["Push Ups", "3", "15"]
    ],

    back: [
        ["Lat Pulldown", "4", "10"],
        ["Seated Cable Row", "3", "10"],
        ["One Arm Dumbbell Row", "3", "10"],
        ["Back Extension", "3", "12"]
    ],

    shoulders: [
        ["Shoulder Press", "4", "10"],
        ["Lateral Raise", "3", "12"],
        ["Front Raise", "3", "12"],
        ["Reverse Fly", "3", "12"]
    ],

    biceps: [
        ["Barbell Curl", "4", "10"],
        ["Dumbbell Curl", "3", "12"],
        ["Hammer Curl", "3", "12"]
    ],

    triceps: [
        ["Skull Crushers", "3", "10"],
        ["Triceps Pushdown", "3", "12"],
        ["Close Grip Bench Press", "3", "10"]
    ],

    legs: [
        ["Squats", "4", "10"],
        ["Leg Press", "3", "12"],
        ["Leg Curl", "3", "12"],
        ["Calf Raises", "4", "15"]
    ],

    abs: [
        ["Crunches", "3", "15"],
        ["Plank", "3", "30 sec"],
        ["Bicycle Crunch", "3", "15"]
    ]
};


/* =====================================================
   HELPERS
   ===================================================== */

function getData(key, defaultValue) {

    const saved = localStorage.getItem(key);

    if (!saved) {
        return defaultValue;
    }

    try {
        return JSON.parse(saved);
    } catch {
        return defaultValue;
    }
}


function saveData(key, value) {

    localStorage.setItem(
        key,
        JSON.stringify(value)
    );
}


function showToast(message) {

    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}


/* =====================================================
   NAVIGATION
   ===================================================== */

function setupNavigation() {

    const menuBtn =
        document.getElementById("menuBtn");

    const navLinks =
        document.getElementById("navLinks");

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("open");

    });
}


/* =====================================================
   WORKOUT PAGE
   ===================================================== */

let selectedWorkout = "chest";

let completed = [];


function showWorkout(type) {

    selectedWorkout = type;

    const list =
        document.getElementById("exerciseList");

    if (!list) return;

    const exercises =
        workoutData[type];

    if (!exercises) return;


    /* Change title */

    const title =
        document.getElementById("workoutTitle");

    if (title) {

        title.textContent =
            type.charAt(0).toUpperCase()
            + type.slice(1)
            + " Workout";

    }


    /* Change description */

    const info =
        document.getElementById("workoutInfo");

    if (info) {

        info.textContent =
            `${exercises.length} exercises • Complete your workout and save it to history.`;

    }


    /* Clear */

    list.innerHTML = "";


    /* Create exercises */

    exercises.forEach((exercise, index) => {

        const card =
            document.createElement("div");

        card.className =
            "exercise-card";


        const isDone =
            completed.includes(
                type + "-" + index
            );


        card.innerHTML = `

            <div class="exercise-number">
                ${index + 1}
            </div>

            <div class="exercise-info">

                <h3>
                    ${exercise[0]}
                </h3>

                <p>
                    ${type.toUpperCase()}
                </p>

                <div class="exercise-meta">

                    <span>
                        ${exercise[1]} Sets
                    </span>

                    <span>
                        ${exercise[2]} Reps
                    </span>

                </div>

            </div>

            <button
                class="check ${isDone ? "done" : ""}"
                data-index="${index}"
                type="button"
            >
                ✓
            </button>
        `;


        list.appendChild(card);

    });


    /* Complete buttons */

    list
        .querySelectorAll(".check")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const key =
                        selectedWorkout
                        + "-"
                        + button.dataset.index;


                    if (
                        completed.includes(key)
                    ) {

                        completed =
                            completed.filter(
                                item => item !== key
                            );

                        button.classList.remove(
                            "done"
                        );

                    } else {

                        completed.push(key);

                        button.classList.add(
                            "done"
                        );

                    }

                }
            );

        });


    /* Active button */

    document
        .querySelectorAll("[data-workout]")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.workout === type
            );

        });
}


function setupWorkoutPage() {

    const list =
        document.getElementById("exerciseList");

    if (!list) return;


    /* IMPORTANT:
       Attach buttons */

    const buttons =
        document.querySelectorAll(
            "[data-workout]"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                showWorkout(
                    this.dataset.workout
                );

            }
        );

    });


    /* First workout */

    showWorkout("chest");


    /* Save workout */

    const saveButton =
        document.getElementById(
            "startWorkout"
        );


    if (saveButton) {

        saveButton.addEventListener(
            "click",
            saveCurrentWorkout
        );

    }
}


/* =====================================================
   SAVE WORKOUT
   ===================================================== */

function saveCurrentWorkout() {

    const history =
        getData(
            STORAGE.history,
            []
        );


    const exercises =
        workoutData[selectedWorkout];


    const completedCount =
        exercises.filter(
            (_, index) =>
                completed.includes(
                    selectedWorkout
                    + "-"
                    + index
                )
        ).length;


    const workout = {

        id: Date.now(),

        name:
            selectedWorkout
                .charAt(0)
                .toUpperCase()
            +
            selectedWorkout.slice(1),

        date:
            new Date().toLocaleDateString(),

        time:
            new Date().toLocaleTimeString(),

        exercises:
            exercises.length,

        completed:
            completedCount

    };


    history.unshift(workout);


    saveData(
        STORAGE.history,
        history
    );


    completed = [];


    showWorkout(
        selectedWorkout
    );


    showToast(
        "Workout saved successfully!"
    );
}


/* =====================================================
   EXERCISE LIBRARY
   ===================================================== */

function setupExerciseLibrary() {

    const list =
        document.getElementById(
            "libraryList"
        );

    if (!list) return;


    let currentFilter = "all";


    function render() {

        const searchInput =
            document.getElementById(
                "exerciseSearch"
            );


        const search =
            searchInput
                ? searchInput.value
                    .toLowerCase()
                    .trim()
                : "";


        let allExercises = [];


        Object.keys(workoutData)
            .forEach(muscle => {

                workoutData[muscle]
                    .forEach(exercise => {

                        allExercises.push({

                            name: exercise[0],

                            sets: exercise[1],

                            reps: exercise[2],

                            muscle: muscle

                        });

                    });

            });


        const filtered =
            allExercises.filter(exercise => {

                const matchesFilter =
                    currentFilter === "all"
                    ||
                    exercise.muscle ===
                    currentFilter;


                const matchesSearch =
                    exercise.name
                        .toLowerCase()
                        .includes(search)
                    ||
                    exercise.muscle
                        .toLowerCase()
                        .includes(search);


                return (
                    matchesFilter
                    &&
                    matchesSearch
                );

            });


        list.innerHTML = "";


        if (filtered.length === 0) {

            list.innerHTML = `
                <div class="empty">
                    No exercises found.
                </div>
            `;

            return;
        }


        filtered.forEach(
            (exercise, index) => {

                const card =
                    document.createElement(
                        "div"
                    );

                card.className =
                    "exercise-card";


                card.innerHTML = `

                    <div class="exercise-number">
                        ${index + 1}
                    </div>

                    <div class="exercise-info">

                        <h3>
                            ${exercise.name}
                        </h3>

                        <p>
                            ${exercise.muscle}
                        </p>

                        <div class="exercise-meta">

                            <span>
                                ${exercise.sets} Sets
                            </span>

                            <span>
                                ${exercise.reps} Reps
                            </span>

                        </div>

                    </div>

                `;


                list.appendChild(card);

            }
        );
    }


    /* Search */

    const search =
        document.getElementById(
            "exerciseSearch"
        );


    if (search) {

        search.addEventListener(
            "input",
            render
        );

    }


    /* Filter buttons */

    document
        .querySelectorAll(
            "[data-filter]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    currentFilter =
                        button.dataset.filter;


                    document
                        .querySelectorAll(
                            "[data-filter]"
                        )
                        .forEach(btn => {

                            btn.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );


                    render();

                }
            );

        });


    render();
}


/* =====================================================
   HISTORY
   ===================================================== */

function setupHistory() {

    const list =
        document.getElementById(
            "historyList"
        );

    if (!list) return;


    function render() {

        const history =
            getData(
                STORAGE.history,
                []
            );


        if (history.length === 0) {

            list.innerHTML = `
                <div class="empty">
                    No workouts completed yet.
                </div>
            `;

            return;
        }


        list.innerHTML = "";


        history.forEach(workout => {

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                "list-item";


            item.innerHTML = `

                <div>

                    <h3>
                        ${workout.name} Workout
                    </h3>

                    <p class="muted">
                        ${workout.date}
                    </p>

                </div>

                <span class="pill accent">
                    ${workout.completed}/${workout.exercises}
                    Done
                </span>

            `;


            list.appendChild(item);

        });

    }


    render();


    const clearButton =
        document.getElementById(
            "clearHistory"
        );


    if (clearButton) {

        clearButton.addEventListener(
            "click",
            () => {

                if (
                    !confirm(
                        "Clear all workout history?"
                    )
                ) {
                    return;
                }


                localStorage.removeItem(
                    STORAGE.history
                );


                render();


                showToast(
                    "History cleared!"
                );

            }
        );

    }
}


/* =====================================================
   PLANNER
   ===================================================== */

function setupPlanner() {

    const form =
        document.getElementById(
            "plannerForm"
        );

    const list =
        document.getElementById(
            "plannerList"
        );


    if (!form || !list) return;


    function render() {

        const planner =
            getData(
                STORAGE.planner,
                []
            );


        if (planner.length === 0) {

            list.innerHTML = `
                <div class="empty">
                    No workouts planned yet.
                </div>
            `;

            return;
        }


        list.innerHTML = "";


        planner.forEach(
            (plan, index) => {

                const item =
                    document.createElement(
                        "div"
                    );

                item.className =
                    "list-item";


                item.innerHTML = `

                    <div>

                        <h3>
                            ${plan.day}
                        </h3>

                        <p class="muted">
                            ${plan.workout}
                        </p>

                    </div>

                    <button
                        class="btn btn-danger"
                        data-delete="${index}"
                        type="button"
                    >
                        Delete
                    </button>

                `;


                list.appendChild(item);

            }
        );


        list
            .querySelectorAll(
                "[data-delete]"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const planner =
                            getData(
                                STORAGE.planner,
                                []
                            );


                        planner.splice(
                            Number(
                                button.dataset.delete
                            ),
                            1
                        );


                        saveData(
                            STORAGE.planner,
                            planner
                        );


                        render();


                        showToast(
                            "Workout removed!"
                        );

                    }
                );

            });

    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const day =
                document.getElementById(
                    "plannerDay"
                ).value;


            const workout =
                document.getElementById(
                    "plannerWorkout"
                ).value;


            const planner =
                getData(
                    STORAGE.planner,
                    []
                );


            planner.push({
                day: day,
                workout: workout
            });


            saveData(
                STORAGE.planner,
                planner
            );


            render();


            showToast(
                "Workout added!"
            );

        }
    );


    render();
}


/* =====================================================
   PROGRESS
   ===================================================== */

function setupProgress() {

    const form =
        document.getElementById(
            "progressForm"
        );

    const list =
        document.getElementById(
            "progressList"
        );


    if (!form || !list) return;


    function render() {

        const progress =
            getData(
                STORAGE.progress,
                []
            );


        if (progress.length === 0) {

            list.innerHTML = `
                <div class="empty">
                    No progress entries yet.
                </div>
            `;

            return;
        }


        list.innerHTML = "";


        progress.forEach(entry => {

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                "list-item";


            item.innerHTML = `

                <div>

                    <h3>
                        ${entry.weight} kg
                    </h3>

                    <p class="muted">
                        ${entry.date}
                    </p>

                </div>

                <span class="pill accent">
                    Weight
                </span>

            `;


            list.appendChild(item);

        });

    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const input =
                document.getElementById(
                    "progressWeight"
                );


            const weight =
                Number(input.value);


            if (!weight || weight <= 0) {

                showToast(
                    "Enter a valid weight."
                );

                return;
            }


            const progress =
                getData(
                    STORAGE.progress,
                    []
                );


            progress.unshift({

                weight: weight,

                date:
                    new Date()
                        .toLocaleDateString()

            });


            saveData(
                STORAGE.progress,
                progress
            );


            input.value = "";


            render();


            showToast(
                "Progress saved!"
            );

        }
    );


    render();
}


/* =====================================================
   DASHBOARD
   ===================================================== */

function setupDashboard() {

    const workouts =
        document.getElementById(
            "statWorkouts"
        );


    const progress =
        document.getElementById(
            "statProgress"
        );


    const weight =
        document.getElementById(
            "statWeight"
        );


    const recent =
        document.getElementById(
            "recentWorkouts"
        );


    if (
        !workouts &&
        !progress &&
        !weight &&
        !recent
    ) {
        return;
    }


    const history =
        getData(
            STORAGE.history,
            []
        );


    const progressData =
        getData(
            STORAGE.progress,
            []
        );


    const profile =
        getData(
            STORAGE.profile,
            {
                name: "Gym Member",
                weight: 55
            }
        );


    if (workouts) {

        workouts.textContent =
            history.length;

    }


    if (progress) {

        progress.textContent =
            progressData.length;

    }


    if (weight) {

        weight.textContent =
            profile.weight
                ? profile.weight + " kg"
                : "--";

    }


    const name =
        document.getElementById(
            "dashboardName"
        );


    if (name) {

        name.textContent =
            profile.name ||
            "Gym Member";

    }


    const streak =
        document.getElementById(
            "statStreak"
        );


    if (streak) {

        streak.textContent =
            history.length > 0
                ? "1"
                : "0";

    }


    if (recent) {

        if (history.length === 0) {

            recent.innerHTML = `
                <div class="empty">
                    No workouts completed yet.
                </div>
            `;

        } else {

            recent.innerHTML = "";


            history
                .slice(0, 5)
                .forEach(workout => {

                    const item =
                        document.createElement(
                            "div"
                        );

                    item.className =
                        "list-item";


                    item.innerHTML = `

                        <div>

                            <h3>
                                ${workout.name}
                                Workout
                            </h3>

                            <p class="muted">
                                ${workout.date}
                            </p>

                        </div>

                        <span class="pill accent">
                            ${workout.completed}/${workout.exercises}
                        </span>

                    `;


                    recent.appendChild(item);

                });

        }

    }
}


/* =====================================================
   START
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupNavigation();

        setupWorkoutPage();

        setupExerciseLibrary();

        setupHistory();

        setupPlanner();

        setupProgress();

        setupDashboard();

    }
);