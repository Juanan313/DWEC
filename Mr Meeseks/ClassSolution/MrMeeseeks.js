
class MrMeeseeks {
    
    constructor(id) {
        this.id = id;
        this.greetingsMessage = "I'm Mr. Meeseeks look at me";
        this.messageOnRequest = ["Yes, siree","Ohh, okay!","Oh, yeah! Yes ma'am", "Ooh, yeah! Can do!"];
        this.greetings();
    }
    
    greetings() {
        console.log(this.greetingsMessage);
    }

    responseOnRequest() {
        console.log(this.messageOnRequest[Math.floor(Math.random() * this.messageOnRequest.length)])
    }

    learnRequest(deseo, objeto) {
        this.action = deseo(objeto) 
    }

    makeRequest(deseo, objeto) {
        let closure = function(cosa) {
            function execute() {
                return deseo + " " + cosa;
            }
            return execute
        };
        this.action = closure(objeto);
        this.responseOnRequest();
    }

    fullFillRequest() {
        console.log(this.action() + "All done!!");
    }
}

function singletonMrMeeseks() {
    const prototipo = new MrMeeseeks();

    return {
        get: function () {
            return prototipo;
          }
    }
}

exports.singletonMrMeeseks = function() {
    return singletonMrMeeseks();
};