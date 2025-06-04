const Challege = ()=>{
    function showNumbers(num1, num2){
        return <div>
            <p>
                Numero 1:{num1}<br/>
                Numero 2:{num2}
            </p>
            <button onClick={()=>console.log(num1+num2)}>Soma no console</button>
        </div>
        
    }

    return (
        <div>
            {showNumbers(10,10)}
        </div>
    )
}

export default Challege