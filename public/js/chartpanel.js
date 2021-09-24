/**dummy */
let human_idea_list = [
    {
        action:'buy',
        symbol:'EURUSD',
        price:200,
        timeframe:'M5',
        tp1:1632442667672,
        tp2:1632442667672,
        tp3:1632442667672,
        sl:"",
        executiontype:"",
        tradetype:'scalp',
        notes:'',
        agent:'Drkathy'
    },
    {
        action:'sell',
        symbol:'EURUSD',
        price:200,
        timeframe:'M5',
        tp1:1632442667672,
        tp2:1632442667672,
        tp3:1632442667672,
        sl:"",
        executiontype:"",
        tradetype:'scalp',
        notes:'',
        agent:'Drkathy'
    },
    {
        action:'buy',
        symbol:'EURUSD',
        price:200,
        timeframe:'M5',
        tp1:1632442667672,
        tp2:1632442667672,
        tp3:1632442667672,
        sl:"",
        executiontype:"",
        tradetype:'scalp',
        notes:'',
        agent:'Drkathy'
    },
    {
        action:'sell',
        symbol:'EURUSD',
        price:200,
        timeframe:'M5',
        tp1:1632442667672,
        tp2:1632442667672,
        tp3:1632442667672,
        sl:"",
        executiontype:"",
        tradetype:'scalp',
        notes:'',
        agent:'Drkathy'
    },
    {
        action:'sell',
        symbol:'EURUSD',
        price:200,
        timeframe:'M5',
        tp1:1632442667672,
        tp2:1632442667672,
        tp3:1632442667672,
        sl:"",
        executiontype:"",
        tradetype:'scalp',
        notes:'',
        agent:'Drkathy'
    },
    {
        action:'buy',
        symbol:'EURUSD',
        price:200,
        timeframe:'M5',
        tp1:1632442667672,
        tp2:1632442667672,
        tp3:1632442667672,
        sl:"",
        executiontype:"",
        tradetype:'scalp',
        notes:'',
        agent:'Drkathy'
    },
    {
        action:'sell',
        symbol:'EURUSD',
        price:200,
        timeframe:'M5',
        tp1:1632442667672,
        tp2:1632442667672,
        tp3:1632442667672,
        sl:"",
        executiontype:"",
        tradetype:'scalp',
        notes:'',
        agent:'Drkathy'
    },
    {
        action:'sell',
        symbol:'EURUSD',
        price:200,
        timeframe:'M5',
        tp1:1632442667672,
        tp2:1632442667672,
        tp3:1632442667672,
        sl:"",
        executiontype:"",
        tradetype:'scalp',
        notes:'',
        agent:'Drkathy'
    },
    {
        action:'buy',
        symbol:'EURUSD',
        price:200,
        timeframe:'M5',
        tp1:1632442667672,
        tp2:1632442667672,
        tp3:1632442667672,
        sl:"",
        executiontype:"",
        tradetype:'scalp',
        notes:'',
        agent:'Drkathy'
    },
    {
        action:'sell',
        symbol:'EURUSD',
        price:200,
        timeframe:'M5',
        tp1:1632442667672,
        tp2:1632442667672,
        tp3:1632442667672,
        sl:"",
        executiontype:"",
        tradetype:'scalp',
        notes:'',
        agent:'Drkathy'
    },
]
/**dumy-end */

let algoList = $(".algo-list")
let algoListContent = $(".algo-list-content")
$(".side-bar-item").click(function(){
    //console.log($(this).class())
    if($(this).hasClass('algo')){
        if(algoList.is(":hidden"))
        {
            console.log('hide')
            let items = human_idea_list;
            let htmlstr = ''
            items.forEach((item)=>{
                htmlstr += `
                <div class="algo-list-item ${item.action}">
                    <div class="algo-list-item-symbol">
                        ${item.symbol}(${item.timeframe})
                    </div>
                    <div class="algo-list-item-price">
                        Price:${item.price}
                    </div>
                    <div class="algo-list-item-tp">
                        TIME (UTC): 2021-08-11 13:00:07
                    </div>
                    <div class="algo-list-item-tp">
                        TIME (UTC): 2021-08-11 13:00:07
                    </div>
                </div>
                `
            })
            algoListContent.html(htmlstr)
        }
        
        
        algoList.toggle(100)
    }
})