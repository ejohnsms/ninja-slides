export default class SlideUtil {
  function slideIterator(array) {
      let currentIndex = 0,
          current = null;

      return {
         prev: function() {
           if (currentIndex >= 0) {
             current = {value: array[currentIndex], done: false};
             currentIndex = currentIndex - 1;
             console.log('index: ' + currentIndex);
           } else {
             currentIndex = 0;
             current = {value: array[currentIndex], done: false};
             console.log('index: ' + currentIndex);
           }


           return current;
         },
         next: function() {
           if (currentIndex < array.length) {
             current = {value: array[currentIndex], done: false};
             currentIndex = currentIndex + 1;
             console.log('index: ' + currentIndex);
           } else {
             currentIndex = array.length - 1;
             current = {value: array[currentIndex], done: false};
             console.log('index: ' + currentIndex);
           }

           return current;
         }
      };
  }
}
