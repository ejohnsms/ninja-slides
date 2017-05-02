const SUCCESS_STATUS = 200

export default class DataAccess {
    // This can be more generic by passing in the url param
    // Read the gist json data and return a promise

    makeAjax(verb, url, data = null) {
            const dataPromise = new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();

                request.open(verb, url);
                request.responseType = 'JSON';
                // When the request loads, check whether it was successful
                request.onload = () => {
                    if (request.status === SUCCESS_STATUS) {

                        resolve(request.response);
                    } else {
                        // If it fails, reject the promise with a error message
                        reject(Error(`error:${request.statusText}`));
                    }
                };
                request.onerror = () => {
                // Also deal with the case when the entire request fails
                // This is probably a network error,
                    reject(Error('There was a network error.'));
                };
              // Send the request
              request.send(data);
            });

        return dataPromise;
    }
}