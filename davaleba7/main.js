function mySetTimeout(delay) {
    return new Promise((resolve, reject) => {
        if (isNaN(delay)) {
            reject(new Error("Invalid delay"));
        } else {
            setTimeout(() => {
                resolve();
            }, delay * 1000);
        }
    });
}

function yidva(duration = 2) {
    return mySetTimeout(duration)
        .then(() => {
            console.log("Toy buying ended after " + duration + " seconds");
        })
        .catch((error) => {
            console.error("Error during toy buying:", error);
        });
}

function deliverToys(duration = 3) {
    return mySetTimeout(duration)
        .then(() => {
            console.log('Toy delivery succeeded after ' + duration + " seconds");
        })
        .catch((error) => {
            console.error("Error during toy delivery:", error);
        });
}

function toyGayidva(duration = 1) {
    return mySetTimeout(duration)
        .then(() => {
            console.log("Toy sold succeeded after " + duration + ' seconds');
        })
        .catch((error) => {
            console.error("Error during toy selling:", error);
        });
}

yidva(3);
deliverToys(4);
toyGayidva();