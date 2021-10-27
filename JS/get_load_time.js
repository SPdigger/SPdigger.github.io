window.onload = function get_load_time() {
    //var load_time = window.PerformanceEntry.duration;
    //const perfEntries = performance.getEntriesByType("navigation");
    //const [p] = perfEntries;
    var load_time = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart; 
    //var load_time = window.performance.getEntries;
    document.getElementById("time_measurement").innerHTML = load_time;
}
