function myCommunity() {
    alert("we open this soon");

}
// console.log("testing");
// semester = document.getElementById("Semester").value;
// branch = document.getElementById("Branch").value;
// subject = document.getElementById("Subject").value;


// $(document).ready(function() {
//     $("#dataMaterial").hide();

// });


// function myFunc(semester, branch, subject) {
//     if (semester == 1 && branch == "CSE" && subject == "Math") {
//         data = document.getElementById("math");
//         document.getElementsByClassName("dataMaterial").innerHTML = data;
//     }

// }

// Filteration of DATA 

/*  Javascript filter
---------------------------------*/
// animate divs on start
var items = document.querySelectorAll('.filter-sections div');
// animate(items);

// filter on click
each('.filter-links li a', function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        filterLinks(el);
    });
});

const datahide = document.querySelector('.filter-sections');

// filter links functions
function filterLinks(element) {
    // get text 
    var el = element.textContent,
        // convert to lowercase
        linksTolowerCase = el.toLowerCase();
    // if all remove all elements
    if (el === 'All') {
        // first show all view class
        // each('.view', function(e) {
        //     e.classList.remove('view');
        // });
        // datahide.classList.add("data_hide");
        // no show init animation
        // animate(items);
    } else {
        datahide.classList.remove("data_hide");
        datahide.classList.remove("vh");
        // if not click all remove all elements
        each('.view', function(e) {
            e.classList.remove('view');
        });
    }
    // show animation for current elements
    animate(document.querySelectorAll('.' + linksTolowerCase));
};
// forech arrays
function each(el, callback) {
    var allDivs = document.querySelectorAll(el),
        alltoArr = Array.prototype.slice.call(allDivs);
    Array.prototype.forEach.call(alltoArr, function(selector, index) {
        if (callback) return callback(selector);
    });
};
// animate function
function animate(item) {
    (function show(counter) {
        setTimeout(function() {
            item[counter].classList.add('view');
            counter++;
            if (counter < item.length) show(counter);
        }, 50);
    })(0);
};



// function filterLinks(element) {
//     // get text 
//     var el = element.textContent,
//         // convert to lowercase
//         linksTolowerCase = el.toLowerCase();


//     if (el === 'All') {
//         // first show all view class
//         each('.view', function(e) {
//             e.classList.add('view');
//         });
//         // no show init animation
//         animate(items);
//     }
// }