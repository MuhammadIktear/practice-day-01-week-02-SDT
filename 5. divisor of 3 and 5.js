const readline=require('node:readline')
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const div=[];
for(let i=1;i<=50;i++)
    {
        if(i%3==0 &&i%5==0)
            {
                div.push(i);
            }
    }

    console.log(div);
   