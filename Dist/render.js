const calculator = new Calculator()

const render = function (arr) {
    $('.data2').empty()
    $('.data2').append(`
    <div>
        <div>
            <div class="ftrLabel">Fulltime Result</div>
                <div class="ftr">
                <div>
                    <div>1 - </div>
                    <div>${(calculator.homeWin(arr)).toFixed(2) + "%"}</div>
                </div>
                <div>
                    <div>X - </div>
                    <div>${(calculator.draw(arr)).toFixed(2) + "%"}</div>
                </div>
                <div>
                    <div>2 - </div>
                    <div>${(calculator.awayWin(arr)).toFixed(2) + "%"}</div>
                </div>
        </div>     
        <div>   
            <div class="ftrLabel">Double Chance</div>
                <div class="ftr">
                    <div>
                        <div>1X - </div>
                        <div>${(calculator.homeOrDraw(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>12 - </div>
                        <div>${(calculator.homeOrAway(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>X2 - </div>
                        <div>${(calculator.drawOrAway(arr)).toFixed(2) + "%"}</div>
                    </div>
                </div> 
        </div>
        <div>        
            <div class="ftrLabel">Under Goals</div>
                <div class="ftr">
                    <div>
                        <div>Under 0.5 - </div>
                        <div>${(calculator.under05Goals(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>Under 1.5 - </div>
                        <div>${(calculator.under15Goals(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>Under 2.5 - </div>
                        <div>${(calculator.under25Goals(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>Under 3.5 - </div>
                        <div>${(calculator.under35Goals(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>Under 4.5 - </div>
                        <div>${(calculator.under45Goals(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>Under 5.5 - </div>
                        <div>${(calculator.under55Goals(arr)).toFixed(2) + "%"}</div>
                    </div>
                </div>   
        </div>
        <div>         
            <div class="ftrLabel">Over Goals</div>
                <div class="ftr">
                    <div>
                        <div>Over 0.5 - </div>
                        <div>${(100 - calculator.under05Goals(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>Over 1.5 - </div>
                        <div>${(100 - calculator.under15Goals(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>Over 2.5 - </div>
                        <div>${(100 - calculator.under25Goals(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>Over 3.5 - </div>
                        <div>${(100 - calculator.under35Goals(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>Over 4.5 - </div>
                        <div>${(100 - calculator.under45Goals(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>Over 5.5 - </div>
                        <div>${(100 - calculator.under55Goals(arr)).toFixed(2) + "%"}</div>
                    </div>
                </div>
        </div>  



        <div>         
            <div class="ftrLabel">Exact Goals</div>
                <div class="ftr">
                    <div>
                        <div>0 - </div>
                        <div>${(calculator.exact0(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>1 - </div>
                        <div>${(calculator.exact1(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>2 - </div>
                        <div>${(calculator.exact2(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>3 - </div>
                        <div>${(calculator.exact3(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>4 - </div>
                        <div>${(calculator.exact4(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>5 - </div>
                        <div>${(calculator.exact5(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>6 - </div>
                        <div>${(calculator.exact6(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>7 - </div>
                        <div>${(calculator.exact7(arr)).toFixed(2) + "%"}</div>
                    </div>
                    <div>
                        <div>8 - </div>
                        <div>${(calculator.exact8(arr)).toFixed(2) + "%"}</div>
                    </div>
                </div>
        </div>       
    </div>
    `)
}