const ZERO = 0,
      BY_ONE = 1;

export default class SlideUtil {
  slideIterator(array) {
      let currentIndex = ZERO,
          current = null;

      return {
        "next"() {
          if (currentIndex < array.length) {
            current = {
             "done": false,
             "value": array[currentIndex]
             };
            currentIndex += BY_ONE;
          } else {
            currentIndex = array.length - BY_ONE;
            current = {
              "done": false,
              "value": array[currentIndex]
             };
          }

          return current;
        },
         "prev"() {
           if (currentIndex >= ZERO) {
             current = {
               "done": false,
               "value": array[currentIndex]

              };
             currentIndex -= BY_ONE;
           } else {
             currentIndex = ZERO;
             current = {
                "done": false,
                "value": array[currentIndex]
              };
           }


           return current;
         }
      };
  }
}
