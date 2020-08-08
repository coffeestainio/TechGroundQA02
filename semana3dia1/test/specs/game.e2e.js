
describe('Game tests', () => { 

    it('should click as fast as possible', ()=> {  

        browser.url('http://zzzscore.com/1to50/')

        // for (i=1; i <51 ; i++){
        //     // $(`div=${i}`).click()
        //     $(`//div[text()='${i}']`).click()
        // }

        result = browser.execute(() => {

            for(i=1;i<26;i++){
                var el = document.evaluate(`//div[text()='${i}']`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
                el.dispatchEvent(new Event('tap', { 'bubbles': true }));
            }
            return "done";
        })

        // had to add here and loop twice for numbers on 25. Yes it is that fast that the event hasn't executed.     
        browser.pause(100);
        result = browser.execute(function(){

        for(i=26;i<51;i++){
            var el = document.evaluate(`//div[text()='${i}']`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
            el.dispatchEvent(new Event('tap', { 'bubbles': true }));
        }
        return "done";
    })
        
        let resultado = $('strong.level')
        resultado.waitForDisplayed()

        console.log('Resultado ',  resultado.getText())

    });

});

// Resultado  1.756
// Resultado headless 1.402
// Resultado con devtools 0.952
// Resultado con devtools 1.351
// Resultado con javascript 0.101