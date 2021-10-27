(function() {
    window.addEventListener("load", () => {
        //var load_time = window.PerformanceEntry.duration;
        var load_time = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart; 
        document.getElementById("time_measurement").innerHTML = load_time;
    });
}());