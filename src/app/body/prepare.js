const prepare = (text)=>{
    let content = text;

        content = content.split("##");
        if(content.length%2==0){
            for(let i=1;i<content.length-1;i+=2){
                content[i]= `<h1 class="reddit-mono-lol text-3xl">${content[i]}</h1>`;
            }
        }else{
            for(let i=1;i<content.length;i+=2){
                content[i]= `<h1 class="reddit-mono-lol text-3xl">${content[i]}</h1>`;
            }
        }
        content = content.join(" ");

        content = content.split('\\n');
        content = content.join('<br>');
        content = content.split("---").join("<hr>");
        content = content.split("$v");
        if(content.length%2==0){
            for(let i=1;i<content.length-1;i+=2){
                content[i]= `
<iframe width="560" height="315" src="${content[i]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                `;
            }
        }else{
            for(let i=1;i<content.length;i+=2){
                content[i]= `
<iframe width="560" height="315" src="${content[i]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `;
            }
        }
        content = content.join(" ");
        content = content.split("$p");
        if(content.length%2==0){
            for(let i=1;i<content.length-1;i+=2){
                content[i]= `
                    <img src="${content[i]}" alt="">
                `;
            }
        }else{
            for(let i=1;i<content.length;i+=2){
                content[i]= `
                    <img src="${content[i]}" alt="">
                `;
            }
        }
        content = content.join(" ");
        return content  
}
module.exports = prepare;