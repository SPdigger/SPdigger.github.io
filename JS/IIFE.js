(function() {
    window.addEventListener("load", () => {
        //var load_time = window.PerformanceEntry.duration;
        var load_time = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart; 
        //var load_time = window.performance.measure("page load time")
        performance.clearMeasures();
        document.getElementById("time_measurement").innerHTML = load_time;
    });
}());