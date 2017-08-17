//close the webwoker when it is don
function startWorker() {
    if (typeof (Worker) !== 'undefined') {
        console.log("web worker supported");
        if (typeof (w) == "undefined") {
            console.log('create web worker');
            w = new Worker('worker.js');
        }
        w.onmessage = function (event) {
            console.log(event);
            document.getElementById('result').innerHTML = event.data;
        }
    } else {
        console.log("web worker not supported");
    }
}

function stopWorker() {
    console.log("worker stopped");
    w.terminate();
    w = undefined;
}