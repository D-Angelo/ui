window.onload = function(){
    var slider = document.getElementById('date-range__slider');

    noUiSlider.create(slider, {
        start: [ timestamp('2016'), timestamp('2017') ],
        connect: true,
        range: {
            min: timestamp('2016'),
            max: timestamp('2017')
        },
        step: 7 * 24 * 60 * 60 * 1000

    });
    var dateValues = [
        document.getElementById('date-range__start'),
        document.getElementById('date-range__end')
    ];


    slider.noUiSlider.on('update', function( values, handle ) {
        dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));
    });

    var legendShow = document.getElementById("legend__show");
    legendShow.onclick = function(){
        var legend = document.getElementsByClassName("legend")[0];
        legend.classList.toggle("legend--visible");
    }
    var showSideBar = document.getElementById("showSideBar");
    showSideBar.onclick = function(){
        this.classList.toggle("active");
        var sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("sidebar--visible");
    }
    var expandButton = document.getElementsByClassName('expand-button');
    for(var i=0;i<expandButton.length; i++){
        expandButton[i].addEventListener("click",hideGroup);
    }
    function hideGroup(){
        this.classList.toggle("active");
        var stats = this.parentNode;
        stats.nextElementSibling.classList.toggle("sidebar-stats--hidden");
    }
}

function formatDate ( date ) {
    var months = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ];
    return months[date.getMonth()] + " " +date.getDate() + ", " +  date.getFullYear();
}

function timestamp(str){
    return new Date(str).getTime();
}