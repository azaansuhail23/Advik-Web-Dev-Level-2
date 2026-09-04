class Laptop{
    constructor(ram,processor,generation){
        this.ram=ram;
        this.processor=processor;
        this.generation=generation;
    }

    displayMsg(){
        console.log(
            `Laptop Spec:: RAM ${this.ram} - Processor ${this.processor} ${this
                .generation} Gen`
            );
    }
}

class Dell extends Laptop{
    constructor(ram,processor,generation,model,size){
        super(ram,processor, generation);
        this.model=model;
        this.size=size;
    }
}

const modified = new Dell("32", "Intel", '1st Gen', "i9","14",);

console.log(modified);
modified.displayMsg();
