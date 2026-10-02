let x=5;

{
    {
        {
            {
                {
                    { 
                        x=11;
                        console.log(x);
                        {   
                            x=99;
                            console.log(x);
                            {
                                x=100;
                                console.log(x);
                            }
                        }
                    }
                }
            }
        }
    }
}

//Question : What is the output of the above code. 

// Output : 11 99 100