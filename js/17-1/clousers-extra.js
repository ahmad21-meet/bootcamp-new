//Block 1

(function immediateA(a) {
    return (function immediateB(b) {
    console.log(a);
    })(8);
    })(0);
    // should return  0 

    console.log("----------------------------------------------------");

    // block 2 

    let count = 0;
    (function immediate() {
    if (count === 0) {
    let count = 1;
    console.log(count);
    }
    console.log(count);
    })();

    //1
    //0

    console.log("----------------------------------------------------");

    // block 3 

    var module = (function () {
        var foo = 'foo'
        function addToFoo (bam) {
        foo = bam;
        return foo;
        }
        var publicInterface = {
        bar: function () {
        return 'bar';
        },
        bam: function () {
        return addToFoo('bam')
        }
        }
        return publicInterface
        })()
        console.log(module.bar())
        console.log(module.bam())

        //bar
        //bam 



        console.log("----------------------------------------------------");

    // block 4

    function createIncrement() {
        let count = 0;
        function increment() {
        count++;
        }
        let message = `Count is ${count}`;
        function log() {
        console.log(message);
        }
        return [increment, log];
        }
        const [increment, log] = createIncrement();
        increment();
        increment();
        increment();
        log();
        // count is 0


        console.log("----------------------------------------------------");

        // block 5 
          var x = 10;
            console.log(x);
            if (true) {
            (function() {
            var x = 20;
            console.log(x);
            })();
            }
            console.log(x)

            // 10 
            //20
            //10