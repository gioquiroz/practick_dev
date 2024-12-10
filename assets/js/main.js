function showCharts(trackingComments, commentCounter) {
    commentCounter.innerText = trackingComments.value.length;
}
document.addEventListener('DOMContentLoaded', function () {
    /* let trackingSection = document.getElementById("tracking"); */
    let trackingComments = document.getElementById("trackingComments");
    let commentCounter = document.getElementById("Counter");
    showCharts(trackingComments, commentCounter);
    trackingComments.addEventListener('input', function () {
        showCharts(trackingComments, commentCounter)
    })
    /* trackingComments.addEventListener('input', function () {
        const commentslength = trackingComments.value.length;
        commentCounter.textContent = `Palabras: ${commentslength}`;
    }); */
})


